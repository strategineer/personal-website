function goToRandomUrl(urls) {
  urls = urls.filter(function (u) {
    return !window.location.href.endsWith(u);
  });
  url = urls[Math.floor(Math.random() * urls.length)];
  window.location.href = url;
}
