import renderScreen from './render-screen';
import introNode from './intro';

const backToIntro = (parent) => {
  parent.querySelector(`.back`).addEventListener(`click`, () => {
    renderScreen(introNode());
  });
};
export default backToIntro;
