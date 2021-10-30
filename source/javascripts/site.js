function goToRandomUrl(urls) {
  urls = urls.filter(function (u) {
    return !window.location.href.endsWith(u);
  });
  url = urls[Math.floor(Math.random() * urls.length)];
  window.location.href = url;
}

function goBackToMainPage() {
  var url = window.location.href.split("/")[3];
  if (url === "blog") {
    url = "/index.html";
  } else {
    url = "/" + url + "/";
  }
  window.location.href = url;
}

function scrollToTopAndBlur() {
  window.scrollTo(0, 0);
  document.activeElement.blur();
}
