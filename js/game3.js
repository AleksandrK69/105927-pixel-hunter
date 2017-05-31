import createDomElement from './create-dom-element';
import renderScreen from './render-screen';
import backToIntro from './back-to-intro';
import statsNode from './stats';
import header from './header';
import footer from './footer';
import gameStatsHtml from './game-stats';

import {initialState} from './data';

const formHtml = ([image1, image2, image3]) => {
  return `
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="${image1}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="${image2}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${image3}" alt="Option 1" width="304" height="455">
      </div>
    </form>
  `;
};

const game3Node = () => {
  const node = createDomElement(`
    ${header(initialState)}
    <div class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
      ${formHtml(initialState.games[2].images)}
      <div class="stats">
        ${gameStatsHtml(initialState.games[2].stats)}
      </div>
    </div>
    ${footer}
  `);

  const formOptionNodes = node.querySelectorAll(`.game__option`);
  Array.from(formOptionNodes, (optionNode) => {
    optionNode.addEventListener(`click`, () => {
      renderScreen(statsNode());
    });
  });

  backToIntro(node);

  return node;
};

export default game3Node;
