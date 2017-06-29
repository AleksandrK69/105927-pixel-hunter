import AbstractView from '../view';
import {BONUSES_NAMES} from '../constants';

export default class StatisticGameView extends AbstractView {
  constructor(props) {
    super(props);

    this.index = props.index;
    this.pointsMultiply = props.pointsMultiply;
    this.totalPoints = props.totalPoints;
    this.bonuses = props.bonuses;
    this.result = props.result;
  }

  get template() {
    return `
      <table class="result__table">
        <tr>
        <td>${this.index}</td>
        <td colspan="2">${this.renderStatisticSummary()}</td>
        <td class="result__points">${this.pointsMultiply}</td>
        <td class="result__total">${this.totalPoints}</td>
        </tr>
        ${this.bonuses.map(({shortName, count, points, total}) => {
          return `
          <tr>
          <td></td>
          <td class="result__extra">${BONUSES_NAMES[shortName]}:</td>
          <td class="result__extra">${count}&nbsp;<span class="stats__result stats__result--${shortName}"></span></td>
          <td class="result__points">×&nbsp;${points}</td>
          <td class="result__total">${total}</td>
          </tr>
        `;
        }).join(``)}
        <tr>
        <td colspan="5" class="result__total  result__total--final">${this.result}</td>
        </tr>
      </table>
    `;
  }
}
