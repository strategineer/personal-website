let words = new Map();
{{- range $k, $v := $.Site.Data.wordle_words -}}
words.set("{{ $k }}", "{{ $v }}")
{{ end }}
let wordKeys =[ ...words.keys() ];

function updateGuesses() {
  setAllDiscovery();
}

ExplorerImp = {
  map: words,
  keys: wordKeys,
  count: 10,
  onDefaultActionActivated: function () {
    setAllDiscovery();
  },
  keysFilter: function (key) {

    const unusedLetters = document.getElementById("lettersNotUsed").value;
    for (const l of unusedLetters) {
      if (key.includes(l)) {
        return false
      }
    }

    const lettersUnplacedPosition1 = document.getElementById("lettersUnplacedPosition1").value || '';
    const lettersUnplacedPosition2 = document.getElementById("lettersUnplacedPosition2").value || '';
    const lettersUnplacedPosition3 = document.getElementById("lettersUnplacedPosition3").value || '';
    const lettersUnplacedPosition4 = document.getElementById("lettersUnplacedPosition4").value || '';
    const lettersUnplacedPosition5 = document.getElementById("lettersUnplacedPosition5").value || '';

    const l1 = document.getElementById("letter1").value || '';
    const l2 = document.getElementById("letter2").value || '';
    const l3 = document.getElementById("letter3").value || '';
    const l4 = document.getElementById("letter4").value || '';
    const l5 = document.getElementById("letter5").value || '';


    const confirmedLetters = `${l1}${l2}${l3}${l4}${l5}${lettersUnplacedPosition1}${lettersUnplacedPosition2}${lettersUnplacedPosition3}${lettersUnplacedPosition4}${lettersUnplacedPosition5}`;
    for (const l of confirmedLetters) {
      if (!key.includes(l)) {
        return false
      }
    }

    let r1, r2, r3, r4, r5;

    let anythingExceptLetters;
    if (unusedLetters) {
      anythingExceptLetters = `[^${unusedLetters}]`;
    } else {
      anythingExceptLetters = ".";
    }
    r1 = anythingExceptLetters;
    r2 = anythingExceptLetters;
    r3 = anythingExceptLetters;
    r4 = anythingExceptLetters;
    r5 = anythingExceptLetters;


    if (l1) {
      r1 = l1;
    } else if (lettersUnplacedPosition1) {
      r1 = `[^${lettersUnplacedPosition1}]`;
    }
    if (l2) {
      r2 = l2;
    } else if (lettersUnplacedPosition2) {
      r2 = `[^${lettersUnplacedPosition2}]`;
    }
    if (l3) {
      r3 = l3;
    } else if (lettersUnplacedPosition3) {
      r3 = `[^${lettersUnplacedPosition3}]`;
    }
    if (l4) {
      r4 = l4;
    } else if (lettersUnplacedPosition4) {
      r4 = `[^${lettersUnplacedPosition4}]`;
    }
    if (l5) {
      r5 = l5;
    } else if (lettersUnplacedPosition5) {
      r5 = `[^${lettersUnplacedPosition5}]`;
    }
    const regex_str = `^${r1}${r2}${r3}${r4}${r5}$`;
    let re = new RegExp(regex_str);
    return re.test(key);
  },
  onSetDiscovery: function (discoveries) {
    let wordListElement = document.getElementById("explorer-word-list");
    let words = []
    for (const d of discoveries) {
      words.push(`${d.key} - ${d.discovery}`);
    }
    if(typeof wordListElement !== 'undefined' && wordListElement !== null) {
      wordListElement.innerText = words.join("\n");
    }
  }
}
