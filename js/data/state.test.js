import assert from 'assert';
import {initialState as state, setLevel, setLives, setTimer, setUserName, setQuestions} from './state';
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

    it(`should have 0 timer on start`, () => {
      assert.equal(0, state.timer);
    });
  });

  describe(`#UserName`, () => {
    it(`should update userName`, () => {
      assert.equal(`Имя пользователя`, setUserName(state, `Имя пользователя`).userName);
    });

    it(`shouldn't update userName to non-string`, () => {
      const updateUserName = () => {
        setUserName(state, {userName: `Иван`});
      };
      assert.throws(updateUserName);
    });

    it(`shouldn't update userName to empty string`, () => {
      const wrongUserName = {userName: `   `};
      const updateUserName = () => {
        setUserName(state, wrongUserName);
      };
      assert.throws(updateUserName);
    });

    it(`should have empty userName on start`, () => {
      assert.equal(``, state.userName);
    });
  });

  describe(`#Questions`, () => {
    it(`should update questions`, () => {
      const question = [{title: `Question 1`}, {title: `Question 2`}];
      assert.deepEqual(question, setQuestions(state, question).questions);
    });

    it(`should have empty questions on start`, () => {
      assert.deepEqual([], state.questions);
    });
  });
});
