/* eslint-disable no-useless-escape */

// License information here: https://github.com/derikb/rpg-table-randomizer

/**
 * @prop {String} die Die notation.
 * @prop {Number} value Random roll for the die notation.
 */
class DiceResult {
    constructor ({
        die = '',
        value = 0
    }) {
        this.die = die;
        this.value = value;
    }
    toString () {
        return this.value;
    }
    toJSON () {
        return {
            className: 'DiceResult',
            die: this.die,
            value: this.value
        };
    }
}

class DiceRoller {
    /**
     *
     * @param {Number} die Die type
     * @returns {Number}
     */
    getSingleDieResult (die) {
        return randomInteger(1, die);
    }
    /**
     * Apply a modifier to the number of dice retained.
     * @param {Number[]} rolls
     * @param {String} diemod Modifier to dice (drop/keep high/low count).
     * @returns
     */
    applyDieMod (rolls, diemod) {
        const m = diemod.match(/^([dklh]{2})([0-9]*)$/);
        if (m === null) {
            return rolls;
        }
        const count = !m[2] ? 1 : parseInt(m[2]);
        switch (m[1]) {
            case 'dl':
                // Sort ascending
                rolls.sort((a, b) => a - b);
                rolls.splice(0, count);
                return rolls;
            case 'dh':
                // Sort descending
                rolls.sort((a, b) => b - a);
                rolls.splice(0, count);
                return rolls;
            case 'kl':
                // Sort ascending
                rolls.sort((a, b) => a - b);
                return rolls.slice(0, count);
            case 'kh':
                // Sort descending
                rolls.sort((a, b) => b - a);
                return rolls.slice(0, count);
            default:
                return rolls;
        }
    }
    /**
     * Dice rolling simulator
     * @param {Number} [die=6] Die type
     * @param {Number} [number=1] Number of times to roll the die
     * @param {Number} [modifier=0] Numeric modifier to dice total
     * @param {String} [mod_op=+] Operator for the modifier (+,-,/,*)
     * @param {String} [diemod=''] Modifier to the dice (like keep/drop high/low die)
     * @returns {Number} Number rolled (die*number [mod_op][modifier])
     */
    _parseDiceNotation (die = 6, number = 1, modifier = 0, mod_op = '+', diemod = '') {
        modifier = parseInt(modifier, 10);
        die = parseInt(die, 10);

        if (number <= 0) {
            number = 1;
        } else {
            number = parseInt(number, 10);
        }

        let rolls = [];
        for (let i = 1; i <= number; i++) {
            rolls.push(this.getSingleDieResult(die));
        }

        if (diemod !== '') {
            rolls = this.applyDieMod(rolls, diemod);
        }
        let sum = 0;
        if (rolls.length > 0) {
            sum = rolls.reduce((total, cur) => {
                return total + cur;
            });
        }
        if (modifier === 0) {
            return sum;
        }

        switch (mod_op) {
            case '*':
                sum = sum * modifier;
                break;
            case '-':
                sum = sum - modifier;
                break;
            case '/':
                sum = sum / modifier;
                break;
            case '+':
            default:
                sum = sum + modifier;
                break;
        }
        return Math.round(sum);
    }
    /**
     * takes a string like '3d6+2', 'd6', '2d6', parses it, and puts it through roll
     * @params {String} string a die roll notation
     * @returns {Number} the result of the roll
     */
    rollDie (str = '') {
        str = str.trim();
        const m = str.match(/^([0-9]*)d([0-9]+)([dklh]{2}[0-9]*)*(?:([\+\-\*\/])([0-9]+))*$/);
        if (!m) {
            return '';
        }
        return this._parseDiceNotation(m[2], m[1], m[5], m[4], m[3]);
    }
    /**
     * Return a dice result.
     * @param {String} die Die roll notation.
     * @returns {DiceResult}
     */
    getDiceResult (die = '') {
        return new DiceResult({
            die,
            value: this.rollDie(die)
        });
    }
}

/**
 * takes a string like '3d6+2', 'd6', '2d6', parses it, and puts it through roll
 * @params {String} string a die roll notation
 * @returns {Number} the result of the roll
 */
const rollDie = function (string = '') {
    const roller = new DiceRoller();
    return roller.rollDie(string);
};

/**
 * Return a dice result.
 * @param {String} die Die roll notation.
 * @returns {DiceResult}
 */
const getDiceResult = function (die = '') {
    const roller = new DiceRoller();
    return new DiceResult({
        die,
        value: roller.rollDie(die)
    });
};

/**
 * Display options for subtable results. Used in RandomTable and RandomTableResultSet
 */
class DisplayOptions {
    /**
     *
     * @property {String} table Subtable name.
     * @property {Boolean} hide_table Hide the subtable name.
     * @property {Boolean} hide_result Hide the result.
     * @property {Boolean} hide_desc Hide the description field.
     */
    constructor ({
        table = '',
        hide_table = false,
        hide_result = false,
        hide_desc = false
    }) {
        this.table = table;
        /** Accept true, 1, or '1' to set these properties */
        this.hide_table = (hide_table === true || hide_table === '1' || hide_table === 1);
        this.hide_result = (hide_result === true || hide_result === '1' || hide_result === 1);
        this.hide_desc = (hide_desc === true || hide_desc === '1' || hide_desc === 1);
    }
    /**
     * Custom JSON handler to strip defaults.
     * @returns {Object}
     */
    toJSON () {
        const returnObj = {
            className: 'DisplayOptions',
            table: this.table
        };
        if (this.hide_table) {
            returnObj.hide_table = true;
        }
        if (this.hide_result) {
            returnObj.hide_result = true;
        }
        if (this.hide_desc) {
            returnObj.hide_desc = true;
        }
        return returnObj;
    }
}

/**
 * Adapted from http://blog.javascriptroom.com/2013/01/21/markov-chains/
 */
class MarkovGenerator {
    /**
     *
     * @param {Object} memory the "memory" where the language parts go
     * @param {String} separator If you want to delimit the generated parts
     * @param {Number} order How many... something... to something.... oh it's been too long I don't remember how this works...
     */
    constructor ({
        memory = {},
        separator = '',
        order = 2
    }) {
        this.memory = memory;
        this.separator = separator;
        this.order = order;
    }
    /**
     * Is the memory key already set.
     * @param {String} key
     */
    isMemoryKeySet (key) {
        return !!this.memory[key];
    }
    /**
     * Generate a starting array for the chain based on the order number
     * @return {Array} just an empty array of length=order
     */
    genInitial () {
        return Array(this.order).fill('');
    }
    /**
     * Get a random array element
     * @param {Array} arr an array
     * @return {String|Object} random value
     */
    getRandomValue (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    /**
     * Chunk the word or phrase
     * @param {String} txt the text to chunk
     * @param {Function} cb callback function
     * @return {null} null
     */
    breakText (txt, cb) {
        const parts = txt.split(this.separator);
        const prev = this.genInitial();

        parts.forEach((v) => {
            v = v.toLowerCase();
            cb(prev, v);
            prev.shift();
            prev.push(v);
        });
        cb(prev, '');
    }
    /**
     * Feed text to memory
     * @param {String} key key for the chain (so we can store multiple memories)
     * @param {String} txt word or phrase
     * @return {null} null
     */
    learn (key, txt) {
        const mem = (this.memory[key]) ? this.memory[key] : {};
        // split up text then add the calculated parts to the memory for this key
        this.breakText(txt, (key, value) => {
            if (!mem[key]) {
                mem[key] = [];
            }
            mem[key].push(value);
            return mem;
        });
        this.memory[key] = mem;
    }
    /**
     * Iterate through, calls self
     * @param {Array} state array of most recent x(x=order) elements in chain
     * @param {Array} ret the chain
     * @return {Array}
     */
    step (state, ret) {
        const nextAvailable = this.memory[this.cur_key][state] || [''];
        const next = this.getRandomValue(nextAvailable);
        // we don't have anywhere to go
        if (!next) {
            return ret;
        }
        ret.push(next);
        const nextState = state.slice(1);
        nextState.push(next);
        return this.step(nextState, ret);
    }
    /**
     * Return a generated response
     * @param {String} key key for the chain (so we can store multiples
     * @param {Array} seed letters to start the response (?)
     */
    generate (key, seed) {
        if (!seed) {
            seed = this.genInitial();
        }
        this.cur_key = key;
        return seed.concat(this.step(seed, [])).join(this.separator);
    }
}


/**
 * Object store for registered schemas
 */
const Schemas = {};
/**
 * Add new schema to store.
 * @param {NPCSchema} schema
 * @throws {Error} For invalid args.
 */
const registerSchema = function (schema) {
    if (!(schema instanceof NPCSchema) || !schema.key || schema.key === 'base') {
        throw Error('Invalid schema');
    }
    // store it for later reference
    Schemas[schema.key] = schema;
};
/**
 * Get all registered schemas.
 * @returns {NPCSchema[]}
 */
const getAllSchemas = function () {
    return Schemas;
};
/**
 * Get schema by key.
 * @param {String} key Schema key.
 * @returns {NPCSchema|null}
 */
const getSchemaByKey = function (key) {
    return Schemas[key] || null;
};
/**
 * Create a new NPC from a Schema.
 * @param {String} schemaKey Key for an NPCSchema
 * @param {TableRoller} tableRoller
 * @param {Boolean} generateId Should the npc get a uuid.
 * @returns NPC
 * @throws {Error} For invalid args.
 */
const initializeNewNPC = function (schemaKey, tableRoller, generateId = true) {
    const schema = getSchemaByKey(schemaKey);
    if (!schema) {
        throw Error('Schema not found.');
    }
    if (!(tableRoller instanceof TableRoller)) {
        throw Error('Invalid tableRoller');
    }

    const npc = new NPC({
        schema: schemaKey,
        id: (generateId ? null : '')
    });

    applySchemaToNPC(schema, tableRoller, npc);
    return npc;
};

const typeResult = function (field, result) {
    let value = null;
    if (field.isString() || field.isText() || field.isModifier()) {
        value = result.toString();
    } else if (field.isNumber()) {
        value = parseInt(result, 10);
    } else {
        value = result;
    }
    return value;
};

/**
 * Apply a schema to an NPC.
 * You could pass in children of NPC class here.
 * @param {NPCSchema} schema
 * @param {TableRoller} tableRoller
 * @param {NPC} npc With either blank schema or set to same key as schema arg
 * @throws {Error} For invalid args.
 */
const applySchemaToNPC = function (schema, tableRoller, npc) {
    if (!(npc instanceof NPC)) {
        throw Error('npc object must be or inherit from NPC class.');
    }
    if (!(schema instanceof NPCSchema)) {
        throw Error('schema object must be or inherit from NPCSchema class.');
    }
    if (!(tableRoller instanceof TableRoller)) {
        throw Error('Invalid tableRoller');
    }
    if (npc.schema === '') {
        npc.schema = schema.key;
    }
    if (npc.schema !== schema.key) {
        throw Error('npc already has schema set.');
    }
    schema.fields.forEach((field) => {
        const key = field.key;
        if (!isEmpty(field.starting_value)) {
            npc.setFieldValue(key, field.starting_value);
            return;
        }
        if (isEmpty(field.source)) {
            npc.setFieldValue(key, field.defaultEmpty);
            return;
        }
        if (field.isArray()) {
            const value = [];
            const ct = (field.count) ? field.count : 1;
            for (let i = 0; i < ct; i++) {
                const result = tableRoller.convertToken(field.source);
                value.push(typeResult(field, result));
            }
            npc.setFieldValue(key, value);
            return;
        }
        const result = tableRoller.convertToken(field.source);
        npc.setFieldValue(key, typeResult(field, result));
    });
};

/**
 * Class for NPCs
 * @param {String} id Some kind of indentifier.
 * @param {String} schema Key for a NPCSchema used for this NPC.
 * @param {Map<String, Any>} fields Field values indexed by NPCSchemaField key.
 */
class NPC {
    constructor ({
        id = null,
        schema = '',
        fields = new Map()
    }) {
        // if null, generate a uuid
        if (id === null) {
            this.id = uuidv4();
        } else {
            this.id = id;
        }
        this.schema = schema;
        if (fields instanceof Map) {
            this.fields = fields;
        } else if (isObject(fields)) {
            this.fields = new Map();
            for (const [key, value] of Object.entries(fields)) {
                this.fields.set(key, this._convertFieldValue(value));
            }
        }
    }
    _convertFieldValue (value) {
        if (value === null || typeof value === 'undefined') {
            return null;
        }
        if (typeof value === 'string') {
            return value;
        }
        if (Array.isArray('value')) {
            return value.map((el) => {
                return this._convertFieldValue(el);
            });
        }
        if (value instanceof RandomTableResultSet ||
            value instanceof RandomTableResult ||
            value instanceof TableErrorResult ||
            value instanceof DiceResult) {
            return value;
        }
        switch (value.className) {
            case 'RandomTableResultSet':
                return new RandomTableResultSet(value);
            case 'RandomTableResult':
                return new RandomTableResult(value);
            case 'TableErrorResult':
                return new TableErrorResult(value);
            case 'DiceResult':
                return new DiceResult(value);
            default:
                return value;
        }
    }
    /**
     * Set field value.
     * @param {String} key Field key.
     * @param {Any} value Value for field.
     */
    setFieldValue (key, value) {
        this.fields.set(key, this._convertFieldValue(value));
    }
    /**
     * Get field keys as array.
     * @returns {String[]}
     */
    getFieldKeys () {
        return Array.from(this.fields.keys());
    }
    /**
     * Get value by field key.
     * @param {String} key NPCSchemaField.key
     * @returns {RandomTableResultSet|RandomTableResultSet[]|DiceResult|String|Any}
     */
    getFieldValue (key) {
        const value = this.fields.get(key);
        if (typeof value === 'undefined') {
            return null;
        }
        return value;
    }
    /**
     * Custom JSON handler to strip empty props.
     * @returns {Object}
     */
    toJSON () {
        const obj = defaultToJSON.call(this);
        obj.className = 'NPC';
        return obj;
    }
}

/**
 * Constants used in NPC classes.
 */

/**
 * Values for NPCSchemaField.type
 */
const NPCFieldTypeConst = Object.freeze({
    FIELD_TYPE_STRING: 'string',
    FIELD_TYPE_TEXT: 'text',
    FIELD_TYPE_NUMBER: 'number',
    FIELD_TYPE_NOTE: 'note',
    FIELD_TYPE_RESULTSET: 'resultset',
    FIELD_TYPE_MODIFIER: 'modifier'
});


/**
 * Schema for creating NPCs.
 */
class NPCSchema {
    /**
     * @property {String} key Identifying key
     * @property {String} name Name of schema.
     * @property {String} author Name of author.
     * @property {Map<String, NPCSchemaField>} fields Data fields will be converted to NPCSchemaField if necessary.
     */
    constructor ({
        key = '',
        name = '',
        author = '',
        fields = []
    }) {
        this.key = key;
        this.name = name;
        this.author = author;
        this.fields = new Map();
        if (Array.isArray(fields)) {
            fields.forEach((obj) => {
                this._convertField(obj);
            });
        } else {
            Object.keys(fields).forEach((key) => {
                this._convertField(fields[key]);
            });
        }
    }
    _convertField (value) {
        if (value instanceof NPCSchemaField) {
            this.fields.set(value.key, value);
            return;
        }
        if (isObject(value)) {
            const field = new NPCSchemaField(value);
            this.fields.set(field.key, field);
        }
    }
    /**
     * Get field keys as array.
     * @returns String[]
     */
    getFieldKeys () {
        return Array.from(this.fields.keys());
    }
    /**
     * Get a Field by the key.
     * @param {String} key
     * @returns {NPCSchemaField|undefined}
     */
    getFieldByKey (key) {
        return this.fields.get(key);
    }
    /**
     * Get field label by the key.
     * @param {String} key
     * @returns {String}
     */
    getFieldLabelByKey (key) {
        const field = this.getFieldByKey(key);
        if (!field) {
            return '';
        }
        return field.label;
    }
    /**
     * Custom JSON handler to strip empty props.
     * @returns {Object}
     */
    toJSON () {
        const obj = defaultToJSON.call(this);
        obj.className = 'NPCSchema';
        return obj;
    }
}
/**
 * Specific field in NPC Schema.
 */
class NPCSchemaField {
    /**
     *
     * @property {String} key Identifying key
     * @property {String} label Readable label for field.
     * @property {String} [type=string] Type of data in field. Valid: see NPCFieldTypeConst.
     * @property {String} [source=''] Source of data for TableRoller in the form of a token (see TableRoller, ex: "name:french", "table:color", etc.)
     * @property {Number} [count=1] Number of entries for array types.
     * @property {Array|String|Number} starting_value An optional starting value.
     */
    constructor ({
        key = '',
        label = '',
        type = NPCFieldTypeConst.FIELD_TYPE_STRING,
        source = '',
        count = 1,
        starting_value = null
    }) {
        this.key = key;
        this.label = label;
        this.type = type.toLowerCase();
        this.source = source;
        this.count = count;
        if (!this.count || this.count <= 0) {
            this.count = 1;
        }
        if (starting_value !== null) {
            this.starting_value = starting_value;
        }
    }
    /**
     * Default value for this field by type if empty.
     */
    get defaultEmpty () {
        if (this.count > 1) {
            return [];
        }
        switch (this.type) {
            case NPCFieldTypeConst.FIELD_TYPE_STRING:
            case NPCFieldTypeConst.FIELD_TYPE_TEXT:
                return '';
            case NPCFieldTypeConst.FIELD_TYPE_NOTE:
            case NPCFieldTypeConst.FIELD_TYPE_RESULTSET:
                return null;
            case NPCFieldTypeConst.FIELD_TYPE_NUMBER:
            case NPCFieldTypeConst.FIELD_TYPE_MODIFIER:
                return 0;
            // backwards compatible, prefer use of count with specific type
            case 'array':
                return [];
        }
        return null;
    }
    isString () {
        return this.type === NPCFieldTypeConst.FIELD_TYPE_STRING;
    }
    isText () {
        return this.type === NPCFieldTypeConst.FIELD_TYPE_TEXT;
    }
    isNumber () {
        return this.type === NPCFieldTypeConst.FIELD_TYPE_NUMBER;
    }
    isModifier () {
        return this.type === NPCFieldTypeConst.FIELD_TYPE_MODIFIER;
    }
    isNote () {
        return this.type === NPCFieldTypeConst.FIELD_TYPE_NOTE;
    }
    isResult () {
        return this.type === NPCFieldTypeConst.FIELD_TYPE_RESULTSET;
    }
    /**
     * Is this some sort of array type.
     * @returns {Boolean}
     */
    isArray () {
        // backwards compatible, prefer specific type and setting count to > 1
        if (this.type === 'array') {
            return true;
        }
        return this.count > 1;
    }
    /**
     * Custom JSON handler to strip empty props.
     * @returns {Object}
     */
    toJSON () {
        const obj = defaultToJSON.call(this);
        obj.className = 'NPCSchemaField';
        return obj;
    }
}

/**
 * Is it empty (stolen from Underscore)
 * NOTE: this doesn't handle numbers well...
 * @param {Object|String|?} obj some type of things
 * @return {Boolean} is it empty?
 */
const isEmpty = function (obj) {
    if (obj === null || obj === undefined) {
        return true;
    }
    if (Array.isArray(obj) || isString(obj)) {
        return obj.length === 0;
    }
    if (obj instanceof Set || obj instanceof Map) {
        return obj.size === 0;
    }
    return Object.keys(obj).length === 0;
};
/**
 * Is it a String (stolen from Underscore)
 * @param {Object|String|?} obj some type of things
 * @return {Boolean} is it an string?
 */
const isString = function (obj) {
    return toString.call(obj) === '[object String]';
};
/**
 * Is it an Object (stolen from Underscore).
 * Note: This will return True for an Array also.
 * @param {Object|String|?} obj some type of things
 * @return {Boolean} is it an object?
 */
const isObject = function (obj) {
    if (Array.isArray(obj) ||
        obj instanceof Set ||
        obj instanceof Map) {
        return false;
    }
    const type = typeof obj;
    return (type === 'function' || type === 'object') && !!obj;
};
/**
 * Is a given variable undefined?
 * @param {Object|String|?} obj object to test
 * @return {Boolean} is it undefined
 */
const isUndefined = function (obj) {
    return obj === undefined;
};
/**
 * Capitalize a string
 * @param {String} string a string
 * @return {String} string with first letter capitalized
 */
const capitalize = function (string) {
    return isEmpty(string) ? string : string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * Convert a value for serialization.
 * @param {Any} value
 * @returns {Any} Though not Map or any class/object with a toJSON method.
 */
const serializeValue = function (value) {
    if (value === null ||
        typeof value === 'undefined' ||
        typeof value === 'function') {
        return;
    }
    if (isString(value)) {
        return value;
    }
    if (typeof value === 'number') {
        return value;
    }
    if (Array.isArray(value)) {
        return value.map((el) => serializeValue(el));
    }
    if (typeof value.toJSON === 'function') {
        return value.toJSON();
    }
    // Convert Maps to plain objects
    if (value instanceof Map) {
        const obj = {};
        value.forEach(function (val, key) {
            obj[key] = serializeValue(val);
        });
        return obj;
    }
    // Convert Set to Array
    if (value instanceof Set) {
        return Array.from(value).map((el) => serializeValue(el));
    }
    // a plain Object would just return itself, no matter its property values
    // not sure if I use any in the classes that it is a concern
    return value;
};
/**
 * Default toJSON for classes.
 * Bind this to the class instance when calling.
 * @returns {Object}
 */
const defaultToJSON = function () {
    // We save the objects class name as a property
    // so we can recreate the right structure later
    // but it is done in each class as I can't find a good way
    // to consistently get the class name.
    const returnObj = {};
    for (const property in this) {
        const value = this[property];

        const value2 = serializeValue(value);
        if (typeof value2 === 'undefined') {
            continue;
        }
        returnObj[property] = value2;
    }
    return returnObj;
};

/**
 * Sum an array
 * @param {Array} arr an array of numbers
 * @returns {Number} Total value of numbers in array
 */
const arraySum = function (arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        const v = parseFloat(arr[i]);
        if (!isNaN(v)) {
            total += v;
        }
    }
    return total;
};

/**
 * Random integer between two numbers (stolen from underscorejs)
 * @param {Number} [min=0] mininum value
 * @param {Number} [max=null] maximum value
 * @returns {Number} random value
 */
const randomInteger = function (min = 0, max = null) {
    if (max == null) {
        max = min;
        min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
};

/**
 * Random value selection
 * @param {Array} values an array of objects from which to choose
 * @param {Array} weights a matching array of integers to weight the values (i.e. values and weights are in the same order)
 * @returns {String} the randomly selected Array element from values param
 */
const getWeightedRandom = function (values, weights) {
    let n = 0;
    const num = randomInteger(1, arraySum.call(this, weights));
    let i = 0;
    for (i; i < values.length; i++) {
        n = n + weights[i];
        if (n >= num) {
            break;
        }
    }
    return values[i];
};
/**
 * Random value selection, wrapper for getWeightedRandom that processes the data into values/weights arrays
 * @param {String[]} data values
 * @returns {String|null} the randomly selected string
 */
const randomString = function (data) {
    const values = [];
    const weights = [];

    if (!Array.isArray(data) || data.length === 0) {
        return null;
    }
    data.forEach((entry) => {
        weights.push(1);
        values.push(entry);
    });

    return getWeightedRandom(values, weights);
};

/**
 * Custom error for handling known errors in the name generator.
 */
class RandomNameError extends Error {
    constructor (message) {
        super(message);
        this.name = 'RandomNameError';
    }
}

/** Capitalize names, account for multiword lastnames like "Van Hausen"
 * @param {String} name a name
 * @return {String} name capitalized
 */
const capitalizeName = function (name) {
    if (!name) {
        return '';
    }
    const leave_lower = ['of', 'the', 'from', 'de', 'le', 'la'];
    // need to find spaces in name and capitalize letter after space
    const parts = name.split(' ');
    const upper_parts = parts.map((w) => {
        return (leave_lower.indexOf(w) >= 0) ? w : `${capitalize(w)}`;
    });
    return upper_parts.join(' ');
};

/**
 * @prop {Map<RandomNameType>} nameTypes
 * @prop {MarkovGenerator} _markov
 */
class RandomNameGenerator {
    /**
     * Random name generation.
     * @param {RandomNameType[]} namedata
     * @param {Number} [markovOrder=3] Markov generator settings.
     */
    constructor ({
        namedata = [],
        markovOrder = 3
    }) {
        this.nameTypes = new Map();
        if (Array.isArray(namedata)) {
            namedata.forEach((type) => {
                this.registerNameType(type);
            });
        }
        this._markov = new MarkovGenerator({ order: markovOrder });
    }
    /**
     * Add some name data
     * Note: you can overwrite existing name_types if you want
     * @param {RandomNameType} type
     * @throws {RandomNameError}
     */
    registerNameType (type) {
        if (!(type instanceof RandomNameType)) {
            throw new RandomNameError('Must be instance of RandomNameType');
        }
        if (!type.key) {
            throw new RandomNameError('RandomNameType must have key set.');
        }
        if (type.key === 'random') {
            throw new RandomNameError(`RandomNameType key ${type.key} is reserved.`);
        }
        if (type.male.length === 0 && type.female.length === 0 && type.surname.length === 0) {
            throw new RandomNameError(`RandomNameType ${type.key} must include male, female, or surname lists.`);
        }
        this.nameTypes.set(type.key, type);
    }
    /**
     * Make sure namedata is set.
     * @param {String} name_type
     * @param {String} [subtype=''] Subtype like a gender or 'surname'
     * @throws RandomNameError
     */
    _validateNameType (name_type, subtype = '') {
        const type = this.nameTypes.get(name_type);
        if (!type) {
            throw new RandomNameError('Invalid name type.');
        }
        if (!subtype) {
            return;
        }
        if (!Array.isArray(type[subtype]) || type[subtype].length === 0) {
            throw new RandomNameError(`${name_type} type does not have subtype ${subtype}`);
        }
    }
    /**
     * Keys of the name types that are set.
     * @returns {String[]}
     */
    getValidNameTypes () {
        return Array.from(this.nameTypes.keys());
    }
    /**
     * Get a random name type from the available types.
     * @returns {String}
     */
    getRandomNameType () {
        return randomString(Array.from(this.nameTypes.keys())) || '';
    }
    /**
     * Get the name type
     * @param {String} name_type Name type key or random.
     * @returns {RandomNameType}
     * @throws {RandomNameError}
     */
    _getNameType (name_type) {
        if (name_type === 'random') {
            // randomize a type...
            name_type = this.getRandomNameType();
        }
        const nameType = this.nameTypes.get(name_type);
        if (!nameType) {
            throw new RandomNameError('Invalid name type.');
        }
        return nameType;
    }
    /**
     * Get a name list
     * @param {String} name_type
     * @param {String} subtype
     * @returns {String[]}
     */
    _getNameList (name_type = 'random', subtype = 'mixed') {
        const nameType = this._getNameType(name_type);
        if (subtype === 'surname') {
            if (nameType.surname.length === 0) {
                throw new RandomNameError(`${name_type} type does not have subtype ${subtype}`);
            }
            return nameType.surname;
        }
        const list = nameType.getPersonalNameList(subtype);
        if (list.length === 0) {
            throw new RandomNameError(`${name_type} type does not have subtype ${subtype}`);
        }
        return list;
    }
    /**
     * Select a personal name from one of the lists.
     * @param {String} name_type what list/process to use, else random
     * @param {String} gender
     * @returns {String}
     * @throws {RandomNameError}
     */
    selectPersonalName (name_type = 'random', gender = 'random') {
        const nameList = this._getNameList(name_type, gender);
        return capitalizeName(randomString(nameList));
    }
    /**
     * Select a sur/last name only from one of the lists
     * @param {String} name_type what list/process to use, else random
     * @returns {String} a name
     * @throws {RandomNameError}
     */
    selectSurname (name_type = 'random') {
        const nameList = this._getNameList(name_type, 'surname');
        return capitalizeName(randomString(nameList));
    }
    /**
     * Select a name from one of the lists
     * @param {String} name_type What name list/process to use else random
     * @param {String} gender male, female, random, ''
     * @param {String} style first=first name only, else full name
     * @returns {String} a name
     * @throws {RandomNameError}
     */
    selectName (name_type = 'random', gender = 'random', style = '') {
        const nameType = this._getNameType(name_type);
        const personalNameList = nameType.getPersonalNameList(gender);
        if (personalNameList.length === 0) {
            throw new RandomNameError(`${nameType.key} does not have list for ${gender}`);
        }
        let name = capitalizeName(randomString(personalNameList));
        if (style !== 'first' && nameType.surname.length > 0) {
            name += ` ${capitalizeName(randomString(nameType.surname))}`;
        }
        return name.trim();
    }
    /**
     * Create a personal name using markov chains.
     * @param {String} name_type what list/process to use, else random
     * @param {String} gender
     * @returns {String}
     * @throws {RandomNameError}
     */
    createPersonalName (name_type = 'random', gender = 'random') {
        const nameType = this._getNameType(name_type);
        const namelist = nameType.getPersonalNameList(gender);
        if (namelist.length === 0) {
            throw new RandomNameError('Starting name list is empty.');
        }
        const mkey = `${nameType.key}_${gender}`;
        if (!this._markov.isMemoryKeySet(mkey)) {
            namelist.forEach((v) => {
                this._markov.learn(mkey, v);
            });
        }
        return capitalizeName(this._markov.generate(mkey).trim());
    }
    /**
     * Create a sur/last name using markov chains.
     * @param {String} name_type what list/process to use, else random
     * @returns {String} a name
     * @throws {RandomNameError}
     */
    createSurName (name_type = 'random') {
        const nameType = this._getNameType(name_type);
        const namelist = nameType.surname;
        if (namelist.length === 0) {
            throw new RandomNameError('Starting name list is empty.');
        }
        const skey = `${nameType.key}_surname`;
        if (!this._markov.isMemoryKeySet(skey)) {
            namelist.forEach((v) => {
                this._markov.learn(skey, v);
            });
        }
        return capitalizeName(this._markov.generate(skey).trim());
    }
    /**
     * Create a name using Markov chains
     * @param {String} [name_type=random] what list/process to use
     * @param {String} [gender=random] male or female or both
     * @param {String} style first=first name only, else full name
     * @returns {String} a name
     * @throws {RandomNameError}
     */
    createName (name_type = 'random', gender = 'random', style = '') {
        if (name_type === 'random') {
            name_type = this.getRandomNameType();
        }
        let name = this.createPersonalName(name_type, gender);
        if (style !== 'first') {
            name = `${name} ${this.createSurName(name_type)}`;
        }
        return name.trim();
    }
    /**
     * Generate a bunch of names, half male, half female
     * @param {Number} [number=10] number of names in the list (half will be male, half will be female)
     * @param {String} [name_type] type of name or else it will randomly select
     * @param {Bool} [create=false] new names or just pick from list
     * @return {Object} arrays of names inside male/female property
     * @throws {RandomNameError}
     */
    generateList (number = 10, name_type = 'random', create = false) {
        const names = { male: [], female: [] };

        for (let i = 1; i <= number; i++) {
            const gender = (i <= Math.ceil(number / 2)) ? 'male' : 'female';
            if (create) {
                names[gender].push(this.createName(name_type, gender));
            } else {
                names[gender].push(this.selectName(name_type, gender));
            }
        }
        return names;
    }
    /**
     * Callback for the TableRoller to generate names from a token.
     * Token parts will be:
     * 0: "name" literally
     * 1: type of name (often a nationality/language/ethnicity/etc)
     * 2: gender ("male"/"female" for which name list to pick from, defaults to randomizing between them).
     * 3: style ("first" for a first name, else a full name will be returned)
     * @param {String[]} token_parts Parts of a token: 0 will be the action (name in most cases.)
     * @param {String} full_token Full token wrapped in double braces.
     * @param {RandomTable|null} curtable Current table token was found in (helpful if `this` token is found) or null
     * @returns {String}
     */
    nameTokenCallback (token_parts, full_token = '', curtable = null) {
        let string = '';
        if (!token_parts[1]) {
            token_parts[1] = 'random';
        }
        if (!token_parts[3] || token_parts[3] !== 'first') {
            token_parts[3] = '';
        }
        if (!token_parts[2]) {
            token_parts[2] = 'random';
        }
        try {
            string = this.selectName(token_parts[1], token_parts[2], token_parts[3]);
        } catch (e) {
            if (e instanceof RandomNameError) {
                return '';
            } else {
                throw e;
            }
        }
        return string;
    }
}


/**
 * Class for name data.
 */
class RandomNameType {
    /**
     *
     * @param {String} key Key to identify uniquely in tokens and methods.
     * @param {String} label Human readable label.
     * @param {String[]} male Names.
     * @param {String[]} female Names.
     * @param {String[]} surname Names.
     */
    constructor ({
        key = '',
        label = '',
        male = [],
        female = [],
        surname = []
    }) {
        this.key = key;
        this.label = label || key;
        this.male = Array.isArray(male) ? male : [];
        this.female = Array.isArray(female) ? female : [];
        this.surname = Array.isArray(surname) ? surname : [];
    }
    /**
     * Returns all personal names.
     * @returns {String[]}
     */
    getAllPersonalNames () {
        return Array.prototype.concat(this.male, this.female);
    }
    /**
     * Return a personal name list.
     * @param {String} gender Mixed, random, male, female
     * @returns {String[]}
     */
    getPersonalNameList (gender = 'random') {
        // Mixed gets all the personal names.
        if (gender === 'mixed' || gender === '') {
            return this.getAllPersonalNames();
        }
        // If specific gender is requested
        // return regardless of if it's empty
        if (gender === 'male') {
            return this.male;
        }
        if (gender === 'female') {
            return this.female;
        }
        // Else  return a random list
        const randomList = [];
        if (this.male.length > 0) {
            randomList.push('male');
        }
        if (this.female.length > 0) {
            randomList.push('female');
        }
        if (randomList.length === 0) {
            return [];
        }
        gender = randomString(randomList);
        return this[gender];
    }
    /**
     * Custom JSON handler because Map doesn't JSON stringify automatically.
     * @returns {Object}
     */
    toJSON () {
        const obj = defaultToJSON.call(this);
        obj.className = 'RandomNameType';
        return obj;
    }
}


/**
 * RandomTable: Model for tables used by TableRoller
 */
class RandomTable {
    /**
     * The primary attributes of this table
     * @property {String} id id for the table, primary key for database if used
     * @property {String} key identifier for the table
     * @property {String} [title] title of the table
     * @property {String} [author] author of the table
     * @property {String} [description] description of the table
     * @property {String} [source] source of the table
     * @property {String[]} [tags] subject tags
     * @property {String[]} [sequence] tables to roll on as default.
     * @property {String[]|Object[]} [table] default table. array of strings or objects. removed after initialization.
     * @property {Object} [tables] a property for each subtables.
     * @property {RandomTableEntries[]} tables[subtablename] Entries for subtables.
     * @property {String[]} [macro] for tables that are only used to aggregate result from other tables, this array consists of table keys and optionsl subtables to be rolled on in order
     * @property {Map[DisplayOptions]} [display_opt] Display options for the subtables.
     * @property {Array} [dependencies] table keys that are needed to get full results from this table
     *
     * Note the Constructor args are not exactly the same as the properties. Some type changes are made to convert data.
     */
    constructor ({
        id = 0,
        key = null,
        title = '',
        author = '',
        description = '',
        source = '',
        tags = [],
        sequence = [],
        tables = {},
        macro = [],
        dependencies = null,
        table = null,
        display_opt = []
    }) {
        this.id = id;
        this.key = key || this.id; // default to the id.
        this.title = title;
        this.author = author;
        this.description = description;
        this.source = source;
        this.tags = tags;
        this.sequence = sequence;
        this.macro = macro;
        this.dependencies = dependencies;

        this._normalizeTables(tables, table);

        this.display_opt = new Map();
        display_opt.forEach((data) => {
            const key = data.table || '';
            if (key) {
                if (data instanceof DisplayOptions) {
                    this.display_opt.set(key, data);
                    return;
                }
                const opt = new DisplayOptions(data);
                this.display_opt.set(key, opt);
            }
        });
    }
    toString () {
        return this.title;
    }
    /**
     * Make sure table entries are all RandomTableEntry objects.
     * @param {Array} data
     * @returns RandomTableEntry[]
     */
    _normalizeTable (data) {
        const entries = [];
        data.forEach((d) => {
            if (isEmpty(d)) {
                return;
            }
            if (isString(d)) {
                entries.push(new RandomTableEntry({
                    label: d
                }));
                return;
            }
            if (d instanceof RandomTableEntry) {
                entries.push(d);
                return;
            }
            if (isObject(d)) {
                entries.push(new RandomTableEntry(d));
            }
        });
        return entries;
    }
    /**
     * Normalize the tables/table constructor data.
     * @param {Object} tables
     * @param {Array} table
     * @returns
     */
    _normalizeTables (tables, table) {
        if (isEmpty(tables) && isEmpty(table)) {
            return;
        }
        this.tables = {};
        // put default table in first.
        if (!isEmpty(table) && Array.isArray(table)) {
            this.tables.default = this._normalizeTable(table);
        }
        if (isObject(tables)) {
            const subtableNames = Object.keys(tables);
            subtableNames.forEach((name) => {
                const data = tables[name];
                if (!Array.isArray(data)) {
                    return;
                }
                this.tables[name] = this._normalizeTable(data);
            });
        }
    }
    /**
     * Basic sequence of table rolls.
     * Either the start, the default sequence, the default table, or just the first one.
     * @param {String} start Subtable name to start with.
     * @returns {String[]}
     */
    getSequence (start = '') {
        if (start !== '') {
            return [start];
        }
        if (this.sequence.length === 0) {
            if (this.tables.default) {
                return ['default'];
            }
            return [this.subtableNames[0]];
        }
        if (this.sequence[0] === 'rollall') {
            return this.subtableNames;
        }
        return this.sequence;
    }
    /**
     * All the subtable names.
     * @returns {String[]}
     */
    get subtableNames () {
        return Object.keys(this.tables);
    }
    /**
     * Get entries for a specific subtable.
     * @param {String} [name=default] Subtable name.
     * @returns {RandomTableEntry[]}
     */
    getSubtableEntries (name = 'default') {
        return this.tables[name] || [];
    }
    /**
     * Get a random entry from a subtable.
     * @param {String} subtableName
     * @returns {RandomTableEntry|null}
     */
    getRandomEntry (subtableName) {
        const entries = this.getSubtableEntries(subtableName);
        if (entries.length === 0) {
            return null;
        }
        const values = [];
        const weights = [];
        entries.forEach((entry, k, l) => {
            weights.push(entry.weight);
            values.push(entry);
        });
        return getWeightedRandom(values, weights);
    }
    /**
     * Get an entry in case we only have the label and need other data from it
     * @param {String} label The item we are looking for
     * @param {String} [table=default] the table to search
     * @returns {RandomTableEntry|null}
     */
    findEntry (label, table = 'default') {
        const t = this.tables[table];
        if (!t) {
            return null;
        }
        const entry = t.find((e) => {
            return e.label === label;
        });
        if (!entry) {
            return null;
        }
        return entry;
    }
    /**
     * Find the dependent tables to get full results for this table
     * @return {Array} table keys
     */
    findDependencies () {
        // check field first, if it's not null we'll trust it...?
        if (this.dependencies !== null) {
            return this.dependencies;
        }
        // iterate over the tables and look for table tokens
        let dep = [];

        // Check macro
        this.macro.forEach((macro) => {
            const parts = macro.split(':');
            if (parts.length > 0 && parts[0] !== 'this') {
                dep.push(parts[0]);
            }
        });
        const tokenRegExp = /({{2}.+?}{2})/g;
        const tnames = Object.keys(this.tables);
        tnames.forEach((n) => {
            // n is sub/table name
            const table = this.tables[n];
            table.forEach((result) => {
                const tokens = result.label.match(tokenRegExp);
                if (tokens !== null) {
                    tokens.forEach((token) => {
                        const parts = token.replace('{{', '').replace('}}', '').split(':');
                        if (parts.length > 1 && parts[0] === 'table' && parts[1] !== 'this') {
                            dep.push(parts[1]);
                        }
                    });
                }
            });
        });
        dep = dep.reduce((a, b) => {
            if (a.indexOf(b) < 0) { a.push(b); }
            return a;
        }, []);
        this.dependencies = dep;
        return dep;
    }
    /**
     * Custom JSON handler because Map doesn't JSON stringify automatically.
     * @returns {Object}
     */
    toJSON () {
        const obj = defaultToJSON.call(this);
        obj.className = 'RandomTable';
        return obj;
    }
}


/**
 * Class for entries in a random (sub)table.
 * This normalizes the various options into a class that makes the other code simpler.
 */
class RandomTableEntry {
    /**
     *
     * @property {String} label Basic string label. Only required field. Can include tokens.
     * @property {Boolean} [print=true] Should the result be included in the output.
     * @property {String} [description] Extra description for the label.
     * @property {String[]} [subtable] Other tables to roll on.
     * @property {Number} [weight=1] Number to weight entry relative to other entries.
     */
    constructor ({
        label = '',
        print = true,
        description = '',
        subtable = [],
        weight = 1
    }) {
        this.label = label;
        this.print = !(print === false || print === '0' || print === 0);
        this.description = description;
        this.weight = parseInt(weight, 10);
        if (this.weight <= 0) {
            this.weight = 1;
        }
        // Make sure it's an array of string.
        if (isString(subtable)) {
            this.subtable = [subtable];
        } else if (Array.isArray(subtable)) {
            this.subtable = subtable.map((el) => { return el.toString(); });
        }
    }
    /**
     * Custom JSON handler because Map doesn't JSON stringify automatically.
     * @returns {Object}
     */
    toJSON () {
        const obj = defaultToJSON.call(this);
        obj.className = 'RandomTableEntry';
        return obj;
    }
}


/**
 * Class for results from RandomTable
 */
class RandomTableResult {
    /**
     * @property {String} key Key for RandomTable.
     * @property {String} table Title of subtable.
     * @property {String} result Randomized result label.
     * @property {String} desc Extra result description.
     */
    constructor ({
        key = '',
        table = '',
        result = '',
        desc = ''
    }) {
        this.key = key;
        this.table = table;
        this.result = result;
        this.desc = desc;
    }
    /**
     * Is this from the "default" table.
     */
    get isDefault () {
        return this.table === 'default';
    }
    /**
     * Is this an error result.
     */
    get isError () {
        return false;
    }
    toString () {
        return this.result;
    }
    /**
     * Custom JSON handler to strip empty props.
     * @returns {Object}
     */
    toJSON () {
        const obj = defaultToJSON.call(this);
        obj.className = 'RandomTableResult';
        return obj;
    }
}


/**
 * Set of table results.
 */
class RandomTableResultSet {
    /**
     * @property {String} key RandomTable key
     * @property {String} title Title from the RandomTable parent
     * @property {RandomTableResult[]} results Randomized results.
     * @property {Map[DisplayOptions]|Object} displayOptions Display settings from the RandomTable parent.
     */
    constructor ({
        key = '',
        title = '',
        results = [],
        displayOptions = new Map()
    }) {
        this.key = key;
        this.title = title;
        this.results = [];
        results.forEach((r) => {
            this.addResult(r);
        });
        if (displayOptions instanceof Map) {
            this.displayOptions = displayOptions;
        } else {
            this.displayOptions = new Map();
            Object.keys(displayOptions).forEach((key) => {
                const data = displayOptions[key];
                const tableName = data.table || '';
                if (tableName) {
                    if (data instanceof DisplayOptions) {
                        this.displayOptions.set(tableName, data);
                        return;
                    }
                    this.displayOptions.set(tableName, new DisplayOptions(data));
                }
            });
        }
    }
    /**
     * Add a result to the set.
     * @param {RandomTableResult|TableErrorResult|object} data
     * @returns
     */
    addResult (data) {
        if (data instanceof RandomTableResult || data instanceof TableErrorResult) {
            this.results.push(data);
            return;
        }
        if (data.className === 'TableErrorResult') {
            this.results.push(new TableErrorResult(data));
            return;
        }
        this.results.push(new RandomTableResult(data));
    }

    get isSimple () {
        return this.results.length === 1;
    }

    /**
     * Find the result for a specific table/subtable
     * @param {String} table The table to look for
     * @returns {RandomTableResult|null}
     */
    findResultByTable (table = 'default') {
        const obj = this.results.find((v) => {
            return v.table === table;
        });
        return !obj ? null : obj;
    }
    /**
     * Output the set as a string.
     * @param {Boolean} simple Simplify the output (just the result labels)
     * @returns
     */
    niceString (simple = false) {
        if (this.results.length === 0) {
            return '';
        }

        if (simple) {
            return this.results.map((r) => { return r.toString(); }).join(' ');
        }

        let output = '';
        this.results.forEach((result) => {
            if (result.isError) {
                output += `Error: ${result.result}\n`;
                return;
            }
            const displayOpt = this.displayOptions.get(result.table);
            if (displayOpt) {
                if (!displayOpt.hide_table) {
                    output += `${capitalize(result.table)}: `;
                }
                if (!displayOpt.hide_result) {
                    output += `${capitalize(result.result)}\n`;
                }
                if (!displayOpt.hide_desc) {
                    if (result.desc !== '') {
                        output += `(${result.desc})\n`;
                    }
                }
                return;
            }
            if (result.isDefault) {
                output += `${capitalize(result.result)}\n`;
            } else {
                output += `${capitalize(result.table)}: ${capitalize(result.result)}\n`;
            }
            if (result.desc !== '') {
                output += `${result.desc}\n`;
            }
        });
        return output.trim(); // trim off final linebreak
    }
    /**
     * Simple base output of result set.
     */
    toString () {
        return this.niceString();
    }
    /**
     * Custom JSON handler because Map doesn't JSON stringify automatically.
     * @returns {Object}
     */
    toJSON () {
        const obj = defaultToJSON.call(this);
        obj.className = 'RandomTableResultSet';
        return obj;
    }
}

/**
 * Take some data and normalize it into a config object for RandomTable
 */

/**
 * Try to parse HTML into table object data
 * @return {Array} table options
 */
const parseHtml = function (html) {
    // strip linebreaks cause we'll be making new ones based on the tags
    html = html.replace(/[\n\r]+/g, '');
    // add line breaks for specific end tags li tr p br
    // @todo really <tr> leaves you with some weird data.
    html = html.replace(/<\/(p|tr|li|div)>|<\/?br\/?>/g, '\n').replace(/\t/g, '');

    html = html.replace(/<\/?[^>]+>/g, '').replace(/[\n\r]+$/g, '');
    // console.log(html);
    const text = html.split(/[\n\r]+/g);
    // console.log(text);

    let ct = 0;

    text.forEach((v, k, l) => {
        v = v.trim(); // trim spaces from ends
        // parse out the pre-post ## data (if it's there)
        const parse = v.match(/^(?:(?:[0-9]+\-)?([0-9]+)(##)?(?:\.\s*|:\s*|,\s*|\t+|\s*))?(.+?)(?:##(.+))?$/);

        if (parse) {
            l[k] = { label: parse[3].trim() };

            if (!isUndefined(parse[1])) {
                let weight = 1;
                if (isUndefined(parse[2])) {
                    weight = parseFloat(parse[1]) - ct;
                    if (weight < 1) { weight = 1; }
                    ct = ct + weight;
                } else {
                    weight = parseFloat(parse[1]);
                }
                if (weight > 1) {
                    l[k].weight = weight;
                }
            } else {
                ct++;
            }

            if (!isUndefined(parse[4])) {
                l[k].subtable = parse[4].trim();
            }
        } else {
            delete l[k];
        }
    });
    return text;
};
/**
 * Try to parse text into table data
 * @returns {Array} parsed table data
 */
const parseText = function (text) {
    // split it into an array of lines
    text = text.split(/[\n\r]+/g);

    let ct = 0; // the cumulative 'die' count we'll use to calculate the weight
    text.forEach((v, k, l) => {
        v = v.trim();

        // parse numbers off front and subtables off back
        const parse = v.match(/^(?:(?:[0-9]+\-)?([0-9]+)(##)?(?:\.\s*|:\s*|,\s*|\t+|\s*))?(.+?)(?:##(.+))?$/);
        // console.log(parse);
        if (parse) {
            // console.log(parse);
            let label = parse[3].trim();
            label = label.replace(/^[-*]\s?/, '');
            l[k] = { label };

            if (!isUndefined(parse[1])) {
                let weight = 1;
                if (isUndefined(parse[2])) {
                    weight = parseFloat(parse[1]) - ct;
                    // console.log(weight);
                    if (weight < 1) { weight = 1; }
                    ct = ct + weight;
                } else {
                    weight = parseFloat(parse[1]);
                }
                if (weight > 1) {
                    l[k].weight = weight;
                }
            } else {
                ct++;
            }

            if (!isUndefined(parse[4])) {
                l[k].subtable = parse[4].trim();
            }
        } else {
            delete l[k];
        }
    });
    return text;
};

/**
 * Parse markdown...?
 * @todo
 */
// const parseMarkdown = function () {
// deal with headers
// deal with lists and sublists.
// };

/**
 * Decide what type of data it is so we can treat it appropriately.
 * @return {String} data_type
 */
const checkType = function (data) {
    if (isEmpty(data)) {
        return '';
    }
    if (isString(data)) {
        try {
            JSON.parse(data);
            return 'json';
        } catch (e) {
            // not json
        }
        // html should start with a tag.
        if (data.substring(0, 1) === '<') {
            this.data_type = 'html';
            return 'html';
        }
        return 'text';
    }
    if (isObject(data)) {
        return 'object';
    }
    return '';
};

/**
 * Process the data and try to do something
 */
const normalizeData = function (data = null) {
    if (isEmpty(data)) {
        return null;
    }
    const type = checkType(data);
    if (type === '') {
        return null;
    }
    let normalized_data = null;
    switch (type) {
        case 'html':
            normalized_data = parseHtml(data);
            break;
        case 'text':
            normalized_data = parseText(data);
            break;
        case 'json':
            normalized_data = JSON.parse(data);
            break;
    }

    // ?
    return normalized_data;
};

/**
 * Custom error for handling known errors in the table roller.
 * @prop {String} key RandomTable key
 */
class TableError extends Error {
    constructor (message, key = '') {
        super(message);
        this.key = key;
        this.name = 'TableError';
    }
}


/**
 * Class for results from RandomTable
 */
class TableErrorResult extends RandomTableResult {
    /**
     * Is this an error result.
     */
    get isError () {
        return true;
    }
    /**
     * Custom JSON handler to strip empty props.
     * @returns {Object}
     */
    toJSON () {
        const obj = super.toJSON();
        obj.className = 'TableErrorResult';
        return obj;
    }
}

/**
 * Define the regex to find tokens
 * This looks for anything between double brackets.
 * Note: this is duplicated in RandomTable.findDependencies() so if updated, update it there too
 */
const tokenRegExp = /({{2}.+?}{2})/g;

/**
 * TableRoller
 * Handles rolling on tables and tokens in tables/results.
 * @constructor
 */
class TableRoller {
    constructor (
        token_types = {}
    ) {
        this.token_types = {
            roll: this._defaultRollToken.bind(this),
            table: this._defaultTableToken.bind(this),
            oneof: this._defaultOneOfToken.bind(this)
        };
        Object.keys(token_types).forEach((token) => {
            this.token_types[token] = token_types[token];
        });
    }
    /**
     * Return an error result
     * @param {String} error Error message
     * @param {String} key RandomTable key where error occured.
     * @param {String} table Sub/table name if relevant.
     * @returns {TableErrorResult}
     */
    _getErrorResult (error = '', key = '', table = '') {
        return new TableErrorResult({
            key,
            table,
            result: error
        });
    }
    /**
     * Return a result set with an error.
     * @param {String} error Error message
     * @param {String} key RandomTable key where error occured.
     * @returns {RandomTableResultSet}
     */
    _getErrorResultSet (error = '', key = '') {
        return new RandomTableResultSet({
            key,
            results: [
                this._getErrorResult(error, key)
            ]
        });
    }
    /**
     * Get a result from a table/subtable in a RandomTable object
     * DANGER: you could theoretically put yourself in an endless loop if the data were poorly planned
     * Calling method try to catch RangeError to handle that possibility.
     * @param {RandomTable} rtable the RandomTable object
     * @param {String} table table to roll on
     * @returns {RandomTableResult[]}
     */
    _selectFromTable (rtable, table) {
        if (!(rtable instanceof RandomTable)) {
            return [this._getErrorResult('Invalid table.')];
        }

        let o = []; // Results
        const entry = rtable.getRandomEntry(table);
        if (entry === null || !(entry instanceof RandomTableEntry)) {
            return [this._getErrorResult('Invalid subtable name.', rtable.key, table)];
        }
        // if print is false we suppress the output from this table
        // (good for top-level tables that have subtables prop set)
        if (entry.print) {
            // replace any tokens
            const t_result = this.findToken(entry.label, rtable);
            o.push(new RandomTableResult({ key: rtable.key, table, result: t_result, desc: entry.description }));
        }

        // are there subtables to roll on?
        if (entry.subtable.length === 0) {
            // no subtables
            return o;
        }

        // Select from each subtable and add to results.
        entry.subtable.forEach((subtableName) => {
            const subresult = this._selectFromTable(rtable, subtableName);
            // concat because subresult is an array.
            o = o.concat(subresult);
        });
        return o;
    }
    /**
     * Get results array for macro setting of a table.
     * @param {RandomTable} rtable Table with macro set.
     * @returns {RandomTableResult[]}
     */
    _getTableMacroResult (rtable) {
        let results = [];
        try {
            rtable.macro.forEach((macroKey) => {
                const parts = macroKey.split(':');
                const tableKey = parts[0];
                const subtable = parts[1] || '';
                if (tableKey === rtable.key) {
                    throw new TableError(`Macros can't self reference.`, rtable.key);
                }
                try {
                    const mtable = this.getTableByKey(tableKey);
                    const result = this.getTableResult(mtable, subtable);
                    // concat because result is an array.
                    results = results.concat(result);
                } catch (e) {
                    if (e instanceof TableError) {
                        results.push(this._getErrorResult(e.message, rtable.key, tableKey));
                    } else {
                        // Rethrow unexpected errors
                        throw e;
                    }
                }
            });
        } catch (e) {
            if (e instanceof RangeError) {
                // This could be an infinite loop of table results referencing each other.
                results.push(this._getErrorResult(e.message, rtable.key));
            } else {
                throw e;
            }
        }
        return results;
    }
    /**
     * Generate a result from a RandomTable object
     * @param {RandomTable} rtable the RandomTable
     * @param {String} [start=''] subtable to roll on
     * @return {RandomTableResult[]}
     */
    getTableResult (rtable, start = '') {
        if (!(rtable instanceof RandomTable)) {
            return [
                this._getErrorResult('No table found to roll on.')
            ];
        }
        let results = [];

        // if macro is set then we ignore a lot of stuff
        if (rtable.macro.length > 0) {
            return this._getTableMacroResult(rtable);
        }

        const sequence = rtable.getSequence(start);
        if (sequence.length === 0) {
            return results;
        }
        try {
            sequence.forEach((seqKey) => {
                const r = this._selectFromTable(rtable, seqKey);
                results = results.concat(r);
            });
        } catch (e) {
            // In case of infinite recursion
            if (e instanceof RangeError) {
                results.push(this._getErrorResult(e.message, rtable.key));
            } else {
                throw e;
            }
        }
        return results;
    }
    /**
     * Get result set from a table based on the key.
     * @param {String} tableKey
     * @param {String} table
     * @returns {RandomTableResultSet}
     */
    getTableResultSetByKey (tableKey, table = '') {
        try {
            const rtable = this.getTableByKey(tableKey);
            const results = this.getTableResult(rtable, table);
            return new RandomTableResultSet({
                key: rtable.key,
                title: rtable.title,
                results,
                displayOptions: rtable.display_opt
            });
        } catch (e) {
            if (e instanceof TableError) {
                return this._getErrorResultSet(e.message, e.key);
            } else {
                // Rethrow unexpected errors
                throw e;
            }
        }
    }
    /**
     * Get result set from a table based on the key.
     * @param {RandomTable} rtable Main table object.
     * @param {String} [table] Subtable
     * @returns {RandomTableResultSet}
     */
    getResultSetForTable (rtable, table = '') {
        if (!(rtable instanceof RandomTable)) {
            return this._getErrorResultSet(`Invalid table data.`);
        }
        const results = this.getTableResult(rtable, table);
        return new RandomTableResultSet({
            key: rtable.key,
            title: rtable.title,
            results,
            displayOptions: rtable.display_opt
        });
    }
    /**
     * Perform token replacement.  Only table and roll actions are accepted
     * @param {String} token A value passed from findToken containing a token(s) {{SOME OPERATION}} Tokens are {{table:SOMETABLE}} {{table:SOMETABLE:SUBTABLE}} {{table:SOMETABLE*3}} (roll that table 3 times) {{roll:1d6+2}} (etc) (i.e. {{table:colonial_occupations:laborer}} {{table:color}} also generate names with {{name:flemish}} (surname only) {{name:flemish:male}} {{name:dutch:female}}
     * @param {RandomTable|null} curtable RandomTable the string is from (needed for "this" tokens) or null
     * @returns {RandomTableResultSet|RandomTableResultSet[]|DiceResult|String|Any} The result of the token or else just the token (in case it was a mistake or at least to make the error clearer)
     */
    convertToken (token, curtable = null) {
        let parts = token.replace('{{', '').replace('}}', '').split(':');
        parts = parts.map((el) => {
            return el.trim();
        });
        if (parts.length === 0) {
            return token;
        }

        // look for a token type we can run
        try {
            if (this.token_types[parts[0]]) {
                return this.token_types[parts[0]](parts, token, curtable);
            } else {
                return token;
            }
        } catch (e) {
            if (e instanceof RangeError) {
                // This could be an infinite loop of table results referencing each other.
                return this._getErrorResultSet(e.message);
            } else {
                throw e;
            }
        }
    }
    /**
     * Look for tokens to perform replace action on them.
     * @param {String} entryLabel Usually a label from a RandomTableEntry
     * @param {RandomTable|null} curtable RandomTable the string is from (needed for "this" tokens) or null
     * @returns {String} String with tokens replaced (if applicable)
     */
    findToken (entryLabel, curtable = null) {
        if (isEmpty(entryLabel)) {
            return '';
        }
        const newstring = entryLabel.replace(tokenRegExp, (token) => {
            return this.convertToken(token, curtable).toString();
        });
        return newstring;
    }
    /**
     * Since tables are stored outside of this module, this function allows for the setting of a function which will be used to lookup a table by it's key
     * @param {Function} lookup a function that takes a table key and returns a RandomTable or null
     */
    setTableKeyLookup (lookup) {
        this._customGetTableByKey = lookup;
    }
    /**
     * Placeholder that should be replaced by a function outside this module
     * @param {String} key human readable table identifier
     * @return {null} nothing, when replaced this function should return a table object
     */
    _customGetTableByKey (key) {
        return null;
    }
    /**
     * Return a table based on it's key.
     * This requires calling setTableKeyLookup and setting a lookup method
     * That returns a RandomTable object or null.
     * @param {String} key human readable table identifier
     * @returns {RandomTable}
     * @throws {TableError}
     */
    getTableByKey (key) {
        if (!key) {
            throw new TableError('No table key.');
        }
        const table = this._customGetTableByKey(key);
        if (!table || !(table instanceof RandomTable)) {
            throw new TableError(`No table found for key: ${key}`, key);
        }
        return table;
    }
    /**
     * Add a token variable
     * @param {String} name Name of the token (used as first element).
     * @param {Function} process Function to return token replacement value function is passed the token_parts (token split by ":"),  original full_token, current table name
     */
    registerTokenType (name, process) {
        this.token_types[name] = process;
    }
    /**
     * Dice roll token.
     * @returns {DiceResult}
     */
    _defaultRollToken (token_parts, full_token = '', curtable = null) {
        return getDiceResult(token_parts[1]);
    }
    /**
     * Table token lookup in the form:
     * {{table:SOMETABLE}} {{table:SOMETABLE:SUBTABLE}} {{table:SOMETABLE*3}} (roll that table 3 times) {{table:SOMETABLE:SUBTABLE*2}} (roll subtable 2 times)
     * @param {String[]} token_parts Token split by :
     * @param {String} full_token Original token
     * @param {RandomTable|null} curtable Current table or null.
     * @returns {RandomTableResultSet|RandomTableResultSet[]} One or more result sets.
     */
    _defaultTableToken (token_parts, full_token, curtable = null) {
        if (isUndefined(token_parts[1])) {
            return full_token;
        }
        let multiplier = 1;
        if (token_parts[1].indexOf('*') !== -1) {
            const x = token_parts[1].split('*');
            token_parts[1] = x[0];
            multiplier = x[1];
        }

        // what table do we roll on
        let rtable = null;
        if (token_parts[1] === 'this') {
            if (!curtable) {
                return full_token;
            }
            // reroll on same table
            rtable = curtable;
        } else {
            // Table lookup
            try {
                rtable = this.getTableByKey(token_parts[1]);
            } catch (e) {
                if (e instanceof TableError) {
                    return full_token;
                } else {
                    // Rethrow unexpected errors
                    throw e;
                }
            }
        }

        if (typeof token_parts[2] !== 'undefined' && token_parts[2].indexOf('*') !== -1) {
            const x = token_parts[2].split('*');
            token_parts[2] = x[0];
            multiplier = x[1];
        }
        const subtable = (isUndefined(token_parts[2])) ? '' : token_parts[2];

        const results = [];
        for (let i = 1; i <= multiplier; i++) {
            results.push(this.getResultSetForTable(rtable, subtable));
        }
        return results.length === 1 ? results[0] : results;
    }
    /**
     * Simple pick one of the options token:
     * {{oneof:dwarf|halfling|human pig|dog person}}
     * @param {String[]} token_parts Token split by :
     * @param {String} full_token Original token
     * @param {RandomTable|null} curtable Current table or null.
     * @returns {String} One of the options or empty.
     */
    _defaultOneOfToken (token_parts, full_token, curtable = null) {
        if (isUndefined(token_parts[1])) {
            return full_token;
        }
        const options = token_parts[1].split('|');
        if (options.length === 1) {
            return options.shift();
        }
        return randomString(options) || '';
    }
}