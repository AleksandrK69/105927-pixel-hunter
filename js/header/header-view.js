import AbstractView from '../view';
import {LIVES_COUNT} from '../constants';

const emptyLiveHtml = `
  <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
`;

const liveHtml = `
  <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
`;

export default class HeaderView extends AbstractView {
  get template() {
    return `
      <header class="header">
        <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
        </div>
        
        <h1 class="game__timer">${this._timer.getTimer()}</h1>
        
        <div class="game__lives">
        ${new Array(LIVES_COUNT - this._lives).fill(emptyLiveHtml).join(``)}
        
        ${new Array(this._lives).fill(liveHtml).join(``)}
        </div>
      </header>
    `;
  }

  set timer(timer) {
    this._timer = timer;
  }

  set lives(lives) {
    this._lives = lives;
  }

  bind() {
    this.element.querySelector(`.back`).addEventListener(`click`, () => {
      this.onBackToIntro();
    });
  }
}
