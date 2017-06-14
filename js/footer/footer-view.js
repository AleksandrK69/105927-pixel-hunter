import AbstractView from '../view';

const SOCIAL_GROUPS = [{
  name: `Твиттер`,
  link: `https://twitter.com/htmlacademy_ru`,
  shortName: `tw`
}, {
  name: `Инстаграм`,
  link: `https://www.instagram.com/htmlacademy/`,
  shortName: `ins`
}, {
  name: `Фэйсбук`,
  link: `https://www.facebook.com/htmlacademy`,
  shortName: `fb`
}, {
  name: `Вконтакте`,
  link: `https://vk.com/htmlacademy`,
  shortName: `vk`
}];

export default class FooterView extends AbstractView {
  get template() {
    return `
      <footer class="footer">
        <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
        
        <div class="footer__social-links">
          ${[...SOCIAL_GROUPS].map(({name, link, shortName}) => {
            return `<a href="${link}" class="social-link social-link--${shortName}">${name}</a>`;
          }).join(``)}
        </div>
        
        <span class="footer__made-in">
          Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2017
        </span>
      </footer>
    `;
  }
}
