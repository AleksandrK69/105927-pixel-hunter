import createDomElement from './create-dom-element';
import backToIntro from './back-to-intro';
import header from './header';
import footer from './footer';
import gameStatsHtml from './game-stats';
import * as questionChooseType from './question-choose-type';
import * as questionFindPic from './question-find-pic';
import * as questionPhotoOrPic from './question-photo-or-pic';
import statsNode from './stats';
import {setLevel} from './data/state';
import questions from './data/questions';
import statistic from './data/statistic';

import {QUESTIONS_TITLES, QUESTION_TYPES, LEVELS_COUNT} from './constants';

const QUESTIONS_ACTIONS = {
  [QUESTION_TYPES.chooseType]: questionChooseType,
  [QUESTION_TYPES.findPic]: questionFindPic,
  [QUESTION_TYPES.photoOrPic]: questionPhotoOrPic
};

const gameNode = (state) => {
  const {level, timer, lives} = state;
  const {askQuestion, addBehaviour} = QUESTIONS_ACTIONS[questions[level].type];
  const shortStatForStep = statistic[level - 1] ? statistic[level - 1].shortStatistic : [];

  const node = createDomElement(`
    ${header({timer, lives})}
    <div class="game">
      <p class="game__task">${QUESTIONS_TITLES[questions[level].type]}</p>
      ${askQuestion(...questions[level].images)}
      <div class="stats">
        ${gameStatsHtml(shortStatForStep)}
      </div>
    </div>
    ${footer}
  `);

  addBehaviour(node, () => {
    const nextStep = level + 1;
    if (nextStep < LEVELS_COUNT) {
      return gameNode(setLevel(state, nextStep));
    }

    timer.stop();
    return statsNode(state);
  });

  backToIntro(node, state);
  return node;
};

export default gameNode;
