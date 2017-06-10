import assert from 'assert';
import {answers, addAnswer, getAnswerValue} from './answers';
import {ANSWERS_VALUES} from '../constants';

describe(`Game`, () => {
  describe(`#Answers`, () => {
    it(`should add answer`, () => {
      const initAnswers = [ANSWERS_VALUES.slow, ANSWERS_VALUES.correct];
      assert.deepEqual(
          [ANSWERS_VALUES.slow, ANSWERS_VALUES.correct, ANSWERS_VALUES.correct],
          addAnswer(initAnswers, ANSWERS_VALUES.correct)
      );
    });

    it(`should be an empty answers at start`, () => {
      assert.deepEqual([ANSWERS_VALUES.slow], addAnswer(answers, ANSWERS_VALUES.slow));
    });

    it(`should be a wrong answer`, () => {
      assert.equal(ANSWERS_VALUES.wrong, getAnswerValue(false, 10));
    });

    it(`should be a fast answer`, () => {
      assert.equal(ANSWERS_VALUES.fast, getAnswerValue(true, 9));
    });

    it(`should be a correct answer`, () => {
      assert.equal(ANSWERS_VALUES.correct, getAnswerValue(true, 10));
      assert.equal(ANSWERS_VALUES.correct, getAnswerValue(true, 15));
      assert.equal(ANSWERS_VALUES.correct, getAnswerValue(true, 20));
    });

    it(`should be a slow answer`, () => {
      assert.equal(ANSWERS_VALUES.slow, getAnswerValue(true, 21));
    });
  });
});
