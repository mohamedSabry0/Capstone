import CommentsHandler from './comments';
import './style.scss';

const commentsHandler = new CommentsHandler();

function component() {
  const element = document.createElement('div');

  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());

document.body.addEventListener('click', commentsHandler)