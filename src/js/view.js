class View {
  _responseSection = document.querySelector(".response-section");
  _responseEl1 = document.querySelector(".response--1");
  _responseEl2 = document.querySelector(".response--2");
  _question = document.querySelector(".question");
  _btn = document.querySelector(".btn-survay");
  _btnRestore = document.querySelector(".btn-restore");
  _btnResturn = document.querySelector(".btn-return");
  _btnReset = document.querySelector(".btn-reset");
  _previewSection = document.querySelector(".preview-section");

  constructor() {
    this._initPrevView();
  }

  addHandlerReturnBtn(handler) {
    this._btnResturn.addEventListener("click", function (e) {
      handler();
    });
  }

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
      handler(e.target.dataset.num);
    });
  }

  addHandlerRestoreBtn(handler) {
    this._btnRestore.addEventListener("click", function (e) {
      handler();
    });
  }

  addHandlerResetBtn(handler) {
    this._btnReset.addEventListener("click", function (e) {
      handler();
    });
  }

  responseTextHighlight() {
    const responses = document.querySelectorAll(".response");
    responses.forEach((el) => el.classList.add("text-muted"));
    responses.forEach((el) =>
      el.classList.remove("bg-secondary", "text-white")
    );
  }

  btnIconSwitch(userChoice, stateQQ) {
    if (userChoice === 0 && stateQQ !== "") {
      this._btn.innerText = "(☞ﾟヮﾟ)☞ dalej!";
      this._btnDisableEnable(false);
    }

    if (userChoice === 0 && stateQQ === "") {
      this._btn.innerText = "wybierz coś 🤷‍♂️";
      this._btnDisableEnable(true);
    }

    if (userChoice !== 0 && stateQQ === "") {
      this._btn.innerText = "✔zatwierdź i dalej!🙌";
      this._btnDisableEnable(false);
    }
  }
  _btnDisableEnable(boolean) {
    this._btn.disabled = boolean;
  }

  _clearQQ() {
    this._question.innerText = "";
  }
  _clearRR() {
    this._responseEl1.innerText = "";
    this._responseEl2.innerText = "";
  }

  _initPrevView() {
    this._previewSection.style.display = "none";
  }

  renderQQ(question) {
    if (question.length === 0) {
      this._question.style.display = "none";
    } else {
      //preview section
      this._previewSection.style.display = "none";
      document.querySelector(".preview-question").innerText = question;

      this._clearQQ();
      this._question.innerText = question;
      this._question.style.display = "initial";
    }
  }

  renderRR(resp1, resp2) {
    if (resp1.length === 0) {
      console.log("QQ elem hide");
      this._responseEl1.style.display = "none";
      this._responseEl2.style.display = "none";
    } else {
      //preview section
      this._previewSection.style.display = "initial";

      this._clearRR();
      this._responseEl1.innerText = resp1;
      this._responseEl2.innerText = resp2;

      this._responseEl1.style.display = "initial";
      this._responseEl2.style.display = "initial";
    }
  }
}

export default new View();
