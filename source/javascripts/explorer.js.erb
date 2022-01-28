window.onload = function () {
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD
  || tryLoadFromLocationHash()) {
    setRandomDiscovery();
  }

  if (navigator.canShare(ExplorerImp.generateShareData())) {
    const btn = document.querySelector('#explorer-footer-button-share');
    btn.classList.remove("d-none");
  }
};

function tryLoadFromLocationHash() {
  if(window.location.hash) {
    const key = window.location.hash.substring(1)
    if(ExplorerImp.map.has(key)) {
      setDiscovery(key);
      return false;
    }
  }
  return true;
}

window.onhashchange = tryLoadFromLocationHash;


document.body.onkeyup = function(e){
  if(e.keyCode == 32 // space
    || e.keyCode == 13 // enter
  ){
    setRandomDiscovery();
  }
}

function detectClickOnDiscovery() {
  s = window.getSelection();
  let range = s.getRangeAt(0);
  let node = s.anchorNode;
  while(range.toString().indexOf(' ') != 0 && range.toString().indexOf('—') != 0) {
    try {
      range.setStart(node,(range.startOffset -1));
    } catch {
      break;
    }
  }
  range.setStart(node, range.startOffset +1);
  do{
    try {
      range.setEnd(node,range.endOffset + 1);
    } catch {
      break;
    }
  } while(range.toString().indexOf(' ') == -1 && range.toString().indexOf('—') == -1 && range.toString().trim() != '');
  const term = range.toString().trim().replace(/^\W/g, '').replace(/\W$/g, '').toLowerCase();
  ExplorerImp.onClickWord(term);
}


function setDiscovery(key) {
  if(!ExplorerImp.map.has(key)) {
    return;
  }
  ExplorerImp.currentKey = key;
  let meditation = ExplorerImp.map.get(key)
  let e = document.getElementById("explorer-text")
  if(typeof e !== 'undefined' && e !== null) {
    e.innerText = meditation;
    window.location.hash = key
  }
}

function setRandomDiscovery() {
  const key = pickOne(ExplorerImp.keys);
  setDiscovery(key);
}

async function shareDiscovery() {
  const data = ExplorerImp.generateShareData();
  if (!navigator.canShare(data)) {
    return;
  }
  try {
    await navigator.share(data);
  } catch(err) {
    return
  }
}

