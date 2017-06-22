export const LEVELS_COUNT = 10;

export const LIVES_COUNT = 3;

export const QUESTION_TYPES = {
  chooseType: `chooseType`,
  findPic: `findPic`,
  photoOrPic: `photoOrPic`
};

export const QUESTIONS_TITLES = {
  [QUESTION_TYPES.chooseType]: `Угадайте для каждого изображения фото или рисунок?`,
  [QUESTION_TYPES.photoOrPic]: `Угадай, фото или рисунок?`,
  [QUESTION_TYPES.findPic]: `Найдите рисунок среди изображений`
};

export const ANSWERS_TYPES = {
  photo: `photo`,
  paint: `paint`,
};

export const ANSWERS_VALUES = {
  correct: `correct`,
  wrong: `wrong`,
  fast: `fast`,
  slow: `slow`
};

export const BONUSES_COST = {
  [ANSWERS_VALUES.correct]: 100,
  [ANSWERS_VALUES.wrong]: 0,
  [ANSWERS_VALUES.fast]: 50,
  [ANSWERS_VALUES.slow]: -50,
  lives: 50
};

export const TIME_TO_GAME = 30;

export const BONUSES_NAMES = {
  heart: `Бонус за жизни`,
  fast: `Бонус за скорость`,
  slow: `Штраф за медлительность`
};
