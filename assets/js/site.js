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
