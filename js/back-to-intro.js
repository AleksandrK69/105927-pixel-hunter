import renderScreen from './render-screen';
import introNode from './intro';

const backToIntro = (parent, state) => {
  parent.querySelector(`.back`).addEventListener(`click`, () => {
    state.timer.clear();
    renderScreen(introNode());
  });
};
export default backToIntro;
