import StatisticView from './statistic-view';
import showHeader from '../header/header';
import renderScreen from '../render-screen';
import showIntro from '../intro/intro';

import {calculateStatistic, addGameStatistic, getGameStatistic} from '../data/statistic';

export default (state, answers) => {
  const statisticData = calculateStatistic(state, answers);
  addGameStatistic(statisticData);

  const statistic = new StatisticView();
  statistic.title = statisticData.totalResult.success ? `Победа!` : `Вы проиграли`;
  statistic.statistic = getGameStatistic();

  statistic.getHeaderTemplate = () => showHeader(state);

  statistic.onBackToIntro = () => {
    state.timer.clear();
    renderScreen(showIntro());
  };

  return statistic.element;
};
