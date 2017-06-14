import renderScreen from '../render-screen';
import IntroView from './intro-view';
import showGreeting from '../greeting/greeting';

import {state, setTimer} from '../data/state';
import {answers} from '../data/answers';

import {timer} from '../timer';
import handleTimer from '../timer-handler';

export default () => {
  const intro = new IntroView();

  intro.onMoveToNextScreen = () => {
    const initState = setTimer(state, timer());
    renderScreen(showGreeting(initState, answers));
  };

  handleTimer();

  return intro.element;
};
