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

  addHandlerUserChoice(handler) {
    this._responseEl1.addEventListener("click", function (e) {
      //RESET ALL HIGHLIGHTS- refactore
      document
        .querySelectorAll(".response")
        .forEach((el) =>
          el.classList.remove("bg-secondary", "text-white", "text-muted")
        );

      e.target.classList.add("bg-secondary", "text-white");
      handler(e.target.dataset.num);
    });
    this._responseEl2.addEventListener("click", function (e) {
      //RESET ALL HIGHLIGHTS - refactore
      document
        .querySelectorAll(".response")
        .forEach((el) =>
          el.classList.remove("bg-secondary", "text-white", "text-muted")
        );

      e.target.classList.add("bg-secondary", "text-white");
      console.log(e.target);
      handler(e.target.dataset.num);
    });
  }

  responsFormattingTextHighlight() {
    document
      .querySelectorAll(".response")
      .forEach((el) => el.classList.add("text-muted"));
    document
      .querySelectorAll(".response")
      .forEach((el) => el.classList.remove("bg-secondary", "text-white"));
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
