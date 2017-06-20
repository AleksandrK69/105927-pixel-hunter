const containerNode = document.querySelector(`main.central`);

export default function renderScreen(view) {
  containerNode.innerHTML = ``;
  containerNode.appendChild(view.element);
}
