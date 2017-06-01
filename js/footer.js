import {
  SOCIAL_GROUPS,
  ESTABLISH_YEAR
} from './constants';

export default `
  <footer class="footer">
    <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
    
    <div class="footer__social-links">
      ${[...SOCIAL_GROUPS].map(({name, link, shortName}) => {
        return `<a href="${link}" class="social-link social-link--${shortName}">${name}</a>`;
      }).join(``)}
    </div>
    
    <span class="footer__made-in">
      Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; ${ESTABLISH_YEAR}
    </span>
  </footer>
`;
