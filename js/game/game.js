import renderScreen from '../render-screen';
import GameView from './game-view';
import App from '../main';
import {initialState, setLives, setLevel} from '../data/state';
import {addAnswer, getAnswerValue} from '../data/answers';
import {timer} from '../timer';
import handleTimer from '../timer-handler';
import {calculateStatistic, addGameStatistic} from '../data/statistic';
import {TIME_TO_GAME, LEVELS_COUNT, ANSWERS_TYPES} from '../constants';

export default class Game {
  constructor(state = initialState, answers = []) {
    this.state = state;
    this.answers = answers;
    this.question = window.gameQuestions[this.state.level];

    this.view = new GameView({
      lives: this.state.lives,
      answers: this.answers,
      question: window.gameQuestions[this.state.level]
    });

    this.timer = timer();
    this.timer.start(TIME_TO_GAME);
    handleTimer();

    document.addEventListener(`timerStop`, () => {
      // При остановке засчитывается неправильный ответ
      this.goToNextStep(false);
    });
  }

  init() {
    this.timer.stop();
    this.timer.start(TIME_TO_GAME);

    renderScreen(this.view);

    this.view.onChooseType = (answer1, answer2) => {
      const isCorrect = this.question.answers[0].type === answer1 && this.question.answers[1].type === answer2;
      this.goToNextStep(isCorrect);
    };

    this.view.onFindPic = (pictureIndex) => {
      const isCorrect = this.question.answers[pictureIndex].type === ANSWERS_TYPES.photo;
      this.goToNextStep(isCorrect);
    };

    this.view.onSetPhotoOrPic = (type) => {
      const isCorrect = this.question.answers[0].type === type;
      this.goToNextStep(isCorrect);
    };

    this.view.onBackToIntro = () => {
      if (confirm(`Вы действительно хотите покинуть игру?`)) { // eslint-disable-line no-alert
        this.timer.stop();
        this.timer.clear();
        App.showIntro();
      }
    };
  }

  goToNextStep(isCorrectAnswer) {
    const levelTime = TIME_TO_GAME - this.timer.getTimer();
    const nextLevel = this.state.level + 1;
    this.answers = addAnswer(this.answers, getAnswerValue(isCorrectAnswer, levelTime));
    // если ответ неправильный - снимается жизнь
    this.state = !isCorrectAnswer ? setLives(this.state, this.state.lives - 1) : this.state;

    if (this.state.lives > 0 && nextLevel < LEVELS_COUNT) {
      // если возможен переход на следующий шаг - игра продолжается
      this.state = setLevel(this.state, nextLevel);
      this.question = window.gameQuestions[nextLevel];
      this.view = new GameView({
        lives: this.state.lives,
        answers: this.answers,
        question: this.question
      });
      this.init();
    } else {
      // если игра закончилась - останавливается таймер и показывается статистика
      this.timer.stop();
      this.timer.clear();

      const statisticData = calculateStatistic(this.state, this.answers);
      addGameStatistic(statisticData);

      App.showStatistic();
    }
  }
}
