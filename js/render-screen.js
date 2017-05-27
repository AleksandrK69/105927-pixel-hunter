const containerNode = document.querySelector(`main.central`);

export default function renderScreen(screenNode) {
  containerNode.innerHTML = ``;
  containerNode.appendChild(screenNode);
}
