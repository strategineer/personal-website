console.log = function() {}

const SPLIT_CHARACTER = ",";

window.onload = function () {
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD
  || tryLoadFromLocationHash()) {
    if (ExplorerImp.onDefaultActionActivated !== undefined) {
      ExplorerImp.onDefaultActionActivated();
    }
  }
};

function tryLoadFromLocationHash() {
  console.log(`tryLoadFromLocationHash()`);
  if(window.location.hash) {
    const hash = window.location.hash.substring(1)
    let keys = undefined;
    if (hash.includes(SPLIT_CHARACTER)) {
      keys = hash.split(SPLIT_CHARACTER);
    } else {
      keys = [hash];
    }
    setDiscovery(keys);
    return false;
  }
  return true;
}


window.onhashchange = function() {
  tryLoadFromLocationHash();
};


document.body.onkeyup = function(e){
  if(e.keyCode == 32 // space
    || e.keyCode == 13 // enter
  ){
    if (ExplorerImp.onDefaultActionActivated !== undefined) {
      ExplorerImp.onDefaultActionActivated();
    }
  }
}

function detectClickOnDiscovery() {
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
  ExplorerImp.onClickWord(term);
}

function getDiscoveries(keys) {
  let discoveries = [];
  for (const k of keys) {
    discoveries.push({key: k, discovery: ExplorerImp.map.get(k)})
  }
  return discoveries;
}


function setDiscovery(keys) {
  console.log(`setDiscovery(${keys})`);
  if (keys.length > ExplorerImp.count) {
    keys = keys.slice(0, ExplorerImp.count);
  }
  if (ExplorerImp.currentKeys !== undefined && ExplorerImp.currentKeys.length == keys.length) {
    let allEqual = true;
    for (let i = 0; i < ExplorerImp.currentKeys.length; ++i) {
      if(ExplorerImp.currentKeys[i] !== keys[i]) {
        allEqual = false;
        break;
      }
    }
    if (allEqual) {
      console.log("ERROR: keys not equal");
      return;
    }
  }
  for (const k of keys) {
    if (!ExplorerImp.map.has(k)) {
      console.log("ERROR: k not found");
      console.log(k);
      return;
    }
  }
  ExplorerImp.currentKeys = keys;
  window.location.hash = keys.join(SPLIT_CHARACTER);
  const discoveries = getDiscoveries(keys);
  ExplorerImp.onSetDiscovery(discoveries);
  if (ExplorerImp.generateShareData !== undefined && navigator.canShare(ExplorerImp.generateShareData(discoveries))) {
    const btn = document.querySelector('#explorer-footer-button-share');
    btn.classList.remove("d-none");
  }
}

function setAllDiscovery() {
  console.log(`setAllDiscovery()`);
  setDiscovery(ExplorerImp.keys.filter(ExplorerImp.keysFilter));
}


function setNextDiscovery() {
  console.log(`setNextDiscovery()`);
  if (ExplorerImp.currentIndex  === undefined) {
    ExplorerImp.currentIndex = pickIndex(ExplorerImp.keys);
  }
  console.log(`${ExplorerImp.currentIndex}`);
  let keys = [];
  for (let i = 0; i < ExplorerImp.count; ++i) {
    const nextIndex = (ExplorerImp.currentIndex + 1) % ExplorerImp.keys.length;
    console.log(`${ExplorerImp.currentIndex} -> ${nextIndex}`);
    ExplorerImp.currentIndex = nextIndex;
    const key = ExplorerImp.keys[nextIndex];
    keys.push(key);
  }
  setDiscovery(keys);
}

function setRandomDiscovery() {
  console.log(`setRandomDiscovery()`);
  let keys = [];
  for (let i = 0; i < ExplorerImp.count; ++i) {
    let key = undefined;
    let n_sanity = 0;
    do {
      key = pickOne(ExplorerImp.keys);
      ++n_sanity;
    } while (n_sanity < 100 && (keys.includes(key) || ExplorerImp.currentKeys !== undefined && ExplorerImp.currentKeys.includes(key)));
    keys.push(key);
  }
  setDiscovery(keys);
}

function shareDiscovery() {
  console.log(`shareDiscovery()`);
  if (ExplorerImp.generateShareData === undefined) {
    return;
  }
  const data = ExplorerImp.generateShareData(getDiscoveries(ExplorerImp.currentKeys));
  if (!navigator.canShare(data)) {
    return;
  }
  try {
    navigator.share(data);
  } catch(err) {
    return
  }
}

