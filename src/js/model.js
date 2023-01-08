export const state = {
  survey: {
    stage0: [
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
        "pssssyyt... tak wogóle, jesteśmy dumni że nadal z nami jesteś 😎",
      ], //if EMPTY reaction slot then skip to next.
    ],
    stage2P2: [
      "Zawsze miło jest siegnąć u źródła i podstaw wiary chrześcijanskiej. Jako dopełnienie i podkreślenie faktu, że biblii się nie zmienia, przeczytaj krótki fragment: List do Galacjan rozdzial 1 wersy: 6-9.",
      "Od dzisiaj, zrób nawyk czytania biblii. Zobaczysz więcej smaczków 😇.",
      "W kolejnej części, zerknijmy na kolejny przykład który rzuca sie w 👀.",
    ],
    stage3: [
      "GRATULACJE 👍✨🎉🎉 że doszedłeś tak daleko. <br>Oznacza to jedno, że nie padłeś ofiarą swojego 'dysonasy poznawczewgo'! Duma nas rozpiera! Klikaj dalej i nie ruszajmy w dalszą przygodę! ",
    ],
    stage4: ["test", ["o", "test", "test"], "", ["r", "rrrr", "rrrrrr"]],
    stage5: [
      "Biblia to podstawa wiary. Zacznij czytać pismo zaczynając od Nowego Testamentu i poznaj czego nauczał Jezus. W miarę jedzenia, zobaczysz, że nauki katechizmu odbiegają od norm Jezusowych. Najgorsze co można zrobić to wybrać ignorancję oraz ślepe zaufanie do obrządków religijnych. Jezeli jesteś nadal z nami, to klikaj dalej 🧨👓!",
      'Podobnie można zapytać każdego uczęszczjącego do kościoła czy rozumie skąd wziął się symbol np. choinki i jej dekorowania w okresie grudniowym skoro Jezus urodził się pare miesięcy wcześniej 🤔 (możesz poczytać o "Saturnalia").',
      "Jak to się mówi - 'co za dużo to nie zdrowo' także wciel w życie poniższą instrukcje i wszystko będzie git fasola 😚: <br> 1. Zaproś Jezusa do swojego życia i powiedz ",
      "Tylko nadmienimy, że bardzo pomocne w analizie obecnje sytuacji i aby pomóc to zrozumieć (odpowiedzieć sobie czemu?! jak to możliwe?!) - jest poznanie historii Rzymu, wczesnego chrześcijaństwa (prześladowań). Bedzie to wyśmienity początek do poznania praktycznego odzwierciedlenia powiedzenia 'wilk w owczej skorze' - Jezus ostrzegał dużo razy w swojej ewangelii.",
    ],
  },
  surveyHistory: [],
  headers: [],
  qqEl: "",
  respEl1: "",
  respEl2: "",
  visibleStageIndex: 0,
  visibleInnerIndex: 0,
  stageC: 0,
  innerStageC: 0,
  userChoice: 0,
  pathSelection: 0,
  progress: "",
};

//////////////////////////////////////////
const headersArrCreateInit = function () {
  Object.keys(state.survey).forEach((stage) => state.headers.push(stage));
};
//INITIALIZE

const init = function () {
  headersArrCreateInit();
};
init();

export const savingObjectFromEditor = function (savedObject) {
  //strore objects in map where key is date stamp
  //shift current survey into 'survayHistory
  state.surveyHistory.unshift(state.survey);
  // state.survey = savedObject;
  // console.log(state.survey);
  //move new object to survay property as main now
};

/////////////////////////////////////////////
// stage name =  state.headers[state.stageC];

// export const goBack = function () {
//   const sectionArr = state.survey[state.headers[state.stageC]];
//   const sectionName = state.headers[state.stageC];

//   ///RESTORE headers when go-back action is on stage with 'P' and will go back to prev stage when Paths were chosen
//   if (sectionName.includes(`P`) && visibleInnerIndex === 0) {
//     const elementsToRestore = Object.keys(state.survey).filter((stage) =>
//       stage.includes(sectionName.slice(sectionName.indexOf("P"), -1))
//     );
//     const headersToRetainLeft = state.headers.filter(
//       (el, i) => i < state.stageC
//     );
//     const headersToRetainRight = Object.keys(state.survey).filter((stage) => {
//       if (
//         !stage.includes(`P`) &&
//         stage.slice(5, stage.length) >= state.stageC * 1
//       ) {
//         return true;
//       }

//       if (
//         stage.includes(`P`) &&
//         stage.slice(5, stage.includes("P")) > state.stageC * 1
//       ) {
//         return true;
//       }
//       return false;
//     });
//     state.headers = [
//       ...headersToRetainLeft,
//       ...elementsToRestore,
//       ...headersToRetainRight,
//     ];
//     state.stageC--;
//     state.innerStageC = sectionArr.length;
//     restoreMark(true);
//     return;
//   }
//   if (!sectionName.includes(`P`) && state.visibleInnerIndex === 0) {
//     console.log("goBack NOT incl P - start", state.stageC, state.innerStageC);
//     state.stageC = state.visibleStageIndex;
//     state.innerStageC = sectionArr.length;
//     // state.innerStageC = sectionArr.length;
//     restoreMark(true);
//     console.log("goBack NOT incl P - end", state.stageC, state.innerStageC);
//     return;
//   }
//   if (state.innerStageC === 0) {
//     state.innerStageC = state.visibleInnerIndex;
//     state.stageC = state.visibleStageIndex;
//     state.innerStageC--;
//     console.log("goBack NORMAL mode", state.innerStageC);
//     restoreMark(true);
//   }

//   state.innerStageC--;
//   restoreMark(true);
// };

const saveProgress = function () {
  state.progress = {
    stageC: state.stageC,
    innerStageC: state.innerStageC,
    userChoice: state.userChoice,
    pathSelection: state.pathSelection,
  };
};

const localStorageSet = function () {
  const currQA = state.survey[state.headers[state.stageC]];
  //We save only QQ = not arrays / single string value/property
  if (Array.isArray(currQA[state.innerStageC])) return;
  localStorageClear();
  saveProgress();
  localStorage.setItem("progress", JSON.stringify(state.progress));
};

export const localStorageGet = function () {
  const data = JSON.parse(localStorage.getItem("progress"));

  //GUARD
  if (data) {
    state.stageC = data["stageC"];
    state.innerStageC = data["innerStageC"];
    state.userChoice = data["userChoice"];
    state.pathSelection = data["pathSelection"];
    restoreMark(true);
  }
};

export const restoreMark = function (boolean) {
  state.progress = boolean;
};

export const localStorageClear = function () {
  localStorage.clear("progress");
};

export const resetForm = function () {
  document.location.reload();
};

export const currStagePosition = function () {
  const currQA = state.survey[state.headers[state.stageC]];
  if (currQA.length === state.innerStageC) {
    state.stageC++;
    state.innerStageC = 0;
  }
};

export const userSelectionIntoState = function (data) {
  state.userChoice = data;
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
  //visibleCurrentElem needed for 'go back' functionality and IF condiions. Need to capture actual element displayed. as push into state is designed to increase counter always at the bottom
  // state.visibleStageIndex = state.stageC;
  // state.visibleInnerIndex = state.innerStageC;
  //backup only on Question mark
  localStorageSet();
  //invoke stage counter + increase innerStageCounter
  if (state.progress === true) return;

  state.innerStageC++;
  currStagePosition();
  console.log(
    state.stageC,
    state.innerStageC,
    state.visibleStageIndex,
    state.visibleInnerIndex
  );
};

//ADJUSTING headers array - after path is selected, not used is removed from the array
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
