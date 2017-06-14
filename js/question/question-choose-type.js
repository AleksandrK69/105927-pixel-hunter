import QuestionChooseTypeView from './question-choose-type-view';

export default (image1, image2) => {
  const question = new QuestionChooseTypeView();
  question.image1 = image1;
  question.image2 = image2;

  return question.template;
};
