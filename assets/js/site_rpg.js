
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
    const t = tables[i]
    var prefix = "";
    var suffix = "";
    if(i > 0) {
      prefix = `<span class="spoiler">`;
      suffix = `</span>`;
    }
    s.push(`${all_titles[i]}: ${prefix}${rollOnTable(all_titles[i], t[0], t[1], 1)}${suffix}`);
    i += 1;
  }
  return s.join("<br>");
}

function rollOnTable(title, header, rows, count) {
  const table_config = {
    key: title,
    title: title,
    tables: {
      default: rows,
    }
  };
  const isDefaultCount = count === 1;
  if ( (typeof count) == "string" ) {
    count = getDiceResult(count).value;
  }
  const tableRoller = new TableRoller();
  const table = new RandomTable(table_config);
  var s = [];
  var i = 0;
  while (i < count) {
    const result = tableRoller.getTableResult(table);
    const headerColumns = header.split("|").map(c => c.trim()).filter(c => c)
    const resultColumns = result[0].result.split("|").map(c => c.trim()).filter(c => c)
    var resultRows = headerColumns.map(function(e, i) {
      if (headerColumns.length == 1) {
        return resultColumns[i];
      }
      return `${e}: ${resultColumns[i]}`;
    });
    s.push(resultRows.join("<br>"));
    i += 1;
  }
  if (!isDefaultCount) {
    const numberedResults = s.map(function(e, i) {
      return `${i}: ${s[i]}`;
    });
    return `${count} ${title}:<br>${numberedResults.join("<br>")}`;
  }
  return s.join("<br>");
}