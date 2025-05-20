// name_generator.js
let name_set = {};
let chain_cache = {};

let gen_data = {};
let gen_debug = false;
let strip_page_numbers = true;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// name_generator.js
// written and released to the public domain by drow <drow@bin.sh>
// http://creativecommons.org/publicdomain/zero/1.0/

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// generator function

function generate_name(type) {
  let chain;
  if ((chain = markov_chain(type))) {
    return markov_name(chain);
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
  let list;
  if ((list = gen_data[type])) {
    let string;
    if ((string = select_from(list))) {
      if (gen_debug) {
        return "[" + type + ":" + expand_tokens(string).trim() + "]";
      } else {
        return expand_tokens(string).trim();
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

function expand_tokens(string) {
  let match;
  while ((match = /{(\d+d\d+)}/.exec(string))) {
    let expr = match[1];
    string = string.replace("{" + expr + "}", roll(expr));
  }
  while ((match = /{(\w+)}/.exec(string))) {
    let token = match[1];

    let repl;
    if ((repl = generate_text(token))) {
      string = string.replace("{" + token + "}", repl);
    } else if ((repl = generate_name(token))) {
      string = string.replace("{" + token + "}", repl);
    } else {
      string = string.replace("{" + token + "}", token);
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
