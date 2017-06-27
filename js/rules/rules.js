import renderScreen from '../render-screen';
import RulesView from './rules-view';
import App from '../main';
import {initialState} from '../data/state';

export default class Rules {
  constructor(state = initialState) {
    this.view = new RulesView(state);
  }

  init() {
    renderScreen(this.view);

    this.view.onMoveToNextScreen = (username) => {
      window.gameUsername = username;
      App.showGame();
    };

    this.view.onBackToIntro = () => {
      App.showIntro();
    };
  }
}
