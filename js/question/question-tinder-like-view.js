import AbstractView from '../view';
import {ANSWERS_TYPES} from '../constants';

export default class QuestionTinderLikeView extends AbstractView {
  get template() {
    return `
      <form class="game__content game__content--wide js-question__photo-or-pic">
        <div class="game__option">
        <img src="${this._image}" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="${ANSWERS_TYPES.photo}">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="${ANSWERS_TYPES.painting}">
          <span>Рисунок</span>
        </label>
        </div>
      </form>
    `;
  }

  set image(src) {
    this._image = src;
  }
}
