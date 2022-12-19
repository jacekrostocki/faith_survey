// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import { Tooltip } from "bootstrap";
import * as model from "./model";
import view from "./view";

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

  //reset user choice after submit so that below btn refresh can grab up to data (detect no user choice)
  model.userSelectionReset(0);
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
  model.localStorageClear();
  controlSubmit();
};

const init = function () {
  view.addHandlerSubmitBtn(controlSubmit);
  view.addHandlerUserChoice(controlUserSelection);
  view.addHandlerRestoreBtn(controlProgressRestore);
  view.addHandlerResetBtn(controlResetForm);
};
init();
