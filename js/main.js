import Intro from './intro/intro';
import Greeting from './greeting/greeting';
import Rules from './rules/rules';
import Game from './game/game';
import Statistic from './statistic/statistic';
import {initStatisticStore} from './data/statistic';

const ControllerId = {
  INTRO: ``,
  GREETING: `greeting`,
  RULES: `rules`,
  GAME: `game`,
  STATISTIC: `statistic`,
};

const getControllerIdFromHash = (hash) => hash.replace(`#`, ``);

class App {
  constructor() {
    this.routes = {
      [ControllerId.INTRO]: Intro,
      [ControllerId.GREETING]: Greeting,
      [ControllerId.RULES]: Rules,
      [ControllerId.GAME]: Game,
      [ControllerId.STATISTIC]: Statistic
    };

    window.onhashchange = () => {
      this.changeController(getControllerIdFromHash(location.hash));
    };

    initStatisticStore();
    this.init();
  }


  init() {
    this.changeController(getControllerIdFromHash(location.hash));
  }

  changeController(route = ``) {
    const Controller = this.routes[route];
    try {
      new Controller().init();
    } catch (e) {
      throw new Error(`Wrong Controller`);
    }
  }

  showIntro() {
    location.hash = ControllerId.INTRO;
  }

  showGreeting() {
    location.hash = ControllerId.GREETING;
  }

  showRules() {
    location.hash = ControllerId.RULES;
  }

  showGame() {
    location.hash = ControllerId.GAME;
  }

  showStatistic() {
    location.hash = ControllerId.STATISTIC;
  }
}

const app = new App();
export default app;
