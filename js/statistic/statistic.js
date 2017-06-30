import renderScreen from '../render-screen';
import StatisticView from './statistic-view';
import App from '../main';
import {initialState} from '../data/state';
import {calculateStatistic} from '../data/statistic';
import {API} from '../constants';

export default class Statistic {
  constructor(userName, state = initialState) {
    // если не указан пользователь - редирект на начальную страницу
    if (!userName) {
      App.showIntro();
      return;
    }

    fetch(API.statistic.replace(`:username:`, userName))
      .then((response) => response.json())
      .then((data) => {
        const statistic = [];
        data.forEach(({lives, stats}) => {
          if (stats) {
            statistic.push(calculateStatistic({lives, answers: stats}));
          }
        });

        this.view = new StatisticView({
          state,
          user: decodeURI(userName),
          statistic
        });

        this.init();
      });
  }

  init() {
    renderScreen(this.view);

    this.view.onBackToIntro = () => {
      App.showIntro();
    };
  }
}
