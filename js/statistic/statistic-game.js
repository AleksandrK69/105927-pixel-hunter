import StatisticGameView from './statistic-game-view';
import showStatisticSummary from './statistic-summary';

export default ({answers, pointsMultiply, totalPoints, bonuses, totalResult: {success, score}}, index) => {
  const statistic = new StatisticGameView();
  statistic.index = index + 1;
  statistic.bonuses = bonuses;
  statistic.result = success ? score : `FAIL`;
  statistic.totalPoints = totalPoints;
  statistic.pointsMultiply = pointsMultiply ? `× ${pointsMultiply}` : `&mdash;`;

  statistic.renderStatisticSummary = () => {
    return showStatisticSummary(answers);
  };

  return statistic.template;
};
