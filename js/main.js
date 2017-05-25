(function () {
  const mainContainerNode = document.querySelector(`main.central`);
  const screenTemplates = [
    document.querySelector(`#greeting`),
    document.querySelector(`#rules`),
    document.querySelector(`#game-1`),
    document.querySelector(`#game-2`),
    document.querySelector(`#game-3`),
    document.querySelector(`#stats`)
  ];
  const LAST_SCREEN_INDEX = screenTemplates.length - 1;
  let currentScreen = 0;

  const KEY_CODES = {
    arrowRight: 39,
    arrowLeft: 37,
    alt: 18
  };

  showScreen(currentScreen);

  let isAltPressed = false;

  window.addEventListener(`keydown`, ({keyCode}) => {
    if (!isAltPressed) {
      isAltPressed = keyCode === KEY_CODES.alt;
    }

    if (isAltPressed) {
      switch (keyCode) {
        case KEY_CODES.arrowLeft: {
          slideToPrevPage();
          break;
        }

        case KEY_CODES.arrowRight: {
          slideToNextPage();
          break;
        }
      }
    }
  });

  window.addEventListener(`keyup`, ({keyCode}) => {
    if (isAltPressed) {
      isAltPressed = keyCode !== KEY_CODES.alt;
    }
  });

  /**
   * Показывает экран с индексом screenIndex
   * @param {number} screenIndex
   */
  function showScreen(screenIndex) {
    mainContainerNode.innerHTML = screenTemplates[screenIndex].innerHTML;
  }

  /**
   * Осуществляет переход к предыдущей странице
   */
  function slideToPrevPage() {
    currentScreen = Math.max(0, currentScreen - 1);
    showScreen(currentScreen);
  }

  /**
   * Осуществляет переход к следующей странице
   */
  function slideToNextPage() {
    currentScreen = Math.min(LAST_SCREEN_INDEX, currentScreen + 1);
    showScreen(currentScreen);
  }
}());
