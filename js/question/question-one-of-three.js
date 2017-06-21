import QuestionOneOfThreeView from './question-one-of-three-view';

export default (answers) => {
  const question = new QuestionOneOfThreeView();
  question.image1 = answers[0].image.url;
  question.image2 = answers[1].image.url;
  question.image3 = answers[2].image.url;

  return question.template;
};
