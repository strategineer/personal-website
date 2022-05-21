let meditations = new Map();
{{- range $i, $g := $.Site.Data.meditations -}}
meditations.set("{{ index (split $g "\n" | first 1) 0 }}", `{{ $g }}`);
{{ end }}
let meditationKeys =[ ...meditations.keys() ];

function getAllMeditationKeys(term) {
  let keys = [], i;
  for(i = 0; i < ExplorerImp.map.size; i++) {
    const key = ExplorerImp.keys[i]
    if (key == ExplorerImp.currentKey)
      continue;
    if (ExplorerImp.map.get(key).toLowerCase().includes(term))
      keys.push(key);
  }
  return keys;
}


ExplorerImp = {
  map: meditations,
  keys: meditationKeys,
  count: 1,
  onDefaultActionActivated: function () {
    setRandomDiscovery();
  },
  onSetDiscovery: function (discoveries) {
    const d = discoveries[0];
    let e = document.getElementById("explorer-text");
    if(typeof e !== 'undefined' && e !== null) {
      e.innerText = d.discovery;
    }
  },
  generateShareData: function (discoveries) {
    const d = discoveries[0]
    return {
      title: `Marcus Aurelius's Meditation ${d.key}`,
      text: d.discovery,
      url: window.location.href
    }
  },
  onClickWord: function (word) {
    const key = pickOne(getAllMeditationKeys(word));
    setDiscovery(key);
  }
}
