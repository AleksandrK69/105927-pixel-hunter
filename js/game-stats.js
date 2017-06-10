import {QUESTIONS_COUNT} from './constants';

const unknownResultStats = `<li class="stats__result stats__result--unknown"></li>`;

export default (data) => {
  return `
    <ul class="stats">
      ${[...data].map((result) => {
        return `<li class="stats__result stats__result--${result}"></li>`;
      }).join(``)}
      
      ${new Array(QUESTIONS_COUNT - data.length).fill(unknownResultStats).join(``)}
    </ul>
  `;
};
