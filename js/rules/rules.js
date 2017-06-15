import renderScreen from '../render-screen';
import RulesView from './rules-view';
import showIntro from '../intro/intro';
import showHeader from '../header/header';
import showGame from '../game/game';

export default (state, answers) => {
  const rules = new RulesView();
  rules.getHeaderTemplate = () => showHeader(state);
  rules.onBackToIntro = () => {
    state.timer.clear();
    renderScreen(showIntro());
  };
  rules.onMoveToNextScreen = () => {
    renderScreen(showGame(state, answers));
  };

  return rules.element;
};
