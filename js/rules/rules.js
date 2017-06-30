import renderScreen from '../render-screen';
import RulesView from './rules-view';
import App from '../main';
import {initialState, setUserName} from '../data/state';

export default class Rules {
  constructor(state = initialState) {
    this.state = state;
    this.view = new RulesView(state);
  }

  init() {
    renderScreen(this.view);

    this.view.onMoveToNextScreen = (username) => {
      App.setState(setUserName(this.state, username));
      App.showGame();
    };

    this.view.onBackToIntro = () => {
      App.showIntro();
    };
  }
}
