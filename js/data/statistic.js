export default {
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
};
