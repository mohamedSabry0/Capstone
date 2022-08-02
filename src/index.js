import commentsPopup from './comments.js';
import './style.scss';

function component() {
  const element = document.createElement('div');

  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());

document.body.addEventListener('click', commentsPopup);