export const state = {
  survey: {
    intro: [
      "Jestes Katolikiem?",
      ["o", "Tak", "Nie"],
      "Gotowy na szybki test wiary?",
      ["o", "Tak", "Jasne, ze tak!"],
      "Noo tooo, lecimyyyy ;0!!",
    ],
    stage1: [
      "Czy wiesz gdzie w Biblii zawarte jest 10 przykazan?",
      [
        "o",
        "Nowy Testament, ew. Jana?",
        "Stary Testament ks Wyjscia rodzial 8 (od wersu 4)?",
      ],
      [
        "r",
        "Upsik! Są opisane w ks. Wyjscia., ale nic się nie martw bo i tak lecimy dalej! No i poczytaj ew. Jana bo wyrywa z butów :D!",
        "Brawo! Lecimy zatem dalej!",
      ],
      "Teraz, potrzebujemy abys przeczytal tresc 2 przykazania w biblii (Ks. Wyjscia rozdzial 20 wersy: 4-6). Twoje wnioski, przemyslenia sa kluczowe w nastepnym etapie. ",
      "Wnioski: przykazania orpacowane przez kosciol Rzymsko-Katolicki (wy-googluj dla porownania ;)) róźnią sie od tych biblijnych",
    ],
    stage2: [
      "Co myslisz na ten temat?",
      ["o/P", "Jest to detal", "Nie wiedziałem/am"],
    ],
    stage2P1: [
      "Przeczytaj to i wroc zeby odpowiedz dalej: List do Galacjan rozdzial 1 wersy: 6-9 (15 sekund czytania :)). Czy ma to jakis wplyw na Ciebie? Refleksje?",

      [
        "o",
        "Papież wie co robi i ma moje zaufanie!",
        "Masz moją uwage, jestem ciekaw co w trawie piszczy :)",
      ],

      [
        "r",
        "Możesz w tym miejscy odwrócićsie i odejść. Lub, otworz głowe oraz serce i idźmy dalej. Pamietaj, opieramy sie tu wyłacznie na biblii. Nic nie wymyślamy. Prawda jest taka, ze rodzimy sie w danej wierze i często powielamy tradycje nie rozumiejąc skąd wywodzi i czy ma sens?!",
        "",
      ], //if EMPTY reaction slot then skip to next.
    ],
    stage2P2: [
      "Zawsze miło jest siegnąć u źródła i podstaw wiary chrześcijanskiej. Przed kolejnym etapem, przeczytaj prosze List do Galacjan rozdzial 1 wersy: 6-9",
    ],
    stage3: ["Fajnie ze jestes!!!!!!!!!!!!", ["", "", ""], "", ["", "", ""]],
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
    state.qqEl = currQA[state.innerStageC][state.userChoice];
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
};

export const pathSelectArrAdjust = function () {
  if (state.pathSelection === 0) return;

  for (const [i, el] of state.headers.entries()) {
    if (
      el.includes(`${state.headers[state.stageC]}`) &&
      state.userChoice !== 0 &&
      el.slice(-1) !== state.userChoice.toString()
    )
      state.headers.splice(i, 1);
  }

  state.pathSelection = 0;
};
