bonus_duties = [
  "combat_officer",
  "happiness_officer",
  "science_officer",
  "equipment_officer",
  "loyalty_officer",
  "team_leader",
];

mutant_powers = [
  "adhesive",
  "corrode",
  "invisibility",
  "mental_blast",
  "strength",
  "teleport",
  "anomaly",
  "cryokinesis",
  "levitation",
  "puppeteer",
  "telekinesis",
  "charm",
  "electroshock",
  "machine_empathy",
  "pyrokinesis",
  "telepathy",
];

secret_societies = [
  "alpha_complex_local_history_research_group",
  "frankenstein_destroyers",
  "mystics",
  "anti_mutant_group",
  "free_enterprise",
  "no_secret_society1",
  "communists",
  "illuminati",
  "no_secret_society2",
  "death_leopard",
  "intsec1",
  "phreaks",
  "first_church_of_christ_computer_programmer",
  "intsec2",
  "psion",
];

shuffle(bonus_duties);
shuffle(mutant_powers);
shuffle(secret_societies);

choicesArr = [];

let i = 0;
let j = 0;
let k = 0;

while (j < mutant_powers.length) {
  choicesArr.push([bonus_duties[i], mutant_powers[j], secret_societies[k]]);
  i = (i + 1) % bonus_duties.length;
  k = (k + 1) % secret_societies.length;
  j = j + 1;
}

let choices = new Map();
for (let i = 0; i < choicesArr.length; i++) {
  choices.set(i, `${choicesArr[i][0]};${choicesArr[i][1]};${choicesArr[i][2]}`);
}

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

let choiceIds = [...choices.keys()];
shuffle(choiceIds);

ExplorerImp = {
  map: choices,
  keys: choiceIds,
  count: 10,
  onDefaultActionActivated: function () {
    setNextDiscovery();
  },
  onSetDiscovery: function (discoveries) {
    console.log(1);
    let troubleshooterListElement = document.getElementById(
      "explorer-troubleshooter-list"
    );
    let i = 0;
    for (const d of discoveries) {
      const imgPaths = d.discovery.split(";");
      const bonusDutyImgPath = `/img/paranoia/bonus_duty/${imgPaths[0]}.png`;
      const mutantPowerImgPath = `/img/paranoia/mutant_power/${imgPaths[1]}.png`;
      const secretSocietyImgPath = `/img/paranoia/secret_society/${imgPaths[2]}.png`;
      let div = document.createElement("div");
      let title = document.createElement("p");
      title.innerText = `Troubleshooter #${i}`;
      let bonusDutyImg = document.createElement("img");
      bonusDutyImg.className = "img-paranoia";
      bonusDutyImg.src = bonusDutyImgPath;
      let mutantPowerImg = document.createElement("img");
      mutantPowerImg.className = "img-paranoia";
      mutantPowerImg.src = mutantPowerImgPath;
      let secretSocietyImg = document.createElement("img");
      secretSocietyImg.className = "img-paranoia";
      secretSocietyImg.src = secretSocietyImgPath;
      div.appendChild(title);
      div.appendChild(bonusDutyImg);
      div.appendChild(mutantPowerImg);
      div.appendChild(secretSocietyImg);
      troubleshooterListElement.appendChild(div);
      i += 1;
    }
  },
  onClickWord: function (word) {},
};
