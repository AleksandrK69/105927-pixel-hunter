import AbstractView from '../view';
import footer from '../footer/footer';
import showHeader from '../header/header';
import showStatisticGame from './statistic-game';

export default class StatisticView extends AbstractView {
  constructor(props) {
    super(props);

    this.lives = props.state.lives;
    this.timer = 0;
    this.statistic = props.statistic;
    this.user = props.user;
  }

  get template() {
    return `
      ${showHeader({
        lives: this.lives,
        timer: this.timer
      })}
      <div class="result">
        <h1>Статистика для ${this.user}</h1>
        ${this.renderSummaryStatistic()}
      </div>
      ${footer}
    `;
  }

  bind() {
    this.element.querySelector(`.back`).addEventListener(`click`, () => {
      this.onBackToIntro();
    });
  }

  renderSummaryStatistic() {
    if (!this.statistic.length) {
      return `Вы пока не сыграли ни одной игры.`;
    }

    return `
      <div>
        ${this.statistic.map((currentStatistic, index) => {
          return showStatisticGame({
            answers: currentStatistic.answers,
            pointsMultiply: currentStatistic.pointsMultiply,
            totalPoints: currentStatistic.totalPoints,
            bonuses: currentStatistic.bonuses,
            success: currentStatistic.totalResult.success,
            score: currentStatistic.totalResult.score,
            index: index + 1
          });
        }).join(``)}
      </div>
    `;
  }

  onBackToIntro() {

  }
}
