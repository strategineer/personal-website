var GREETINGS = [
{{- range $i, $g := $.Site.Data.greetings -}}
  {{- if eq $i (sub (len $.Site.Data.greetings) 1) -}}
    "{{ $g }}"
  {{- else -}}
    "{{ $g }}",
  {{- end -}}
{{- end -}}
];

window.addEventListener("load",function(event) {
 setRandomGreeting();
},false);

function setRandomGreeting() {
  var greeting = pickOne(GREETINGS);
  var e = document.getElementById("greeting")
  if(typeof e !== 'undefined' && e !== null) {
    e.innerText = '"' + greeting + '"';
  }
}

function pickIndex(ls) {
  return Math.floor(Math.random() * ls.length)
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