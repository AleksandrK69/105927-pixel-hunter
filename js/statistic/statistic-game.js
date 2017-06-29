import StatisticGameView from './statistic-game-view';
import showStatisticSummary from './statistic-summary';

export default ({answers, pointsMultiply, totalPoints, bonuses, totalResult: {success, score}}, index) => {
  const statistic = new StatisticGameView({
    index: index + 1,
    bonuses,
    totalPoints,
    pointsMultiply: pointsMultiply ? `× ${pointsMultiply}` : `&mdash;`,
    result: success ? score : `FAIL`
  });

  statistic.renderStatisticSummary = () => {
    return showStatisticSummary(answers);
  };

  return statistic.template;
};
