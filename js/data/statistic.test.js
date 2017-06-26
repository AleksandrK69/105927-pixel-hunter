import assert from 'assert';
import {calculateStatistic} from './statistic';
import {ANSWERS_VALUES, BONUSES_COST} from '../constants';

const correctAnswers = [
  ANSWERS_VALUES.correct,
  ANSWERS_VALUES.fast,
  ANSWERS_VALUES.slow,
  ANSWERS_VALUES.correct,
  ANSWERS_VALUES.fast,
  ANSWERS_VALUES.slow,
  ANSWERS_VALUES.correct,
  ANSWERS_VALUES.fast,
  ANSWERS_VALUES.fast,
  ANSWERS_VALUES.slow
];

describe(`Game`, () => {
  describe(`#Statistic`, () => {
    it(`should fail the game`, () => {
      assert.equal(
          false,
          calculateStatistic({
            lives: 0,
            answers: [ANSWERS_VALUES.wrong, ANSWERS_VALUES.wrong, ANSWERS_VALUES.wrong]
          }).totalResult.success
      );
    });

    const statistic = calculateStatistic({
      lives: 3,
      answers: correctAnswers
    });
    const statBonuses = statistic.bonuses;
    const livesBonus = statBonuses.find((bonus) => bonus.shortName === `heart`);
    const fastBonus = statBonuses.find((bonus) => bonus.shortName === `fast`);
    const slowBonus = statBonuses.find((bonus) => bonus.shortName === `slow`);
    const totalPoints = 10 * BONUSES_COST[ANSWERS_VALUES.correct];

    it(`should have lives bonus`, () => {
      assert.equal(3, livesBonus.count);
      assert.equal(BONUSES_COST.lives * 3, livesBonus.total);
    });

    it(`should have fast bonus`, () => {
      assert.equal(4, fastBonus.count);
      assert.equal(BONUSES_COST[ANSWERS_VALUES.fast] * 4, fastBonus.total);
    });

    it(`should have slow bonus`, () => {
      assert.equal(3, slowBonus.count);
      assert.equal(BONUSES_COST[ANSWERS_VALUES.slow] * 3, slowBonus.total);
    });

    it(`should have total points`, () => {
      assert.equal(totalPoints, statistic.totalPoints);
    });

    it(`should have total score`, () => {
      assert.equal(
          totalPoints +
          BONUSES_COST[ANSWERS_VALUES.slow] * 3 +
          BONUSES_COST[ANSWERS_VALUES.fast] * 4 +
          BONUSES_COST.lives * 3,
          statistic.totalResult.score
      );
    });

    it(`should have success result`, () => {
      assert.equal(true, statistic.totalResult.success);
    });
  });
});
