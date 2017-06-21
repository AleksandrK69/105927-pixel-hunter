import {LEVELS_COUNT, ANSWERS_VALUES, BONUSES_COST} from '../constants';

export const calculateStatistic = (state, answers) => {
  if (answers.length < LEVELS_COUNT) {
    return {
      answers,
      bonuses: [],
      pointsMultiply: 0,
      totalPoints: 0,
      totalResult: {
        success: false
      }
    };
  }

  const fastAnswersCount = answers.filter((answer) => answer === ANSWERS_VALUES.fast).length;
  const slowAnswersCount = answers.filter((answer) => answer === ANSWERS_VALUES.slow).length;
  const correctAnswersCount = answers.filter((answer) => answer !== ANSWERS_VALUES.wrong).length;
  const livesCount = state.lives;

  const fastBonus = fastAnswersCount * BONUSES_COST[ANSWERS_VALUES.fast];
  const livesBonus = livesCount * BONUSES_COST.lives;
  const slowBonus = slowAnswersCount * BONUSES_COST[ANSWERS_VALUES.slow];
  const totalPoints = correctAnswersCount * BONUSES_COST[ANSWERS_VALUES.correct];

  const bonuses = [];
  if (livesCount) {
    bonuses.push({
      name: `Бонус за жизни`,
      shortName: `heart`,
      count: livesCount,
      points: BONUSES_COST.lives,
      total: livesBonus
    });
  }

  if (fastAnswersCount) {
    bonuses.push({
      name: `Бонус за скорость`,
      shortName: `fast`,
      count: fastAnswersCount,
      points: BONUSES_COST[ANSWERS_VALUES.fast],
      total: fastBonus
    });
  }

  if (slowAnswersCount) {
    bonuses.push({
      name: `Штраф за медлительность`,
      shortName: `slow`,
      count: slowAnswersCount,
      points: BONUSES_COST[ANSWERS_VALUES.slow],
      total: slowBonus
    });
  }

  const score = totalPoints + livesBonus + fastBonus + slowBonus;

  return {
    answers,
    bonuses,
    pointsMultiply: BONUSES_COST[ANSWERS_VALUES.correct],
    totalPoints,
    totalResult: {
      success: true,
      score
    }
  };
};

export const initStatisticStore = () => {
  window.gameStatistic = [];
};

export const addGameStatistic = (statistic) => {
  window.gameStatistic.unshift(statistic);
};

export const getGameStatistic = () => {
  return window.gameStatistic;
};
