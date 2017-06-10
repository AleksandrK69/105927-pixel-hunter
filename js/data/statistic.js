export default [{
  shortStatistic: [
    `wrong`
  ],
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
  shortStatistic: [
    `wrong`,
    `slow`
  ],
  bonuses: [],
  totalPoints: 0,
  totalResult: {
    success: false
  }
}, {
  shortStatistic: [
    `wrong`,
    `slow`,
    `fast`
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
}, {
  shortStatistic: [
    `wrong`,
    `slow`,
    `fast`,
    `correct`
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
}, {
  shortStatistic: [
    `wrong`,
    `slow`,
    `fast`,
    `correct`,
    `slow`
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
}, {
  shortStatistic: [
    `wrong`,
    `slow`,
    `fast`,
    `correct`,
    `slow`,
    `wrong`
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
}, {
  shortStatistic: [
    `wrong`,
    `slow`,
    `fast`,
    `correct`,
    `slow`,
    `wrong`,
    `fast`
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
}, {
  shortStatistic: [
    `wrong`,
    `slow`,
    `fast`,
    `correct`,
    `slow`,
    `wrong`,
    `fast`,
    `correct`
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
}, {
  shortStatistic: [
    `wrong`,
    `slow`,
    `fast`,
    `correct`,
    `slow`,
    `wrong`,
    `fast`,
    `correct`,
    `correct`
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
}, {
  shortStatistic: [
    `wrong`,
    `slow`,
    `fast`,
    `correct`,
    `slow`,
    `wrong`,
    `fast`,
    `correct`,
    `correct`,
    `fast`
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
}];
