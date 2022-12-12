// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import * as model from "./model";
import view from "./view";

const controlSubmit = function () {
  model.currIndex();
};

const init = function () {
  view.addHandlerSubmitBtn(controlSubmit);
};
init();
