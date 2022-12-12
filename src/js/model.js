const state = {
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
};

//////////////////////////////////////////
const headersArrCreateInit = function () {
  Object.keys(state.survey).forEach((stage) => state.headers.push(stage));
  console.log(state.headers);
};
//INITIALIZE
const init = function () {
  headersArrCreateInit();
};
init();
/////////////////////////////////////////////

export const currPosition = function () {
  const currStageName = state.headers[state.stageC];
  const currQA = state.survey[currStageName];

  if (currQA.length === innerStageC) state.stageC++;
};

export const displayState = function () {
  //clear state before iterration, user submission
};
