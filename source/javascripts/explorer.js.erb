console.log = function() {}

window.onload = async function () {
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD
  || tryLoadFromLocationHash()) {
    await ExplorerImp.onDefaultActionActivated();
  }
};

async function tryLoadFromLocationHash() {
  console.log(`tryLoadFromLocationHash()`);
  if(window.location.hash) {
    const key = window.location.hash.substring(1)
    if(ExplorerImp.map.has(key) && ExplorerImp.currentKey !== key) {
      await setDiscovery(key);
      return false;
    }
  }
  return true;
}


window.onhashchange = async function() {
  await tryLoadFromLocationHash();
};


document.body.onkeyup = async function(e){
  if(e.keyCode == 32 // space
    || e.keyCode == 13 // enter
  ){
    if (ExplorerImp.onDefaultActionActivated !== undefined) {
      await ExplorerImp.onDefaultActionActivated();
    }
  }
}

async function detectClickOnDiscovery() {
  console.log(`detectClickOnDiscovery()`);
  if (ExplorerImp.onClickWord === undefined) {
    return;
  }
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
  await ExplorerImp.onClickWord(term);
}


async function setDiscovery(key) {
  console.log(`setDiscovery(${key})`);
  if(!ExplorerImp.map.has(key)) {
    return;
  }
  ExplorerImp.currentKey = key;
  window.location.hash = key
  const discovery = ExplorerImp.map.get(key);
  await ExplorerImp.onSetDiscovery(key, discovery);

  if (navigator.canShare(ExplorerImp.generateShareData(key))) {
    const btn = document.querySelector('#explorer-footer-button-share');
    btn.classList.remove("d-none");
  }
}


async function setNextDiscovery() {
  console.log(`setNextDiscovery()`);
  if (ExplorerImp.currentIndex  === undefined) {
    ExplorerImp.currentIndex = pickIndex(ExplorerImp.keys);
  }
  console.log(`${ExplorerImp.currentIndex}`);
  const nextIndex = (ExplorerImp.currentIndex + 1) % ExplorerImp.keys.length;
  console.log(`${ExplorerImp.currentIndex} -> ${nextIndex}`);
  ExplorerImp.currentIndex = nextIndex;
  const key = ExplorerImp.keys[nextIndex];
  await setDiscovery(key);
}

async function setRandomDiscovery() {
  console.log(`setRandomDiscovery()`);
  let key = undefined
  do {
    key = pickOne(ExplorerImp.keys);
  } while(ExplorerImp.size > 1 && key === ExplorerImp.currentKey)
  await setDiscovery(key);
}

async function shareDiscovery() {
  console.log(`shareDiscovery()`);
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

