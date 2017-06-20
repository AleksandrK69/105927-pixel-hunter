import renderScreen from '../render-screen';
import IntroView from './intro-view';
import App from '../main';

import {initialState} from '../data/state';

export default class Intro {
  constructor(state = initialState) {
    this.view = new IntroView({
      state
    });
  }

  init() {
    renderScreen(this.view);

    this.view.onMoveToNextScreen = () => {
      App.showGreeting();
    };
  }
}
