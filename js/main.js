import Intro from './intro/intro';
import Greeting from './greeting/greeting';
import Rules from './rules/rules';
import Game from './game/game';
import Statistic from './statistic/statistic';
import {preloadImages} from './utils';
import {API} from './constants';

const ControllerId = {
  INTRO: ``,
  GREETING: `greeting`,
  RULES: `rules`,
  GAME: `game`,
  STATISTIC: `statistic`,
};

const getControllerIdFromHash = (hash) => {
  const hashValue = hash.replace(`#`, ``);
  const hashParams = hashValue.split(`=`);
  return hashParams ? hashParams[0] : hashValue;
};

const getHashParam = (hash) => {
  const hashValue = hash.replace(`#`, ``);
  const hashParams = hashValue.split(`=`);
  return hashParams ? hashParams[1] : null;
};

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

    if (!window.gameQuestions) {
      fetch(API.questions)
        .then((response) => response.json())
        .then((result) => {
          window.gameQuestions = result;

          // прелоад всех картинок для игры
          const allImagesForGame = [];
          result.forEach((question) => {
            question.answers.forEach((answer) => {
              allImagesForGame.push(answer.image.url);
            });
          });

          preloadImages(allImagesForGame, this.init.bind(this));
        });
    } else {
      this.init();
    }
  }


  init() {
    this.changeController(getControllerIdFromHash(location.hash));
  }

  changeController(route = ``) {
    const Controller = this.routes[route];

    if (route === ControllerId.STATISTIC) {
      return new Controller(getHashParam(location.hash));
    }

    try {
      return new Controller(getHashParam(location.hash)).init();
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

  showStatistic(statisticHash = ``) {
    location.hash = `${ControllerId.STATISTIC}=${statisticHash}`;
  }
}

const app = new App();
export default app;
