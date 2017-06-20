import renderScreen from '../render-screen';
import StatisticView from './statistic-view';
import App from '../main';
import {initialState} from '../data/state';
import {getGameStatistic} from '../data/statistic';

export default class Statistic {
  constructor(state = initialState) {
    const statistic = getGameStatistic();

    const lastGame = statistic[statistic.length - 1];
    let title = `Статистика`;
    if (lastGame) {
      title = lastGame.totalResult.success ? `Победа!` : `Вы проиграли`;
    }

    this.view = new StatisticView({
      state,
      title,
      statistic
    });
  }

  init() {
    renderScreen(this.view);

    this.view.onBackToIntro = () => {
      App.showIntro();
    };
  }
}
