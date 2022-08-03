import './style.scss';
import getLoc from './modules/displayList.js';
import { getLike } from './modules/like.js';

window.addEventListener('DOMContentLoaded', async () => {
  getLoc();
});

window.addEventListener('DOMContentLoaded', async () => {
  console.log(getLike());
});
