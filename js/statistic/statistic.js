import renderScreen from '../render-screen';
import StatisticView from './statistic-view';
import App from '../main';
import {initialState} from '../data/state';
import {getGameStatistic} from '../data/statistic';

export default class Statistic {
  constructor(state = initialState, answers = []) {
    this.view = new StatisticView({
      state,
      answers,
      title: `Статистика`,
      statistic: getGameStatistic()
    });
  }

  init() {
    renderScreen(this.view);

    this.view.onBackToIntro = () => {
      App.showIntro();
    };
  }
}
