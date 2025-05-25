let name_set = {};
let chain_cache = {};

let gen_data = {};
let gen_debug = false;
let strip_page_numbers = true;

// rpg_table_randomizer
/* eslint-disable no-useless-escape */

// License information here: https://github.com/derikb/rpg-table-randomizer

/**
 * @prop {String} die Die notation.
 * @prop {Number} value Random roll for the die notation.
 */
class DiceResult {
  constructor({ die = "", value = 0 }) {
    this.die = die;
    this.value = value;
  }
  toString() {
    return this.value;
  }
  toJSON() {
    return {
      className: "DiceResult",
      die: this.die,
      value: this.value,
    };
  }
}

class DiceRoller {
  /**
   *
   * @param {Number} die Die type
   * @returns {Number}
   */
  getSingleDieResult(die) {
    return randomInteger(1, die);
  }
  /**
   * Apply a modifier to the number of dice retained.
   * @param {Number[]} rolls
   * @param {String} diemod Modifier to dice (drop/keep high/low count).
   * @returns
   */
  applyDieMod(rolls, diemod) {
    const m = diemod.match(/^([dklh]{2})([0-9]*)$/);
    if (m === null) {
      return rolls;
    }
    const count = !m[2] ? 1 : parseInt(m[2]);
    switch (m[1]) {
      case "dl":
        // Sort ascending
        rolls.sort((a, b) => a - b);
        rolls.splice(0, count);
        return rolls;
      case "dh":
        // Sort descending
        rolls.sort((a, b) => b - a);
        rolls.splice(0, count);
        return rolls;
      case "kl":
        // Sort ascending
        rolls.sort((a, b) => a - b);
        return rolls.slice(0, count);
      case "kh":
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
  _parseDiceNotation(
    die = 6,
    number = 1,
    modifier = 0,
    mod_op = "+",
    diemod = "",
  ) {
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

    if (diemod !== "") {
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
      case "*":
        sum = sum * modifier;
        break;
      case "-":
        sum = sum - modifier;
        break;
      case "/":
        sum = sum / modifier;
        break;
      case "+":
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
  rollDie(str = "") {
    str = str.trim();
    const m = str.match(
      /^([0-9]*)d([0-9]+)([dklh]{2}[0-9]*)*(?:([\+\-\*\/])([0-9]+))*$/,
    );
    if (!m) {
      return "";
    }
    return this._parseDiceNotation(m[2], m[1], m[5], m[4], m[3]);
  }
  /**
   * Return a dice result.
   * @param {String} die Die roll notation.
   * @returns {DiceResult}
   */
  getDiceResult(die = "") {
    return new DiceResult({
      die,
      value: this.rollDie(die),
    });
  }
}

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
 * takes a string like '3d6+2', 'd6', '2d6', parses it, and puts it through roll
 * @params {String} string a die roll notation
 * @returns {Number} the result of the roll
 */
const rollDie = function (string = "") {
  const roller = new DiceRoller();
  return roller.rollDie(string);
};

/**
 * Return a dice result.
 * @param {String} die Die roll notation.
 * @returns {DiceResult}
 */
const getDiceResult = function (die = "") {
  const roller = new DiceRoller();
  return new DiceResult({
    die,
    value: roller.rollDie(die),
  });
};

// name_generator.js

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// name_generator.js
// written and released to the public domain by drow <drow@bin.sh>
// http://creativecommons.org/publicdomain/zero/1.0/

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// generator function

function generate_name(type) {
  let chain;
  if ((chain = markov_chain(type))) {
    if (gen_debug) {
      return "[" + type + ":" + markov_name(chain) + "]";
    } else {
      return markov_name(chain);
    }
  }
  return "";
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// generate multiple

function name_list(type, n_of) {
  let list = [];

  let i;
  for (i = 0; i < n_of; i++) {
    list.push(generate_name(type));
  }
  return list.join("<hr>");
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// get markov chain by type

function markov_chain(type) {
  let chain;
  if ((chain = chain_cache[type])) {
    return chain;
  } else {
    let list;
    if ((list = name_set[type]) && list.length) {
      let chain;
      if ((chain = construct_chain(list))) {
        chain_cache[type] = chain;
        return chain;
      }
    }
  }
  return false;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// construct markov chain from list of names

function construct_chain(list) {
  let chain = {};

  let i;
  for (i = 0; i < list.length; i++) {
    let names = list[i].split(/\s+/);
    chain = incr_chain(chain, "parts", names.length);

    let j;
    for (j = 0; j < names.length; j++) {
      let name = names[j];
      chain = incr_chain(chain, "name_len", name.length);

      let c = name.substr(0, 1);
      chain = incr_chain(chain, "initial", c);

      let string = name.substr(1);
      let last_c = c;

      while (string.length > 0) {
        let c = string.substr(0, 1);
        chain = incr_chain(chain, last_c, c);

        string = string.substr(1);
        last_c = c;
      }
    }
  }
  return scale_chain(chain);
}
function incr_chain(chain, key, token) {
  if (chain[key]) {
    if (chain[key][token]) {
      chain[key][token]++;
    } else {
      chain[key][token] = 1;
    }
  } else {
    chain[key] = {};
    chain[key][token] = 1;
  }
  return chain;
}
function scale_chain(chain) {
  let table_len = {};

  Object.keys(chain).forEach((key) => {
    table_len[key] = 0;

    Object.keys(chain[key]).forEach((token) => {
      let count = chain[key][token];
      let weighted = Math.floor(Math.pow(count, 1.3));

      chain[key][token] = weighted;
      table_len[key] += weighted;
    });
  });
  chain["table_len"] = table_len;
  return chain;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// construct name from markov chain

function markov_name(chain) {
  let parts = select_link(chain, "parts");
  let names = [];

  let i;
  for (i = 0; i < parts; i++) {
    let name_len = select_link(chain, "name_len");
    let c = select_link(chain, "initial");
    let name = c;
    let last_c = c;

    while (name.length < name_len) {
      c = select_link(chain, last_c);
      if (!c) break;

      name += c;
      last_c = c;
    }
    names.push(name);
  }
  return names.join(" ");
}
function select_link(chain, key) {
  let len = chain["table_len"][key];
  if (!len) return false;
  let idx = Math.floor(Math.random() * len);
  let tokens = Object.keys(chain[key]);
  let acc = 0;

  let i;
  for (i = 0; i < tokens.length; i++) {
    let token = tokens[i];

    acc += chain[key][token];
    if (acc > idx) return token;
  }
  return false;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// generator.js
// written and released to the public domain by drow <drow@bin.sh>
// http://creativecommons.org/publicdomain/zero/1.0/

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// generator function

function generate_text(type) {
  let details = [];
  let repl = generate_text_helper(type, details);
  if (details.length > 0) {
    return repl + "<br>[" + details.join("<br") + "]";
  } else {
    return repl;
  }
}

function generate_text_helper(type, details, context = {}) {
  let list;
  if ((list = gen_data[type])) {
    let string;
    if ((string = select_from(list))) {
      let repl = expand_tokens(string, details, context).trim();
      if (gen_debug) {
        return "[" + type + ":" + repl + "]";
      } else {
        return repl;
      }
    }
  }
  return "";
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// generate multiple

function generate_list(type, n_of) {
  let list = [];

  let i;
  for (i = 0; i < n_of; i++) {
    list.push(generate_text(type));
  }
  return list.join("<hr>");
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// select from list

function select_from(list) {
  if (list.constructor == Array) {
    return select_from_array(list);
  } else {
    return select_from_table(list);
  }
}
function select_from_array(list) {
  return list[Math.floor(Math.random() * list.length)];
}
function select_from_table(list) {
  let len;
  if ((len = scale_table(list))) {
    let idx = Math.floor(Math.random() * len) + 1;

    let key;
    for (key in list) {
      let r = key_range(key);
      if (idx >= r[0] && idx <= r[1]) {
        return list[key];
      }
    }
  }
  return "";
}
function scale_table(list) {
  let len = 0;

  let key;
  for (key in list) {
    let r = key_range(key);
    if (r[1] > len) {
      len = r[1];
    }
  }
  return len;
}
function key_range(key) {
  let match;
  if ((match = /(\d+)-00/.exec(key))) {
    return [parseInt(match[1]), 100];
  } else if ((match = /(\d+)-(\d+)/.exec(key))) {
    return [parseInt(match[1]), parseInt(match[2])];
  } else if (key == "00") {
    return [100, 100];
  } else {
    return [parseInt(key), parseInt(key)];
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// expand {token} in string

function expand_tokens(string, details, context) {
  let match;
  let detail = null;
  while ((match = /{(\d+d\d+)}/.exec(string))) {
    let expr = match[1];
    string = string.replace("{" + expr + "}", roll(expr));
  }
  while (
    (match = /{(\w+)}/.exec(string)) ||
    (match = /{(\w+:\w+)}/.exec(string))
  ) {
    let full_match = match[0];
    let token = match[1];

    const detail_separator = ":";
    if (token.includes(detail_separator)) {
      let splitted = token.split(detail_separator);
      token = splitted[0];
      let left =
        generate_text_helper(token, details, context) || generate_name(token);
      context[token] = left;
      let right = generate_text_helper(splitted[1], details, context);
      details.push(`${left}:${right}`);
    }
    let repl;
    if (
      (repl = context[token]) ||
      (repl = generate_text_helper(token, details, context)) ||
      (repl = generate_name(token))
    ) {
      string = string.replace(full_match, repl);
    } else {
      string = string.replace(full_match, token);
    }
  }
  if (strip_page_numbers) {
    return string.replace(/\(p. \d+ ?\)/i, "");
  }
  return string;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function roll(expr, button) {
  const result = getDiceResult(expr);
  if (button) {
    button.innerHTML = `${expr}: ${result.value}`;
  }
  return result.value;
}

function rollOnManyTables(all_titles, all_headers, all_rows) {
  tables = zip(all_headers, all_rows);
  var i = 0;
  var s = [];
  while (i < tables.length) {
    const t = tables[i];
    var prefix = "";
    var suffix = "";
    //if(i > 0) {
    //  prefix = `<span class="spoiler">`;
    //  suffix = `</span>`;
    //}
    s.push(
      `${all_titles[i]}: ${prefix}${rollOnTable(all_titles[i], t[0], t[1], 1)}${suffix}`,
    );
    i += 1;
  }
  return s.join(" / ");
}

function rollOnTable(title, header, rows, count) {
  const table_config = {
    key: title,
    title: title,
    tables: {
      default: rows,
    },
  };
  const isDefaultCount = count === 1;
  if (typeof count == "string") {
    count = getDiceResult(count).value;
  }
  const tableRoller = new TableRoller();
  const table = new RandomTable(table_config);
  var s = [];
  var i = 0;
  while (i < count) {
    const result = tableRoller.getTableResult(table);
    const headerColumns = header
      .split("|")
      .map((c) => c.trim())
      .filter((c) => c);
    const resultColumns = result[0].result
      .split("|")
      .map((c) => c.trim())
      .filter((c) => c);
    var resultRows = headerColumns.map(function (e, i) {
      if (headerColumns.length == 1) {
        return resultColumns[i];
      }
      return `${e}: ${resultColumns[i]}`;
    });
    s.push(resultRows.join(" / "));
    i += 1;
  }
  if (!isDefaultCount) {
    const numberedResults = s.map(function (e, i) {
      return `${i}: ${s[i]}`;
    });
    return `${count} ${title}: / ${numberedResults.join(" / ")}`;
  }
  return s.join(" / ");
}
