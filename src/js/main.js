// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import * as model from "./model";
import view from "./view";

const controlSubmit = function () {
  //add formating - deem text in responses
  view.responseTextHighlight();
  //PUSH INTO STATE CURRENT ITEM
  model.pushIntoState();
  //render QUESTION / RESPONSES
  view.renderQQ(model.state.qqEl);
  view.renderRR(model.state.respEl1, model.state.respEl2);
  model.pathSelectArrAdjust();
  //reset user selection num in state ater submission.
  model.userSelectionIntoState(0);
  //button icon change depends what is displayed
  view.btnIconSwitch(model.state.userChoice, model.state.qqEl);
};

const controlUserSelection = function (data) {
  model.userSelectionIntoState(data);
  //btn icon refresh, update
  view.btnIconSwitch(model.state.userChoice, model.state.qqEl);
};

const init = function () {
  view.addHandlerSubmitBtn(controlSubmit);
  view.addHandlerUserChoice(controlUserSelection);
};
init();
