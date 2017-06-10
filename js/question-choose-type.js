import renderScreen from './render-screen';

/**
 * Тип вопроса, когда нужно выбрать для каждого изображения фото или рисунок?
 * @param {string} image1 - url изображения
 * @param {string} image2 - url изображения
 * @return {string}
 */
export function askQuestion(image1, image2) {
  return `
  <form class="game__content">
    <div class="game__option">
      <img src="${image1}" alt="Option 1" width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
    <div class="game__option">
      <img src="${image2}" alt="Option 2" width="468" height="458">
      <label class="game__answer  game__answer--photo">
        <input name="question2" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--paint">
        <input name="question2" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  </form>
  `;
}

export function addBehaviour(node, nextScreen, correctAnswer, answers) {
  const form = node.querySelector(`.game__content`);
  form.addEventListener(`change`, () => {
    const answer1 = form.querySelector(`[name="question1"]:checked`);
    const answer2 = form.querySelector(`[name="question2"]:checked`);
    if (answer1 && answer2) {
      const isCorrectAnswer = correctAnswer[0] === answer1.value && correctAnswer[1] === answer2.value;
      renderScreen(nextScreen(isCorrectAnswer));
    }
  });
}
