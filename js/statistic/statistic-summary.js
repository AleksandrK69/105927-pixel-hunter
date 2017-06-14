import StatisticSummaryView from './statistic-summary-view';

export default (answers) => {
  const statistic = new StatisticSummaryView();
  statistic.answers = answers;

  return statistic.template;
};
