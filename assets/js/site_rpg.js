
function testRolls() {
  // just the number  
    console.log(new DiceRoller().rollDie('2d6+3'));
    // get a DiceResult object with the value and the die rolled
    const result = getDiceResult('1d6');
    console.log(result.value); // some number between 1 and 6
    console.log(result.die); // '1d6'
}

function randomizeTable(title, header, rows) {
  const table_config = {
    key: title,
    title: title,
    tables: {
      default: rows,
    }
  };
  const tableRoller = new TableRoller();
  const table = new RandomTable(table_config);
  const result = tableRoller.getTableResult(table);
  const headerColumns = header.split("|").map(c => c.trim()).filter(c => c)
  const resultColumns = result[0].result.split("|").map(c => c.trim()).filter(c => c)
  var resultRows = headerColumns.map(function(e, i) {
    return `${e}: ${resultColumns[i]}`;
  });
  return resultRows.join("<br>");
}