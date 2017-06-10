import renderScreen from './render-screen';

/**
 * Тип вопроса, когда нужно угадать, фото или рисунок
 * @param {string} image - url изображения
 * @return {string}
 */
export function askQuestion(image) {
  return `
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${image}" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
  `;
}

export function addBehaviour(node, nextScreen, correctAnswer, answers) {
  const form = node.querySelector(`.game__content`);
  form.addEventListener(`change`, () => {
    const answerNode = form.querySelector(`[name="question1"]:checked`);
    if (answerNode) {
      const isCorrectAnswer = answerNode.value === correctAnswer;
      renderScreen(nextScreen(isCorrectAnswer));
    }
  });
}
