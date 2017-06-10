import renderScreen from './render-screen';

/**
 * Тип вопроса, когда нужно найти рисунок среди изображений
 * @param {string} image1 - url изображения
 * @param {string} image2 - url изображения
 * @param {string} image3 - url изображения
 * @return {string}
 */
export function askQuestion(image1, image2, image3) {
  return `
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="${image1}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="${image2}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${image3}" alt="Option 1" width="304" height="455">
      </div>
    </form>
  `;
}

export function addBehaviour(node, nextScreen) {
  const formOptionNodes = node.querySelectorAll(`.game__option`);
  Array.from(formOptionNodes, (optionNode) => {
    optionNode.addEventListener(`click`, () => {
      renderScreen(nextScreen());
    });
  });
}
