import QuestionTinderLikeView from './question-tinder-like-view';

export default (answers) => {
  const question = new QuestionTinderLikeView();
  question.image = answers[0].image.url;

  return question.template;
};
