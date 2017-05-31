export const initialState = Object.freeze({
  time: 0,
  lives: 2,
  games: [{
    gameNumber: 1,
    stats: [`wrong`, `slow`, `fast`, `correct`, `wrong`, `unknown`, `fast`, `unknown`],
    images: [`https://k42.kn3.net/CF42609C8.jpg`, `http://i.imgur.com/1KegWPz.jpg`],
    bonuses: [{
      name: `Бонус за скорость`,
      shortName: `fast`,
      count: 1,
      points: 50,
      total: -50
    }, {
      name: `Бонус за жизни`,
      shortName: `heart`,
      count: 2,
      points: 50,
      total: 100
    }, {
      name: `Штраф за медлительность`,
      shortName: `slow`,
      count: 2,
      points: 50,
      total: -100
    }],
    pointsMultiply: 100,
    totalPoints: 900,
    totalResult: {
      success: true,
      score: 950
    }
  }, {
    gameNumber: 2,
    stats: [`wrong`, `slow`, `fast`, `correct`, `wrong`, `fast`, `correct`, `wrong`, `unknown`, `fast`, `unknown`],
    images: [`https://k32.kn3.net/5C7060EC5.jpg`],
    bonuses: [],
    totalPoints: 0,
    totalResult: {
      success: false
    }
  }, {
    gameNumber: 3,
    stats: [`wrong`, `fast`, `correct`, `wrong`, `unknown`, `fast`, `unknown`, `correct`, `wrong`, `unknown`],
    images: [
      `https://i.imgur.com/DiHM5Zb.jpg`,
      `http://i.imgur.com/DKR1HtB.jpg`,
      `https://k42.kn3.net/CF42609C8.jpg`
    ],
    bonuses: [{
      name: `Бонус за жизни`,
      shortName: `heart`,
      count: 2,
      points: 50,
      total: 100
    }],
    totalPoints: 600,
    totalResult: {
      success: true,
      score: 950
    }
  }]
});
