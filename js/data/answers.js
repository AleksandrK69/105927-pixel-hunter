import {ANSWERS_VALUES} from '../constants';

export const answers = [];

export const addAnswer = (currentAnswers, answer) => {
  return [...currentAnswers, answer];
};

/**
 * Определяет значение ответа
 * Неправильный, или правильный. правильный может быть быстрый или медленный
 * @param {boolean} isCorrectAnswer - правильный ли ответ
 * @param {number} levelTime - количество секунд, за которые был дан ответ
 * @return {string} - значение ответа
 */
export const getAnswerValue = (isCorrectAnswer, levelTime) => {
  if (!isCorrectAnswer) {
    return ANSWERS_VALUES.wrong;
  }
  if (levelTime < 10) {
    return ANSWERS_VALUES.fast;
  }
  return levelTime > 20 ? ANSWERS_VALUES.slow : ANSWERS_VALUES.correct;
};
