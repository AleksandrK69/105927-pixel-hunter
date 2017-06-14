import AbstractView from '../view';
import footer from '../footer/footer';
import showStatisticGame from './statistic-game';

export default class StatisticView extends AbstractView {
  get template() {
    return `
      ${this.getHeaderTemplate()}
      <div class="result">
        <h1>${this._title}</h1>
        ${this._statistic.map((currentStatistic, index) => {
          return showStatisticGame(currentStatistic, index);
        }).join(``)}
      </div>
      ${footer}
    `;
  }

  set title(title) {
    this._title = title;
  }

  set statistic(statistic) {
    this._statistic = statistic;
  }

  bind() {
    this.element.querySelector(`.back`).addEventListener(`click`, () => {
      this.onBackToIntro();
    });
  }
}
