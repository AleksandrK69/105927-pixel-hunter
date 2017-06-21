import AbstractView from '../view';
import footer from '../footer/footer';
import showHeader from '../header/header';

import showQuestionTwoOfTwo from '../question/question-two-of-two';
import showQuestionTinderLike from '../question/question-tinder-like';
import showQuestionOneOfThree from '../question/question-one-of-three';
import showStatisticSummary from '../statistic/statistic-summary';

import {QUESTION_TYPES, TIME_TO_GAME} from '../constants';

export default class GameView extends AbstractView {
  constructor(props) {
    super(props);

    this.lives = props.lives;
    this.questionType = props.question.type;
    this.questionAnswer = props.question.answers;
    this.answers = props.answers;
    this.timer = TIME_TO_GAME;
    this.title = props.question.question;
  }

  get template() {
    return `
      ${showHeader({
        lives: this.lives,
        timer: this.timer
      })}
    <div class="game">
      <p class="game__task">${this.title}</p>
      ${this.getQuestionView()}
      <div class="stats">${showStatisticSummary(this.answers)}</div>
    </div>
    ${footer}
  `;
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

  getQuestionView() {
    switch (this.questionType) {
      case QUESTION_TYPES.twoOfTwo:
        return showQuestionTwoOfTwo(this.questionAnswer);

      case QUESTION_TYPES.tinderLike:
        return showQuestionTinderLike(this.questionAnswer);

      case QUESTION_TYPES.oneOfThree:
        return showQuestionOneOfThree(this.questionAnswer);

      default:
        return null;
    }
  }

  onBackToIntro() {

  }

  onChooseType() {

  }

  onFindPic() {

  }

  onSetPhotoOrPic() {

  }
}
