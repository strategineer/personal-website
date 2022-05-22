let games = new Map();
{{ range $i, $g := $.Site.Data.steamgames.applist.apps }}
games.set({{ $g.appid }}, `{{ replace $g.name "`" ""}}`);
{{ end }}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

  // Pick a remaining element...
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex--;

  // And swap it with the current element.
  [array[currentIndex], array[randomIndex]] = [
  array[randomIndex], array[currentIndex]];
  }

  return array;
}

let gameKeys =[ ...games.keys() ];
shuffle(gameKeys);


let gameCounter = 0

ExplorerImp = {
  map: games,
  keys: gameKeys,
  count: 3,
  onDefaultActionActivated: function () {
    setNextDiscovery();
  },
  onSetDiscovery: function (discoveries) {
    gameCounter += discoveries.length;
    let gameQueueElement = document.getElementById("explorer-queue-count");
    if(typeof gameQueueElement !== 'undefined' && gameQueueElement !== null) {
      gameQueueElement.innerText = `${gameCounter} / ${ExplorerImp.map.size} games/DLCs/movies/shows seen so far.`;
    }

    let gameListElement = document.getElementById("explorer-game-list");
    gameListElement.innerText = "";
    for (const d of discoveries) {
      let gameNameElement = document.createElement("p");
      gameNameElement.innerText = d.discovery;
      gameListElement.appendChild(gameNameElement);
      let gameEmbedElement = document.createElement("iframe");
      gameEmbedElement.src = `https://store.steampowered.com/widget/${d.key}/`;
      gameEmbedElement.frameborder = 0;
      gameEmbedElement.width = "100%";
      gameEmbedElement.height = 190;
      gameListElement.appendChild(gameEmbedElement);
    }
  },
  generateShareData: function (discoveries) {
    gameNames = []
    for (const d of discoveries) {
      gameNames.push(d.discovery);
    }
    return {
      title: "Infinite Steam Queue",
      text: gameNames.join("\n"),
      url: window.location.href
    }
  },
  onClickWord: function (word) {}
}
