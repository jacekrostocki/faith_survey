class View {
  _responseEl1 = document.querySelector(".response--1");
  _responseEl2 = document.querySelector(".response--");
  _question = document.querySelector(".question");
  _btn = document.querySelector(".btn");

  addHandlerSubmitBtn(handler) {
    this._btn.addEventListener("click", function (e) {
      handler();
    });
  }
}

export default new View();
