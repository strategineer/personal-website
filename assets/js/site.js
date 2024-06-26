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

window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
    maxIntersectionElementId = null;
    intersectionRatio = 0.0;
		entries.forEach(entry => {
      id = entry.target.getAttribute('id');
      element = getTocElementById(id);
      if (element === null) {
        return;
      }
			if (entry.intersectionRatio > intersectionRatio) {
        intersectionRatio = entry.intersectionRatio;
        maxIntersectionElementId = id;
        console.log(`${maxIntersectionElementId}: ${intersectionRatio}`);
			}
		});
    i = -1;
    entries.forEach(entry => {
      i += 1;
			const id = entry.target.getAttribute('id');
      console.log(`${entries.length}: ${i}: ${id}`);
      element = getTocElementById(id);
      if (element === null) {
        return;
      }
			if (maxIntersectionElementId === id) {
        if (!element.classList.contains('active')) {
          console.log(`activating #${id}...`);
          element.classList.add('active');
          toc = document.querySelector(`#TableOfContents`);
          toc.scroll({
            top: element.getBoundingClientRect().top,
            behavior: "smooth",
          });
        }
			} else {
        if (element.classList.contains('active')) {
          console.log(`deactivating #${id}...`);
				  element.classList.remove('active');
        }
			}
		});
	},{
    rootMargin: "0px",
    threshold: 0,
  });

	// Track all sections that have an `id` applied
	document.querySelectorAll('section[id]').forEach((section) => {
		observer.observe(section);
	});
});