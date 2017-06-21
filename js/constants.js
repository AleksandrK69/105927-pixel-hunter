export const API = {
  questions: `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/questions`
};

export const LEVELS_COUNT = 10;

export const LIVES_COUNT = 3;

export const QUESTION_TYPES = {
  twoOfTwo: `two-of-two`,
  oneOfThree: `one-of-three`,
  tinderLike: `tinder-like`
};

export const ANSWERS_TYPES = {
  photo: `photo`,
  painting: `painting`,
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
