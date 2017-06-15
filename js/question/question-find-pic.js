import QuestionFindPicView from './question-find-pic-view';

export default (image1, image2, image3) => {
  const question = new QuestionFindPicView();
  question.image1 = image1;
  question.image2 = image2;
  question.image3 = image3;

  return question.template;
};
