import createDomElement from './create-dom-element';
import backToIntro from './back-to-intro';
import header from './header';
import footer from './footer';
import gameStatsHtml from './game-stats';
import * as questionChooseType from './question-choose-type';
import * as questionFindPic from './question-find-pic';
import * as questionPhotoOrPic from './question-photo-or-pic';
import statsNode from './stats';
import {setLevel, setLives} from './data/state';
import questions from './data/questions';
import {addAnswer, getAnswerValue} from './data/answers';

import {QUESTIONS_TITLES, QUESTION_TYPES, LEVELS_COUNT} from './constants';

const QUESTIONS_ACTIONS = {
  [QUESTION_TYPES.chooseType]: questionChooseType,
  [QUESTION_TYPES.findPic]: questionFindPic,
  [QUESTION_TYPES.photoOrPic]: questionPhotoOrPic
};

const gameNode = (state, answers) => {
  const {level, timer, lives} = state;
  const {askQuestion, addBehaviour} = QUESTIONS_ACTIONS[questions[level].type];

  const levelStartTime = timer.getTimer();

  const goToNextStep = (isCorrectAnswer) => {
    const levelTime = timer.getTimer() - levelStartTime;
    const nextStep = level + 1;
    const currentAnswers = addAnswer(answers, getAnswerValue(isCorrectAnswer, levelTime));

    // если ответ неправильный - снимается жизнь
    const currentState = !isCorrectAnswer ? setLives(state, state.lives - 1) : state;

    if (currentState.lives > 0 && nextStep < LEVELS_COUNT) {
      // если возможен переход на следующий шаг - игра продолжается
      return gameNode(setLevel(currentState, nextStep), currentAnswers);
    } else {
      // если игра закончилась - останавливается таймер и показывается статистика
      timer.stop();
      return statsNode(currentState, currentAnswers);
    }
  };

  const node = createDomElement(`
    ${header({timer, lives})}
    <div class="game">
      <p class="game__task">${QUESTIONS_TITLES[questions[level].type]}</p>
      ${askQuestion(...questions[level].images)}
      <div class="stats">
        ${gameStatsHtml(answers)}
      </div>
    </div>
    ${footer}
  `);

  addBehaviour(
      node,
      goToNextStep,
      questions[level].correctAnswer,
      answers
  );

  backToIntro(node, state);
  return node;
};

export default gameNode;
