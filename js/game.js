import createDomElement from './create-dom-element';
import backToIntro from './back-to-intro';
import header from './header';
import footer from './footer';
import gameStatsHtml from './game-stats';
import * as questionChooseType from './question-choose-type';
import * as questionFindPic from './question-find-pic';
import * as questionPhotoOrPic from './question-photo-or-pic';
import statsNode from './stats';

import {QUESTIONS_TITLES, QUESTION_TYPES} from './constants';

const QUESTIONS_ACTIONS = {
  [QUESTION_TYPES.chooseType]: questionChooseType,
  [QUESTION_TYPES.findPic]: questionFindPic,
  [QUESTION_TYPES.photoOrPic]: questionPhotoOrPic
};

const gameNode = (game, currentStep) => {
  const {questions, statistic} = game;
  const {askQuestion, addBehaviour} = QUESTIONS_ACTIONS[questions[currentStep].type];
  const shortStatForStep = statistic[currentStep - 1] ? statistic[currentStep - 1].shortStatistic : [];

  const node = createDomElement(`
    ${header(game)}
    <div class="game">
      <p class="game__task">${QUESTIONS_TITLES[questions[currentStep].type]}</p>
      ${askQuestion(...questions[currentStep].images)}
      <div class="stats">
        ${gameStatsHtml(shortStatForStep)}
      </div>
    </div>
    ${footer}
  `);

  addBehaviour(node, () => {
    const nextStep = currentStep + 1;
    if (nextStep >= questions.length) {
      return statsNode();
    }
    return gameNode(game, nextStep);
  });

  backToIntro(node);
  return node;
};

export default gameNode;
