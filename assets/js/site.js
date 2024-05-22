function pickIndex(ls) {
  return Math.floor(Math.random() * ls.length);
}

function pickOne(ls) {
  return ls[pickIndex(ls)];
}

function goToRandomUrl(urls) {
  var urls = urls.filter(function (u) {
    return !window.location.href.endsWith(u);
  });
  window.location.href = pickOne(urls);
}

function scrollToTopAndBlur() {
  window.scrollTo(0, 0);
  document.activeElement.blur();
}

function testRolls() {
// just the number  
  console.log(new DiceRoller().rollDie('2d6+3'));
  // get a DiceResult object with the value and the die rolled
  const result = getDiceResult('1d6');
  console.log(result.value); // some number between 1 and 6
  console.log(result.die); // '1d6'
}