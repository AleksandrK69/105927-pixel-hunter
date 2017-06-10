import createDomElement from './create-dom-element';
import backToIntro from './back-to-intro';
import header from './header';
import footer from './footer';
import gameStatsHtml from './game-stats';

import statistic from './data/statistic';

const statsResultHtml = ({shortStatistic, pointsMultiply, totalPoints, bonuses, totalResult: {success, score}}, index) => {
  return `
    <table class="result__table">
      <tr>
        <td class="result__number">${index + 1}.</td>
        <td colspan="2">${gameStatsHtml(shortStatistic)}</td>
        <td class="result__points">${pointsMultiply ? `× ${pointsMultiply}` : ``}</td>
        <td class="result__total">${totalPoints}</td>
      </tr>
      ${[...bonuses].map(({name, shortName, count, points, total}) => {
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
        <td colspan="5" class="result__total  result__total--final">${success ? score : `FAIL`}</td>
      </tr>
    </table>
  `;
};

const statsNode = (state) => {
  const node = createDomElement(`
    ${header(state)}
    <div class="result">
      <h1>Победа!</h1>
      ${statistic.map((gameData, index) => {
        return statsResultHtml(gameData, index);
      }).join(``)}
    </div>
    ${footer}
  `);

  backToIntro(node, state);

  return node;
};

export default statsNode;
