export default class AbstractView {

  static createElement(html) {
    const template = document.createElement(`template`);
    template.innerHTML = html;
    return template.content;
  }

  get template() {
    throw new Error(`You should provide a template`);
  }

  render() {
    return AbstractView.createElement(this.template);
  }

  bind() {

  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }
}
