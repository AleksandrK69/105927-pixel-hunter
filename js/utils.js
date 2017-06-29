export function preloadImages(images, onLoad) {
  const imagesCount = images.length;
  let imagesLoadedCount = 0;

  const onLoadImage = () => {
    imagesLoadedCount++;
    if (imagesLoadedCount === imagesCount) {
      onLoad();
    }
  };

  images.forEach((image) => {
    const currentImage = new Image();
    currentImage.onload = onLoadImage;
    currentImage.src = image;
  });
}
