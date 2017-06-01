export const RULES = {
  attempts: 10,
  maxFailAttempts: 3,
  attemptTime: {
    value: 30,
    unit: `секунд`
  }
};

export const MAX_LIVES_COUNT = 3;

export const ESTABLISH_YEAR = 2017;

export const SOCIAL_GROUPS = [{
  name: `Твиттер`,
  link: `https://twitter.com/htmlacademy_ru`,
  shortName: `tw`
}, {
  name: `Инстаграм`,
  link: `https://www.instagram.com/htmlacademy/`,
  shortName: `ins`
}, {
  name: `Фэйсбук`,
  link: `https://www.facebook.com/htmlacademy`,
  shortName: `fb`
}, {
  name: `Вконтакте`,
  link: `https://vk.com/htmlacademy`,
  shortName: `vk`
}];
