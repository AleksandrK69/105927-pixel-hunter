import renderScreen from '../render-screen';
import GreetingView from './greeting-view';
import showRules from '../rules/rules';

export default (state, answers) => {
  const greeting = new GreetingView();

  greeting.onMoveToNextScreen = () => {
    renderScreen(showRules(state, answers));
  };

  return greeting.element;
};
