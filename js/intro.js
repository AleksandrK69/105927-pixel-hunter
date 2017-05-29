import createDomElement from './create-dom-element';
import renderScreen from './render-screen';
import footer from './footer';
import greetingNode from './greeting';

const introNode = () => {
  const node = createDomElement(`
<div id="main" class="central__content">
<div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</div>
</div>
${footer}
`);
  node.querySelector(`.intro__asterisk`).addEventListener(`click`, () => {
    renderScreen(greetingNode());
  });
  return node;
};

export default introNode;
