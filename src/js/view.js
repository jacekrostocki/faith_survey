class View {
  _responseSection = document.querySelector(".response-section");
  _responseEl1 = document.querySelector(".response--1");
  _responseEl2 = document.querySelector(".response--2");
  _question = document.querySelector(".question");
  _btn = document.querySelector(".btn");

  addHandlerSubmitBtn(handler) {
    this._btn.addEventListener("click", function (e) {
      handler();
    });
  }

  _highlightClear() {
    this._responseEl1.classList.remove("bd-highlight");
    this._responseEl2.classList.remove("bd-highlight");
  }

  addHandlerUserChoice(handler) {
    this._responseSection.addEventListener("click", function (e) {
      console.log(e.target, this._responseEl1);
      if (e.target === this._responseEl1) {
        this._highlightClear();
        this._responseEl1.classList.add("bd-highlight");
        handler(this._responseEl1.dataset.num);
      }
      if (e.target === this._responseEl2) {
        this._highlightClear();
        this._responseEl2.classList.add("bd-highlight");
        handler(this._responseEl1.dataset.num);
      }
    });
  }

  _clearQQ() {
    this._question.innerText = "";
  }
  _clearRR() {
    this._responseEl1.innerText = "";
    this._responseEl2.innerText = "";
  }

  renderQQ(question) {
    this._clearQQ();
    this._question.innerText = question;
  }

  renderRR(resp1, resp2) {
    this._clearRR();
    this._responseEl1.innerText = resp1;
    this._responseEl2.innerText = resp2;
  }
}

export default new View();
