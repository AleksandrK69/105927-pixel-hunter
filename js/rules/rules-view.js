import AbstractView from '../view';
import footer from '../footer/footer';
import showHeader from '../header/header';

import {LEVELS_COUNT, TIME_TO_GAME, LIVES_COUNT} from '../constants';

export default class RulesView extends AbstractView {
  constructor(props) {
    super(props);

    this.lives = props.lives;
    this.timer = props.timer;
  }

  get template() {
    return `
      ${showHeader({
        lives: this.lives,
        timer: this.timer
      })}
      <div class="rules">
        <h1 class="rules__title">Правила</h1>
        <p class="rules__description">Угадай ${LEVELS_COUNT} раз для каждого изображения фото <img
        src="img/photo_icon.png" width="16" height="16"> или рисунок <img
        src="img/paint_icon.png" width="16" height="16" alt="">.<br>
        Фотографиями или рисунками могут быть оба изображения.<br>
        На каждую попытку отводится ${TIME_TO_GAME} секунд.<br>
        Ошибиться можно не более ${LIVES_COUNT} раз.<br>
        <br>
        Готовы?
        </p>
        <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
        </form>
      </div>
      ${footer}
    `;
  }

  bind() {
    const form = this.element.querySelector(`.rules__form`);
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
      this.onMoveToNextScreen();
    });

    this.element.querySelector(`.back`).addEventListener(`click`, () => {
      this.onBackToIntro();
    });
  }

  onMoveToNextScreen() {

  }

  onBackToIntro() {

  }
}
