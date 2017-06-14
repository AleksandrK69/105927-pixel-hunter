import AbstractView from '../view';
import footer from '../footer/footer';

export default class GameView extends AbstractView {
  get template() {
    return `
      ${this.getHeaderTemplate()}
        <div class="game">
          <p class="game__task">${this._title}</p>
          ${this.renderQuestion()}
          <div class="stats">${this.renderStatistic()}</div>
        </div>
      ${footer}
    `;
  }

  set title(title) {
    this._title = title;
  }

  bind() {
    const formChooseType = this.element.querySelector(`.js-question__choose-type`);
    if (formChooseType) {
      formChooseType.addEventListener(`change`, () => {
        const answer1 = formChooseType.querySelector(`[name="question1"]:checked`);
        const answer2 = formChooseType.querySelector(`[name="question2"]:checked`);
        if (answer1 && answer2) {
          this.onChooseType(answer1.value, answer2.value);
        }
      });
    }

    const formFindPic = this.element.querySelector(`.js-question__find-pic`);
    if (formFindPic) {
      const formOptionNodes = formFindPic.querySelectorAll(`.game__option`);
      Array.from(formOptionNodes, (optionNode, index) => {
        optionNode.addEventListener(`click`, () => this.onFindPic(index));
      });
    }

    const formPhotoOrPic = this.element.querySelector(`.js-question__photo-or-pic`);
    if (formPhotoOrPic) {
      formPhotoOrPic.addEventListener(`change`, () => {
        const answerNode = formPhotoOrPic.querySelector(`[name="question1"]:checked`);
        if (answerNode) {
          this.onSetPhotoOrPic(answerNode.value);
        }
      });
    }

    this.element.querySelector(`.back`).addEventListener(`click`, () => {
      this.onBackToIntro();
    });
  }
}
