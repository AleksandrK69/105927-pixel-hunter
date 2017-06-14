import AbstractView from '../view';

export default class StatisticGameView extends AbstractView {
  get template() {
    return `
      <table class="result__table">
        <tr>
        <td>${this._index}</td>
        <td colspan="2">${this.renderStatisticSummary()}</td>
        <td class="result__points">${this._pointsMultiply}</td>
        <td class="result__total">${this._totalPoints}</td>
        </tr>
        ${this._bonuses.map(({name, shortName, count, points, total}) => {
          return `
          <tr>
          <td></td>
          <td class="result__extra">${name}:</td>
          <td class="result__extra">${count}&nbsp;<span class="stats__result stats__result--${shortName}"></span></td>
          <td class="result__points">×&nbsp;${points}</td>
          <td class="result__total">${total}</td>
          </tr>
        `;
        }).join(``)}
        <tr>
        <td colspan="5" class="result__total  result__total--final">${this._result}</td>
        </tr>
      </table>
    `;
  }

  set index(index) {
    this._index = index;
  }

  set bonuses(bonuses) {
    this._bonuses = bonuses;
  }

  set result(result) {
    this._result = result;
  }

  set totalPoints(totalPoints) {
    this._totalPoints = totalPoints;
  }

  set pointsMultiply(pointsMultiply) {
    this._pointsMultiply = pointsMultiply;
  }
}
