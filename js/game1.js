import createDomElement from './create-dom-element';
import renderScreen from './render-screen';
import backToIntro from './back-to-intro';
import game2Node from './game2';
import header from './header';
import footer from './footer';
import gameStatsHtml from './game-stats';

import {initialState} from './data';

const formHtml = ([image1, image2]) => {
  return `
  <form class="game__content">
    <div class="game__option">
      <img src="${image1}" alt="Option 1" width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
    <div class="game__option">
      <img src="${image2}" alt="Option 2" width="468" height="458">
      <label class="game__answer  game__answer--photo">
        <input name="question2" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--paint">
        <input name="question2" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  </form>
`;
};

const game1Node = () => {
  const node = createDomElement(`
    ${header(initialState)}
    <div class="game">
      <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
      ${formHtml(initialState.games[0].images)}
      <div class="stats">
        ${gameStatsHtml(initialState.games[0].stats)}
      </div>
    </div>
    ${footer}
  `);

  const form = node.querySelector(`.game__content`);
  form.addEventListener(`change`, () => {
    if (form.querySelector(`[name="question1"]:checked`) &&
        form.querySelector(`[name="question2"]:checked`)) {
      renderScreen(game2Node());
    }
  });

  backToIntro(node);

  return node;
};

export default game1Node;
