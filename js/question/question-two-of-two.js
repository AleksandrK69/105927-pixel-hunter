import QuestionTwoOfTwoView from './question-two-of-two-view';

export default (answers) => {
  const question = new QuestionTwoOfTwoView();
  question.image1 = answers[0].image.url;
  question.image2 = answers[1].image.url;

  return question.template;
};
