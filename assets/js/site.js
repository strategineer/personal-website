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

function zip(a, b) {
  return a.map(function(e, i) {
    return [e, b[i]];
  });
}

function getTocElementById(id) {
  element = document.querySelector(`a[href="#${id}"]`);
  if (element === null) {
    return null;
  }
  return element.parentElement;
}
maxIntersectionElementId = null;
maxIntersectionRatio = 0.0;

window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
    any_intersecting = false;
		entries.forEach(entry => {
      id = entry.target.getAttribute('id');
      element = getTocElementById(id);
      if (element === null) {
        return;
      }
			if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
        console.log(`activating #${id}...`);
        maxIntersectionElementId = id;
        maxIntersectionRatio = entry.intersectionRatio;
        any_intersecting = true;
			} else {
        console.log(`deactivating #${id}...`);
      }
		});
    if (!any_intersecting) {
      maxIntersectionElementId = null;
      maxIntersectionRatio = 0.0;
    }
    entries.forEach(entry => {
      id = entry.target.getAttribute('id');
      element = getTocElementById(id);
      if (element === null) {
        return;
      }
      if (maxIntersectionElementId === id) {
        element.classList.add('active');
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest" 

        });
      } else {
        element.classList.remove('active');
      }
    });
	},{
    root: document.querySelector("main"),
    threshold: 0,
  });

	// Track all sections that have an `id` applied
	document.querySelectorAll('section[id]').forEach((section) => {
    console.log(section.id);
		observer.observe(section);
	});
});