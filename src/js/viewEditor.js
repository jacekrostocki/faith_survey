class ViewEditor {
  mainContainer = document.querySelector(".main-container");
  _btnGenerate = document.querySelector(".btn-generate-a");
  _btnEdit = document.querySelector(".btn-edit");
  innerHeaderCounter = 0;
  rowCounter = 0;
  stageCounter = 0;
  deletionElement = "";

  constructor() {
    document.addEventListener("click", this.elementAddFunctionality.bind(this));
    document.addEventListener("click", this.deleteBtnActivation.bind(this));
  }

  render(data) {
    Object.keys(data).forEach((stage) => {
      const stageMarkup = this._generateStageMarkup(stage);
      this.mainContainer.insertAdjacentHTML("beforeend", stageMarkup);

      let mainContainerInside = document.querySelector(
        `[data-stage="${stage}"]`
      );

      data[stage].forEach((el) => {
        mainContainerInside.insertAdjacentHTML(
          "beforeend",
          this._generateInnerMarkup(el)
        );
      });
    });

    //remove 'generate btn' and add 'edit' btns
    this._btnGenerate.insertAdjacentHTML(
      "afterend",
      this._generateEditBtnMarkup()
    );
    this._btnGenerate.style.display = "none";
    //delete functionality assigned to btn
    document
      .querySelector(".btn-deleteSelected")
      .addEventListener("click", this.deleteBtnFunctionality.bind(this));
  }

  addHandlerEditorBtn(handler) {
    this._btnGenerate.addEventListener("click", function (e) {
      handler();
    });
  }

  //FEATURES add plan
  //1. add EDIT functionality
  //1.A EDIT text // add new elements // save and set as current// keep previous version - history trial //retore

  elementAddFunctionality(e) {
    const blankArrayInsert = this._generateInnerMarkup([
      "o",
      "Przykladowy tekst1",
      "Przykladowy tekst2",
    ]);
    const blankSingleInsert = this._generateInnerMarkup(
      "Przykladowy tekst xyz"
    );

    if (!e.target.classList.contains("btn-addElem")) return;
    //0. display what to insert a) single string b) array
    const choiceMarkup = `<span class="container-inserted"> : <button class="btn-addElem--array btn-inserted" contentEditable="false">array</button>
      <button class="btn-addElem--single btn-inserted" contentEditable="false">single</button></span>`;
    const insertedBtnsArr = Array.from(
      e.target.querySelectorAll(".btn-inserted")
    );

    if (insertedBtnsArr.length === 0)
      e.target.insertAdjacentHTML("beforeend", choiceMarkup);
    if (!insertedBtnsArr.length === 0)
      document.querySelector(".container-inserted").remove();

    document
      .querySelector(".container-inserted")
      .addEventListener("click", function (e) {
        if (e.target.classList.contains("btn-addElem--array")) {
          e.target
            .closest(".row")
            .insertAdjacentHTML("beforebegin", blankArrayInsert);
          document.querySelector(".container-inserted").remove();
        }
        if (e.target.classList.contains("btn-addElem--single")) {
          e.target
            .closest(".row")
            .insertAdjacentHTML("beforebegin", blankSingleInsert);
          document.querySelector(".container-inserted").remove();
        }
      });
  }

  deleteBtnFunctionality(e) {
    document.querySelector(`[data-rowid="${this.deletionElement}"]`).remove();
  }

  deleteBtnActivation(e) {
    const deleteBtn = document.querySelector(".btn-deleteSelected");
    if (document.activeElement.classList.contains("row")) {
      this.deletionElement = document.activeElement.dataset.rowid;
      deleteBtn.removeAttribute("disabled");
    }

    if (!document.activeElement.classList.contains("row")) {
      if (!deleteBtn.hasAttribute("disabled"))
        deleteBtn.setAttribute("disabled", "");
    }
  }

  _generateEditBtnMarkup() {
    return `<button
      type="button"
      class="btn btn-deleteSelected btn-primary btn-sm"
      alt="Usuń jeden an raz" 
      disabled>
      Usuń zaznaczony
    </button>
  <button
      type="button"
      class="btn btn-cancelEdit btn-primary btn-sm"
      alt="Anuluj edytowanie"
    >
      Przywróć
    </button>`;
  }

  _generateStageMarkup(data) {
    return `
            <div class="container">
                <div class="row">
                
                    <div class="card border border-primary border-1">
                    <div class="card-stage-header ">
                    ${data}
                     
                    <div class="card-stage-body card-body"  data-stage="${data}" id='${this.stageCounter}'>
                  
                    </div>
                       
                        
                    </div>
                    </div>
                
                </div>
            </div>`;
  }

  _generateInnerMarkup(data) {
    return `
            
                <div class="row" data-rowID='${this
                  .rowCounter++}' contentEditable="true">
                
                    
                        <div class="card-inner-header card-header border border-secondary" id='${this
                          .innerHeaderCounter++}' data-array=${
      Array.isArray(data) ? `true` : `false`
    }>
                        <button class="btn-addElem btn btn-light" contentEditable="false">+ element</button>
                        ${
                          Array.isArray(data)
                            ? data.map(this._markupUnwrap).join("")
                            : this._markupUnwrap(data)
                        }
                        </div>
                    
            
                </div>`;
  }

  _markupUnwrap(data) {
    return `<div class="card-inner-body card-body border-bottom border-white" >
    ${data}
  </div>`;
  }
}

export default new ViewEditor();
