import createDomElement from './create-dom-element';
import backToIntro from './back-to-intro';
import header from './header';
import footer from './footer';
import gameStatsHtml from './game-stats';

import statistic from './data/statistic';

const statsResultHtml = (answers, {pointsMultiply, totalPoints, bonuses, totalResult: {success, score}}) => {
  return `
    <table class="result__table">
      <tr>
        <td colspan="2">${gameStatsHtml(answers)}</td>
        <td class="result__points">${pointsMultiply ? `× ${pointsMultiply}` : `&mdash;`}</td>
        <td class="result__total">${totalPoints}</td>
      </tr>
      ${[...bonuses].map(({name, shortName, count, points, total}) => {
        return `
          <tr>
            <td class="result__extra">${name}:</td>
            <td class="result__extra">${count}&nbsp;<span class="stats__result stats__result--${shortName}"></span></td>
            <td class="result__points">×&nbsp;${points}</td>
            <td class="result__total">${total}</td>
          </tr>
        `;
      }).join(``)}
      <tr>
        <td colspan="4" class="result__total  result__total--final">${success ? score : `FAIL`}</td>
      </tr>
    </table>
  `;
};

const statsNode = (state, answers) => {
  const node = createDomElement(`
    ${header(state)}
    <div class="result">
      <h1>Победа!</h1>
      ${statsResultHtml(answers, statistic)}
    </div>
    ${footer}
  `);

  backToIntro(node, state);

  return node;
};

export default statsNode;
