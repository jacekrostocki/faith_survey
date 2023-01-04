// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import { Tooltip } from "bootstrap";
import * as model from "./model";
import view from "./view";
import viewEditor from "./viewEditor";

const controlSubmit = function () {
  //reset user choice after submit
  model.userSelectionReset(0);

  //add formating - deem text in responses
  view.responseTextHighlight();
  //remove stage/path not selected one
  model.pathSelectArrAdjust();
  //PUSH INTO STATE CURRENT ITEM
  model.pushIntoState();
  //render QUESTION / RESPONSES
  view.renderQQ(model.state.qqEl);
  view.renderRR(model.state.respEl1, model.state.respEl2);
  //button icon change depends what is displayed
  view.btnIconSwitch(model.state.userChoice, model.state.qqEl);
};

const controlUserSelection = function (data) {
  model.userSelectionIntoState(data);
  //btn icon refresh, update based on 2 conditions:1)if user selected sth 2) if qq state is filled with qq to display
  view.btnIconSwitch(model.state.userChoice, model.state.qqEl);
};

const controlProgressRestore = function () {
  model.localStorageGet();
  controlSubmit();
  model.restoreMark(false);
};

const controlResetForm = function () {
  model.resetForm();
};

const init = function () {
  view.addHandlerSubmitBtn(controlSubmit);
  view.addHandlerUserChoice(controlUserSelection);
  view.addHandlerRestoreBtn(controlProgressRestore);
  view.addHandlerResetBtn(controlResetForm);

  view.initPrevView();
  view.initQQonWelcome();
};
init();

const test = {
  category1: ["bb", ["sd", "sd"]],
  category2: [2],
};
const stage = "stage";
test.category3 = [1];
test[`stage${1 + 2}`] = [2];

console.log(test);
