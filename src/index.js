import './style.scss';
import { getLoc } from './modules/displayList';
import { getLike } from './modules/like.js';

window.addEventListener('DOMContentLoaded', async () => {
  getLoc();
});

window.addEventListener('DOMContentLoaded', async () => {
  console.log(getLike());
});
