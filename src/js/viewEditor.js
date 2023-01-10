class ViewEditor {
  mainContainer = document.querySelector(".main-container");
  _btnGenerate = document.querySelector(".btn-generate-a");
  _btnEdit = document.querySelector(".btn-edit");
  _btnSave = document.querySelector(".btn-save");
  innerHeaderCounter = 0;
  rowCounter = 0;
  stageCounter = 0;
  deletionElement = "";
  deletionEditionStage = "";

  constructor() {}

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
  }

  renderInit(data) {
    //remove 'generate btn' and add 'edit' btns

    this._btnGenerate.insertAdjacentHTML(
      "afterend",
      this._generateEditBtnMarkup()
    );
    this._btnGenerate.style.display = "none";

    //Activate deletion btn when element is selected (row)
    document.addEventListener("click", this.deleteBtnActivation.bind(this));
    //delete functionality assigned to btn
    document
      .querySelector(".btn-deleteSelected")
      .addEventListener("click", this.deleteBtnFunctionality.bind(this));
    //add stage btn functionality
    document
      .querySelector(".btn-new-stage")
      .addEventListener("click", this.addStage.bind(this));
    //+ element button fuctionality attach
    document.addEventListener("click", this.elementAddFunctionality.bind(this));

    //delete stage adding listener to check if proper field clicked
    ///TESTING Save   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    document
      .querySelector(".btn-restore-prev")
      .addEventListener("click", this.testSave.bind(this));

    //TESTING 2 modal/stage delete and edit
    document.addEventListener("click", this.stageEditDelete.bind(this));
  }

  addStage(e) {
    const newStageExample = {};
    newStageExample[`stage${this.stageCounter++}`] = [
      "example one liner",
      ["o", "example: answer A", "example: answer B"],
      ["r", "example: reaction A", "example: reaction B"],

      [
        "o/P",
        "reaction/comment & new Path A marker",
        "reaction/comment & new Path B marker",
      ],
    ];
    this.render(newStageExample);
    delete newStageExample[`stage${this.stageCounter++}`];
  }

  addHandlerEditorBtn(handler) {
    this._btnGenerate.addEventListener("click", function (e) {
      handler();
    });
  }

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

  addHandlerSaveFunctionality(handler) {
    this._btnSave.addEventListener("click", function (e) {
      handler();
    });
  }

  testSave() {
    this.saveObjectCreate();
  }

  saveObjectCreate() {
    const stageArr = Array.from(document.querySelectorAll(".card-stage-body"));

    const savedObject = {};
    for (const [i, el] of stageArr.entries()) {
      //updating DATASET parameter on DOM element to be what was edited by user on element before saving (title)
      let titleToDataset = el
        .closest(".card-stage-header")
        .querySelector(".card-stage-header-span").textContent;

      el.dataset.stage = titleToDataset;
      console.log(el.dataset.stage);
      //main logic
      savedObject[`${el.dataset.stage}`] = [];
      const currentStage = savedObject[`${el.dataset.stage}`];
      //   console.log(savedObject[el.dataset.stage]);
      Array.from(el.querySelectorAll(".card-inner-header")).forEach(
        (innerEl) => {
          if (innerEl.dataset.array === "true") {
            currentStage.push(
              Array.from(innerEl.querySelectorAll(".card-inner-body")).map(
                (bodyElem) =>
                  bodyElem.textContent.replace(/(\r\n|\n|\r)/gm, "").trim()
              )
            );
          }
          if (innerEl.dataset.array === "false") {
            currentStage.push(
              innerEl
                .querySelector(".card-inner-body")
                .textContent.replace(/(\r\n|\n|\r)/gm, "")
                .trim()
            );
          }
        }
      );
    }
    console.log(savedObject);
    return savedObject;
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
      class="btn btn-restore-prev btn-primary btn-sm"
      alt="Anuluj edytowanie"
    >
      Przywróć
    </button>
    <button
      type="button"
      class="btn btn-new-stage btn-primary btn-sm"
      alt="Nowy stage"
    >
      + Dodaj stage
    </button>`;
  }

  _generateStageMarkup(data) {
    return `
            <div class="container" data-container-stage="${data}">
                <div class="row">
                
                    <div class="card border border-primary border-1">
                    <div class="card-stage-header">
                    <span class="card-stage-header-span" data-span-stage="${data}">${data}</span> 
                     
                    <div class="card-stage-body card-body"  data-stage="${data}" data-stageID='${this
      .stageCounter++}'>
                  
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
                
                    
                        <div class="card-inner-header card-header border border-secondary" data-innerID='${this
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
  //MODAL
  //// 1.  display aligned to current viewport
  ////2. only one modal can be up at a time
  stageEditDelete(e) {
    if (e.target.classList.contains("card-stage-header-span")) {
      this.deletionEditionStage = e.target.textContent;
      console.log(this.deletionEditionStage);
      e.target.insertAdjacentHTML(
        "afterbegin",
        this.generateModal(this.deletionEditionStage)
      );
      //overaly insert
      this.mainContainer.insertAdjacentHTML(
        "afterbegin",
        this.generateOverlay()
      );

      //event listeners per modal btn
      document
        .querySelector(".btn-danger")
        .addEventListener("click", this.modalStageDelete.bind(this));
      document
        .querySelector(".btn-success")
        .addEventListener("click", this.modalStageSave.bind(this));
      document
        .querySelector(".btn-close")
        .addEventListener("click", this.modalClose.bind(this));
    }
  }

  modalStageDelete(e) {
    document
      .querySelector(`[data-container-stage="${this.deletionEditionStage}"]`)
      .remove();
    this.deletionEditionStage = "";
    //modal remove
    this.elementsRemovals();
  }

  modalStageSave(e) {
    const newValueModal = document.querySelector(".modal-body-input").value;

    document.querySelector(
      `[data-span-stage="${this.deletionEditionStage}"]`
    ).textContent = newValueModal;
    //modal remove
    this.elementsRemovals();
  }

  modalClose(e) {
    this.elementsRemovals();
  }

  elementsRemovals() {
    document.querySelector(".modal--active").remove();
    document.querySelector(".overlay").remove();
  }

  generateModal(data) {
    return `
    <div class="modal modal--active visible" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Edytuj tytuł sekcji LUB usuń cały segment 🤠</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" data-baseline="${data}">
      Aktualna nazwa: ${data} 
      <input type="text" class="modal-body-input" placeholder=" Podaj nową nazwę ">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Usuń sekcje</button>
        <button type="button" class="btn btn-success">Zapisz tytuł</button>
      </div>
    </div>
  </div>
</div>`;
  }

  generateOverlay() {
    return `<div class="overlay"></div>`;
  }
}

export default new ViewEditor();
