import assert from 'assert';
import {state, setLevel, setLives, setTimer} from './state';
import {LEVELS_COUNT, LIVES_COUNT} from '../constants';

describe(`Game`, () => {
  describe(`#Levels`, () => {
    it(`should update level`, () => {
      assert.equal(3, setLevel(state, 3).level);
    });

    it(`shouldn't update level to negative`, () => {
      const updateLevel = () => {
        setLevel(state, -1);
      };
      assert.throws(updateLevel);
    });

    it(`shouldn't update level to more then max value`, () => {
      const updateLevel = () => {
        setLevel(state, LEVELS_COUNT + 1);
      };
      assert.throws(updateLevel);
    });

    it(`should have 0 level on start`, () => {
      assert.equal(0, state.level);
    });
  });

  describe(`#Lives`, () => {
    it(`should update lives`, () => {
      assert.equal(1, setLives(state, 1).lives);
    });

    it(`shouldn't update lives to negative`, () => {
      const updateLives = () => {
        setLives(state, -1);
      };
      assert.throws(updateLives);
    });

    it(`shouldn't update lives to more then max value`, () => {
      const updateLives = () => {
        setLives(state, LIVES_COUNT + 1);
      };
      assert.throws(updateLives);
    });

    it(`should have max lives count on start`, () => {
      assert.equal(LIVES_COUNT, state.lives);
    });
  });

  describe(`#Timer`, () => {
    it(`should update timer`, () => {
      assert.equal(100, setTimer(state, 100).timer);
    });

    it(`shouldn't update timer to negative`, () => {
      const updateTimer = () => {
        setTimer(state, -1);
      };
      assert.throws(updateTimer);
    });

    it(`should have null timer on start`, () => {
      assert.equal(null, state.timer);
    });
  });
});
