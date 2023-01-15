import * as model from "./model";
import view from "./view";
import viewEditor from "./viewEditor";

const controlGenerate = function () {
  viewEditor.render(model.state.survey);
  viewEditor.renderInit(model.state.survey);
};

const controlSavingFunctionality = function () {
  //generate new object based on DOM elements from editor
  //   viewEditor.saveFunctionality();
  model.savingObjectFromEditor(viewEditor.saveObjectCreate());
};
//

const init = function () {
  viewEditor.addHandlerEditorBtn(controlGenerate);
  viewEditor.addHandlerSaveFunctionality(controlSavingFunctionality);
};
init();
