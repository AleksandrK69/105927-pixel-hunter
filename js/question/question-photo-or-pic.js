import QuestionPhotoOrPicView from './question-photo-or-pic-view';

export default (image) => {
  const question = new QuestionPhotoOrPicView();
  question.image = image;

  return question.template;
};
