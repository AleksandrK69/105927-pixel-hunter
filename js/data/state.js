import {LEVELS_COUNT, LIVES_COUNT} from '../constants';

export const state = Object.freeze({
  level: 0,
  lives: LIVES_COUNT,
  timer: null
});

/**
 * Обновляет уровень игры
 * @param {object} currentState
 * @param {number} level
 * @return {object} - новое состояние игры
 */
export const setLevel = (currentState, level) => {
  if (level < 0) {
    throw new RangeError(`Can't update to negative level`);
  }
  if (level > LEVELS_COUNT) {
    throw new RangeError(`Level shouldn't be more then max questions count`);
  }
  const newState = {};
  Object.assign(newState, currentState);
  newState.level = level;
  return newState;
};

/**
 * Обновляет количество жизней
 * @param {object} currentState
 * @param {number} lives
 * @return {object} - новое состояние игры
 */
export const setLives = (currentState, lives) => {
  if (lives < 0) {
    throw new RangeError(`Can't update to negative lives`);
  }
  if (lives > LIVES_COUNT) {
    throw new RangeError(`Lives shouldn't be more then max count`);
  }
  const newState = {};
  Object.assign(newState, currentState);
  newState.lives = lives;
  return newState;
};

/**
 * Обновляет таймер
 * @param {object} currentState
 * @param {object} timer
 * @return {object} - новое состояние игры
 */
export const setTimer = (currentState, timer) => {
  if (timer < 0) {
    throw new RangeError(`Can't update to negative time`);
  }
  const newState = {};
  Object.assign(newState, currentState);
  newState.timer = timer;
  return newState;
};
