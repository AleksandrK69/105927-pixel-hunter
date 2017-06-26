import AbstractView from '../view';
import {ANSWERS_TYPES} from '../constants';

export default class QuestionTwoOfTwoView extends AbstractView {
  get template() {
    return `
      <form class="game__content js-question__choose-type">
        <div class="game__option">
          <img src="${this._image1}" alt="Option 1" width="468" height="458">
          <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="${ANSWERS_TYPES.photo}">
          <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="${ANSWERS_TYPES.painting}">
          <span>Рисунок</span>
          </label>
        </div>
        <div class="game__option">
          <img src="${this._image2}" alt="Option 2" width="468" height="458">
          <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="${ANSWERS_TYPES.photo}">
          <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="${ANSWERS_TYPES.painting}">
          <span>Рисунок</span>
          </label>
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

  chooseType(onChooseType) {
    const form = this.element.querySelector(`.game__content`);
    form.addEventListener(`change`, () => {
      const answer1 = form.querySelector(`[name="question1"]:checked`);
      const answer2 = form.querySelector(`[name="question2"]:checked`);
      if (answer1 && answer2) {
        onChooseType(answer1.value, answer2.value);
      }
    });
  }
}
