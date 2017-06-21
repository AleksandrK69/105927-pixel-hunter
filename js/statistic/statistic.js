import renderScreen from '../render-screen';
import StatisticView from './statistic-view';
import App from '../main';
import {initialState} from '../data/state';
import {decode} from '../utils';

export default class Statistic {
  constructor(statisticEncoded, state = initialState) {
    const statisticDecoded = decode(statisticEncoded);
    const statistic = JSON.parse(statisticDecoded);

    const lastGame = statistic[0];
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
