import createDomElement from './create-dom-element';
import renderScreen from './render-screen';
import footer from './footer';
import rulesNode from './rules';

const logoHtml = `
  <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
`;

const challengeHtml = `
  <div class="greeting__challenge">
    <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
    <p>Правила игры просты.<br>
      Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
      Задача кажется тривиальной, но не думай, что все так просто.<br>
      Фотореализм обманчив и коварен.<br>
      Помни, главное — смотреть очень внимательно.</p>
  </div>
`;

const nextArrowHtml = `
  <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
`;

const greetingNode = (state) => {
  const node = createDomElement(`
    <div class="greeting central--blur">
      ${logoHtml}
      <h1 class="greeting__asterisk">*</h1>
      ${challengeHtml}
      ${nextArrowHtml}
    </div>
    ${footer}
  `);

  node.querySelector(`.greeting__continue`).addEventListener(`click`, () => {
    renderScreen(rulesNode(state));
  });

  return node;
};

export default greetingNode;
