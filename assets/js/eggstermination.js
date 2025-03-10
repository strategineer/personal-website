let eggs = new Map();
{{- range $i, $e := $.Site.Data.eggs -}}
eggs.set({{ $i }}, `{{ $e }}`)
{{ end }}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

let eggIds = [...eggs.keys()];
shuffle(eggIds);

let eggCounter = 0;

ExplorerImp = {
  map: eggs,
  keys: eggIds,
  count: 10,
  onDefaultActionActivated: function () {
    setNextDiscovery();
  },
  onSetDiscovery: function (discoveries) {
    eggCounter += discoveries.length;

    let gameQueueElement = document.getElementById("explorer-queue-count");
    if (typeof gameQueueElement !== "undefined" && gameQueueElement !== null) {
      gameQueueElement.innerText = `${eggCounter} / ${ExplorerImp.map.size} egg-based breakfast restaurant names seen so far.`;
    }

    let gameListElement = document.getElementById("explorer-egg-list");
    gameListElement.innerText = "";
    for (const d of discoveries) {
      let gameNameElement = document.createElement("p");
      gameNameElement.innerText = d.discovery;
      gameListElement.appendChild(gameNameElement);
    }
  },
  generateShareData: function (discoveries) {
    eggNames = [];
    for (const d of discoveries) {
      eggNames.push(d.discovery);
    }
    return {
      title: "Eggstermination",
      text: eggNames.join("\n"),
      url: window.location.href,
    };
  },
  onClickWord: function (word) {},
};
