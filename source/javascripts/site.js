window.onload = function () {
  setRandomGreeting();
};

function setRandomGreeting() {
  greetings = [
    "Are all social media sites destined to be filled with porn? Yes.",
    "Loading ...",
    "I loved skateboarding as a kid, this one time... I ate shit. It's definitely an acquired taste.",
    "Believe 👏 in 👏 the 👏 me 👏 that 👏 believes 👏 in 👏 you 👏 #faith 👏 #love 👏 #hope 👏 #destiny",
    "noncesense: the preternatural ability to detect British sex offenders in your immediate vicinity.",
  ];
  greeting = pickOne(greetings);
  document.getElementById("greeting").innerText = '"' + greeting + '"';
}

function pickOne(ls) {
  return ls[Math.floor(Math.random() * ls.length)];
}

function goToRandomUrl(urls) {
  urls = urls.filter(function (u) {
    return !window.location.href.endsWith(u);
  });
  window.location.href = pickOne(urls);
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
