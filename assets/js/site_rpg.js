
function testRolls() {
  // just the number  
    console.log(new DiceRoller().rollDie('2d6+3'));
    // get a DiceResult object with the value and the die rolled
    const result = getDiceResult('1d6');
    console.log(result.value); // some number between 1 and 6
    console.log(result.die); // '1d6'
}

function randomizeTable(title, header, rows, count) {
  const table_config = {
    key: title,
    title: title,
    tables: {
      default: rows,
    }
  };
  const isDefaultCount = count === 1;
  count = getDiceResult(count).value;
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