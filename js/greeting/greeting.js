import renderScreen from '../render-screen';
import GreetingView from './greeting-view';
import App from '../main';

export default class Greeting {
  constructor() {

    this.view = new GreetingView();
  }

  init() {
    renderScreen(this.view);

    this.view.onMoveToNextScreen = () => {
      App.showRules();
    };
  }
}
