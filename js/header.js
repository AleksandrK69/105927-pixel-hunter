import {MAX_LIVES_COUNT} from './constants';

const backAnchorHtml = `
  <div class="header__back">
    <span class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.png" width="101" height="44">
    </span>
  </div>
`;

const emptyLiveHtml = `
  <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
`;

const liveHtml = `
  <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
`;

export default (state) => {
  return `
    <header class="header">
      ${backAnchorHtml}
      
      <h1 class="game__timer">${state.time}</h1>
      
      <div class="game__lives">
        ${new Array(MAX_LIVES_COUNT - state.lives).fill(emptyLiveHtml).join(``)}
      
        ${new Array(state.lives).fill(liveHtml).join(``)}
      </div>
    </header>`;
};
