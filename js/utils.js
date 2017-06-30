const preloadImage = (url) => {
  return new Promise((resolve) => {
    const image = new Image();
    image.addEventListener(`load`, () => {
      resolve();
    });
    image.src = url;
  });
};

export function preloadImages(images) {
  return Promise.all(images.map(preloadImage));
}

export function generateImages(questions) {
  const allImagesForGame = [];
  questions.forEach((question) => {
    question.answers.forEach(({image}) => {
      allImagesForGame.push(image.url);
    });
  });

  return allImagesForGame;
}
