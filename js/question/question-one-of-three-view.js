import AbstractView from '../view';

export default class QuestionOneOfThreeView extends AbstractView {
  get template() {
    return `
      <form class="game__content game__content--triple js-question__find-pic">
        <div class="game__option">
        <img src="${this._image1}" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected">
        <img src="${this._image2}" alt="Option 2" width="304" height="455">
        </div>
        <div class="game__option">
        <img src="${this._image3}" alt="Option 3" width="304" height="455">
        </div>
      </form>
    `;
  }

  set image1(src) {
    this._image1 = src;
  }

  set image2(src) {
    this._image2 = src;
  }

  set image3(src) {
    this._image3 = src;
  }
}
