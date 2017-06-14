import renderScreen from '../render-screen';
import GameView from './game-view';
import showIntro from '../intro/intro';
import showHeader from '../header/header';
import showStatisticSummary from '../statistic/statistic-summary';
import showStatistic from '../statistic/statistic';

import showQuestionChooseType from '../question/question-choose-type';
import showQuestionPhotoOrPic from '../question/question-photo-or-pic';
import showQuestionFindPic from '../question/question-find-pic';

import {addAnswer, getAnswerValue} from '../data/answers';
import {setLevel, setLives} from '../data/state';

import questions from '../data/questions';
import {QUESTIONS_TITLES, QUESTION_TYPES, LEVELS_COUNT, TIME_TO_GAME} from '../constants';

const showGame = (state, answers) => {
  const {level, timer, lives} = state;
  const question = questions[level];

  const goToNextStep = (isCorrectAnswer) => {
    const levelTime = TIME_TO_GAME - timer.getTimer();
    const nextStep = level + 1;
    const currentAnswers = addAnswer(answers, getAnswerValue(isCorrectAnswer, levelTime));

    // если ответ неправильный - снимается жизнь
    const currentState = !isCorrectAnswer ? setLives(state, state.lives - 1) : state;

    if (currentState.lives > 0 && nextStep < LEVELS_COUNT) {
      // если возможен переход на следующий шаг - игра продолжается
      return renderScreen(showGame(setLevel(currentState, nextStep), currentAnswers));
    } else {
      // если игра закончилась - останавливается таймер и показывается статистика
      timer.stop();
      timer.clear();
      return renderScreen(showStatistic(currentState, currentAnswers));
    }
  };

  const game = new GameView();

  game.title = QUESTIONS_TITLES[question.type];

  game.getHeaderTemplate = () => showHeader({timer, lives});

  game.onBackToIntro = () => {
    state.timer.clear();
    renderScreen(showIntro());
  };

  game.renderQuestion = () => {
    switch (question.type) {
      case QUESTION_TYPES.chooseType:
        return showQuestionChooseType(...question.images);

      case QUESTION_TYPES.photoOrPic:
        return showQuestionPhotoOrPic(...question.images);

      case QUESTION_TYPES.findPic:
        return showQuestionFindPic(...question.images);

      default:
        return null;
    }
  };

  game.onChooseType = (answer1, answer2) => {
    const isCorrect = question.correctAnswer[0] === answer1 && question.correctAnswer[1] === answer2;
    goToNextStep(isCorrect);
  };

  game.onFindPic = (pictureIndex) => {
    const isCorrect = question.correctAnswer === pictureIndex;
    goToNextStep(isCorrect);
  };

  game.onSetPhotoOrPic = (type) => {
    const isCorrect = question.correctAnswer === type;
    goToNextStep(isCorrect);
  };

  game.renderStatistic = () => {
    return showStatisticSummary(answers);
  };

  state.timer.stop();
  state.timer.start(TIME_TO_GAME);

  document.addEventListener(`timerStop`, () => {
    // При остановке засчитывается неправильный ответ
    goToNextStep(false);
  });

  return game.element;
};

export default showGame;
