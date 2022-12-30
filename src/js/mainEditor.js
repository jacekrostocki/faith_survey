import * as model from "./model";
import view from "./view";
import viewEditor from "./viewEditor";

const controlGenerate = function () {
  viewEditor.render(model.state.survey);
};

const init = function () {
  viewEditor.addHandlerEditorBtn(controlGenerate);
};
init();

console.log(
  Object.keys(model.state.survey).forEach((stage) => console.log(stage))
);
