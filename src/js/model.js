export const state = {
  survey: {
    intro: [
      "Dla pewności, czy uważasz się za katolika/czkę?",
      ["o", "Tak", "Nie"],
      [
        "r",
        "W takim razie, gotowy na szybki test wiary?",
        "Nic nie szkodzi. Wiedzy o Bogu i jego słowie vs doktryny kościoła katolickiego - nigdy za wiele 😁😂. To co, bierzesz udział!?",
      ],

      ["o", "Tak", "Jasne, ze tak!"],
      "No to, lecimyyyy 🚀!!!",
    ],
    stage1: [
      "Czy wiesz gdzie w biblii zawarte jest 10 przykazan?",
      [
        "o",
        "Nowy Testament, ew. Jana?",
        "Stary Testament ks. Wyjścia rozdział 20 (od wersu 4)?",
      ],
      [
        "r",
        "Upsik! Są opisane w ks. Wyjscia, ale nic się nie martw bo i tak lecimy dalej! No i poczytaj ew. Jana bo wyrywa z butów :D!",
        "Brawo! Lecimy zatem dalej!",
      ],
      "Teraz, potrzebujemy abyś przeczytał treść 2 przykazania w biblii (Ks. Wyjscia rozdzial 20 wersy: 4-6). Twoje wnioski będą kluczowe w kolejnych krokach",
      "✨WNIOSKI✨ na wynos: przykazania orpacowane przez koscioł Rzymsko-Katolicki róźnią sie od tych biblijnych! 🥴",
    ],
    stage2: [
      "Teraz jesteśmy ciekawi co myślisz na ten temat? Czy jest to coś znaczącego w twoim mniemaniu?",
      [
        "o/P",
        "Jest to detal, który nie wzbudza większych refleksji",
        "Nie wiedziałem/am o tym fakcie 🤔",
      ],
    ],
    stage2P1: [
      "W takim razie, przeczytaj prosze (krótki fragment) i wróć żeby odpowiedzieć dalej:(⓿_⓿) List do Galacjan rozdzial 1 wersy: 6-9 (15 sekund czytania :)). Czy ma to jakis wplyw na Ciebie? Refleksje?",

      [
        "o",
        "Uważam, że papież wie co robi i ma moje zaufanie!",
        "Masz moją uwagę! Zobaczmy co dalej w trawie piszczy 👍",
      ],

      [
        "r",
        "Stoisz właśnie rozstaju dróg 🗺. W tym miejscy możesz się odwrócić i odejść z fochem, luuub (▀̿Ĺ̯▀̿ ̿) otwórz głowę oraz serce i idziemy dalej. Pamietaj, opieramy się tu wyłacznie na książce, która jest bestsellerem=biblii. Prawda jest taka, że rodzimy sie w danej wierze i często powielamy tradycje nie rozumiejąc skąd wywodzi i czy ma sens?! NIe zadajemy pytań i nie szukamy u źródła😢",
        "",
      ], //if EMPTY reaction slot then skip to next.
    ],
    stage2P2: [
      "Zawsze miło jest siegnąć u źródła i podstaw wiary chrześcijanskiej. Przed kolejnym etapem, przeczytaj prosze List do Galacjan rozdzial 1 wersy: 6-9",
    ],
    stage3: ["Skoro", ["", "", ""], "", ["", "", ""]],
    stage4: ["", ["", "", ""], "", ["", "", ""]],
    stage5: ["", ["", "", ""], "", ["", "", ""]],
  },

  headers: [],
  qqEl: "",
  respEl1: "",
  respEl2: "",
  stageC: 0,
  innerStageC: 0,
  userChoice: 0,
  pathSelection: 0,
  invokeDryRun: 0,
};

//////////////////////////////////////////
const headersArrCreateInit = function () {
  Object.keys(state.survey).forEach((stage) => state.headers.push(stage));
  //   console.log(state.headers);
};
//INITIALIZE
const init = function () {
  headersArrCreateInit();
};
init();
/////////////////////////////////////////////
// stage name =  state.headers[state.stageC];

export const currStagePosition = function () {
  const currQA = state.survey[state.headers[state.stageC]];
  if (currQA.length === state.innerStageC) {
    state.stageC++;
    state.innerStageC = 0;
  }
};

export const userSelectionIntoState = function (data) {
  state.userChoice = data;
  console.log(state.userChoice);
};

const _clearCurrentRR = function () {
  state.respEl1 = "";
  state.respEl2 = "";
};
const _clearCurrentQQ = function () {
  state.qqEl = "";
};

export const pushIntoState = function () {
  const currQA = state.survey[state.headers[state.stageC]];
  console.log(state.stageC, state.innerStageC);
  //clear state before iterration, user submission
  _clearCurrentRR();
  _clearCurrentQQ();
  //DISPLAY AS Q if single element inside current stage
  if (!Array.isArray(currQA[state.innerStageC])) {
    _clearCurrentRR();
    state.qqEl = currQA[state.innerStageC];
  }

  if (
    Array.isArray(currQA[state.innerStageC]) &&
    currQA[state.innerStageC][0] === "o"
  ) {
    _clearCurrentQQ();
    state.respEl1 = currQA[state.innerStageC][1];
    state.respEl2 = currQA[state.innerStageC][2];
  }
  if (
    Array.isArray(currQA[state.innerStageC]) &&
    currQA[state.innerStageC][0] === "r"
  ) {
    _clearCurrentRR();
    if (currQA[state.innerStageC][state.userChoice] !== "")
      state.qqEl = currQA[state.innerStageC][state.userChoice];
    if (currQA[state.innerStageC][state.userChoice] === "") {
      state.invokeDryRun = 1;
    }
  }

  if (
    Array.isArray(currQA[state.innerStageC]) &&
    currQA[state.innerStageC][0] === "o/P"
  ) {
    _clearCurrentQQ();
    state.respEl1 = currQA[state.innerStageC][1];
    state.respEl2 = currQA[state.innerStageC][2];
    state.pathSelection = 1;
  }

  //invoke stage counter + increase innerStageCounter
  state.innerStageC++;
  currStagePosition();
  console.log(state.stageC, state.innerStageC);
};

export const pathSelectArrAdjust = function () {
  if (state.pathSelection === 0) return;
  console.log(state.headers[state.stageC - 1]);

  for (const [i, el] of state.headers.entries()) {
    if (
      el.includes(`${state.headers[state.stageC - 1]}P`) &&
      state.userChoice !== 0 &&
      el.slice(-1) !== state.userChoice.toString()
    )
      state.headers.splice(i, 1);
  }
  console.log(state.headers);
  state.pathSelection = 0;
};

export const userSelectionReset = function () {
  if (state.qqEl !== "") state.userChoice = 0;
};
