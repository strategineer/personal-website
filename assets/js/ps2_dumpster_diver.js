let ps2_games = new Map();
{{- range $i, $e := $.Site.Data.ps2_games -}}
ps2_games.set({{ $i }}, `{{ $e }}`)
{{ end }}

// Array.from($("#list")[0].childNodes[2].childNodes).filter( x => x.innerText != undefined).map( x => x.innerText.replace("\n", "") ).map( x => x.replace(/.zip.+/g,'')).map(x => `"${x}",`).join("\n")

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

let ps2_games_ids = [...ps2_games.keys()];
shuffle(ps2_games_ids);

let eggCounter = 0;

ExplorerImp = {
  map: ps2_games,
  keys: ps2_games_ids,
  count: 10,
  onDefaultActionActivated: function () {
    setNextDiscovery();
  },
  onSetDiscovery: function (discoveries) {
    eggCounter += discoveries.length;

    let gameQueueElement = document.getElementById("explorer-queue-count");
    if (typeof gameQueueElement !== "undefined" && gameQueueElement !== null) {
      gameQueueElement.innerText = `${eggCounter} / ${ExplorerImp.map.size} ps2 games seen so far.`;
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
      title: "PS2 Dumpster Diver",
      text: eggNames.join("\n"),
      url: window.location.href,
    };
  },
  onClickWord: function (word) {},
};
