import commentsPopup from './showComments.js';
import { sendLike, getLike } from './like.js';

const url = 'https://api.quran.com/api/v4/chapters?language=en';

async function getLoc() {
  const response = await fetch(url);
  const data = await response.json();
  const { chapters } = data;
  const likeOnApi = await getLike();

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
    const likeCount = document.createElement('p');
    likeOnApi.forEach((item) => {
      if (item.item_id === chapters[i].id) {
        likeCount.textContent = item.likes;
      }
    });
    likeCount.textContent = likeCount.textContent || 0;
    div.append(likeCount);
    const likeButton = document.createElement('input');
    likeButton.type = 'checkbox';
    likeButton.addEventListener('change', () => {
      sendLike(chapters[i].id);
      likeCount.textContent = parseInt(likeCount.textContent, 10) + 1;
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
