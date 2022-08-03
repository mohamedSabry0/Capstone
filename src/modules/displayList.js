import commentsPopup from './comments.js';
import { sendLike } from './like.js';

const url = 'https://api.quran.com/api/v4/chapters?language=en';

async function getLoc() {
  const response = await fetch(url);
  const data = await response.json();
  const { chapters } = data;

  const mainSection = document.querySelector('.main-section');
  for (let i = 0; i < chapters.length; i += 1) {
    const div = document.createElement('div');
    mainSection.append(div);
    const title = document.createElement('h2');
    div.id = chapters[i].id;
    div.append(title);
    title.textContent = `${chapters[i].name_simple}`;
    const arabicName = document.createElement('h3');
    div.append(arabicName);
    arabicName.textContent = `${chapters[i].name_arabic}`;
    const likeButton = document.createElement('input');
    likeButton.type = 'checkbox';
    likeButton.addEventListener('change', () => {
      sendLike(chapters[i].id);
    });
    div.append(likeButton);
    const resButton = document.createElement('button');
    resButton.setAttribute('type', 'submit');
    resButton.textContent = 'Comments';
    resButton.addEventListener('click', commentsPopup);
    div.append(resButton);
  }
}

export default getLoc;
