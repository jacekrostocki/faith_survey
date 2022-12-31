class ViewEditor {
  mainContainer = document.querySelector(".main-container");
  _btnGenerate = document.querySelector(".btn-generate-a");

  addHandlerEditorBtn(handler) {
    this._btnGenerate.addEventListener("click", function (e) {
      handler();
    });
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

    //remove 'generate btn' and add 'edit' btn
    this._btnGenerate.insertAdjacentHTML(
      "afterend",
      this._generateEditBtnMarkup()
    );
    this._btnGenerate.style.display = "none";
  }

  _generateEditBtnMarkup() {
    return `<a class="navbar-brand" href="#"
    ><button
      type="button"
      class="btn btn-edit btn-primary btn-sm"
      alt=""
    >
      Edycja
    </button></a
  >`;
  }

  _generateStageMarkup(data) {
    return `
            <div class="container">
                <div class="row">
                
                    <div class="card">
                    <div class="card-stage-header card-header">
                    ${data}
                     
                    <div class="card-stage-body card-body"  data-stage="${data}">
                  
                    </div>
                       
                        
                    </div>
                    </div>
                
                </div>
            </div>`;
  }

  _generateInnerMarkup(data) {
    return `
            
                <div class="row">
                
                    <div class="card">
                        <div class="card-inner-header card-header">
                        ${
                          Array.isArray(data)
                            ? data.map(this._markupUnwrap).join("")
                            : `<div class="card-inner-body card-body">
                        ${data}
                      </div>`
                        }
                        </div>
                    </div>
            
                </div>`;
  }

  _markupUnwrap(data) {
    return `<div class="card-inner-body card-body">
    ${data}
  </div>`;
  }

  //   _markupUnwra() {
  //     Array.isArray(data)
  //       ? data.map(this._markupUnwrap).join('')
  //       : `<div class="card-inner-body card-body">
  //   ${data}
  // </div>`;
  //   }
}

export default new ViewEditor();
