import AbstractView from '../view';
import {LEVELS_COUNT} from '../constants';

const unknownResultStats = `<li class="stats__result stats__result--unknown"></li>`;

export default class StatisticSummaryView extends AbstractView {
  get template() {
    return `
      <ul class="stats">
        ${this._answers.map((answer) => {
          return `<li class="stats__result stats__result--${answer}"></li>`;
        }).join(``)}
        
        ${new Array(LEVELS_COUNT - this._answers.length).fill(unknownResultStats).join(``)}
      </ul>
    `;
  }

  set answers(answers) {
    this._answers = answers;
  }
}
