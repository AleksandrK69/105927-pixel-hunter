import createDomElement from './create-dom-element';
import renderScreen from './render-screen';
import backToIntro from './back-to-intro';
import game3Node from './game3';
import header from './header';
import footer from './footer';

const formHtml = `
  <form class="game__content  game__content--wide">
    <div class="game__option">
      <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
      <label class="game__answer  game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--wide  game__answer--paint">
        <input name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  </form>
`;

const statsHtml = `
  <div class="stats">
    <ul class="stats">
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--correct"></li>
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--unknown"></li>
    </ul>
  </div>
`;

const game2Node = () => {
  const node = createDomElement(`
    ${header}
    <div class="game">
      <p class="game__task">Угадай, фото или рисунок?</p>
      ${formHtml}
      ${statsHtml}
    </div>
    ${footer}
  `);

  const form = node.querySelector(`.game__content`);
  form.addEventListener(`change`, () => {
    if (form.querySelector(`[name="question1"]:checked`)) {
      renderScreen(game3Node());
    }
  });

  backToIntro(node);

  return node;
};

export default game2Node;
