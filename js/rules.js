import createDomElement from './create-dom-element';
import renderScreen from './render-screen';
import backToIntro from './back-to-intro';
import gameNode from './game';
import header from './header';
import footer from './footer';
import {RULES} from './constants';

const formHtml = `
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя">
    <button class="rules__button  continue" type="submit" disabled>Go!</button>
  </form>
`;

const rulesHtml = `
  <p class="rules__description">Угадай ${RULES.attempts} раз для каждого изображения фото <img
    src="img/photo_icon.png" width="16" height="16"> или рисунок <img
    src="img/paint_icon.png" width="16" height="16" alt="">.<br>
    Фотографиями или рисунками могут быть оба изображения.<br>
    На каждую попытку отводится ${RULES.attemptTime.value} ${RULES.attemptTime.unit}.<br>
    Ошибиться можно не более ${RULES.maxFailAttempts} раз.<br>
    <br>
    Готовы?
  </p>
`;

const rulesNode = (state, answers) => {
  const node = createDomElement(`
    ${header(state)}
    <div class="rules">
      <h1 class="rules__title">Правила</h1>
      ${rulesHtml}
      ${formHtml}
    </div>
    ${footer}
  `);

  const form = node.querySelector(`.rules__form`);
  const submitButton = form.querySelector(`.rules__button`);
  const userNameInput = form.querySelector(`.rules__input`);

  userNameInput.addEventListener(`input`, ({target}) => {
    if (target.value.trim() !== ``) {
      submitButton.removeAttribute(`disabled`);
    } else {
      submitButton.setAttribute(`disabled`, `disabled`);
    }
  });

  form.addEventListener(`submit`, (event) => {
    event.preventDefault();

    state.timer.stop();
    state.timer.start();
    renderScreen(gameNode(state, answers));
  });

  backToIntro(node, state);

  return node;
};

export default rulesNode;
