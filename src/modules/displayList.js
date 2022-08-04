import commentsPopup from './comments.js';
import { sendLike, getLike } from './like.js';

const url = 'https://api.quran.com/api/v4/chapters?language=en';

export const totalItems = (cards) => {
    let counter = 0;
    for (let i = 0; i < cards.length; i += 1) {
      counter += 1;
    }
    return counter;
  };

export async function getLoc() {
  const response = await fetch(url);
  const data = await response.json();
  const { chapters } = data;
  const likeOnApi = await getLike();
  const cardsCount = chapters.length;
  console.log(cardsCount);


  console.log(totalItems(chapters));

  const itemsCounter = document.createElement('span');
  const nav = document.querySelector('.nav');
  nav.append(itemsCounter);
  itemsCounter.textContent = totalItems(chapters);

  const mainSection = document.querySelector('.main-section');

  for (let i = 0; i < chapters.length; i += 1) {

    const div = document.createElement('div');
    div.classList.add('card')
    mainSection.append(div);

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image-quran');
    div.append(imageDiv);

    const title = document.createElement('p');
    title.classList.add('heading');
    div.id = chapters[i].id;
    div.append(title);
    title.textContent = `${chapters[i].name_simple}`;

    const arabicName = document.createElement('p');
    arabicName.classList.add('heading');
    div.append(arabicName);
    arabicName.textContent = `${chapters[i].name_arabic}`;

    const likeComment = document.createElement('div');
    likeComment.classList.add('likeComment-holder');
    div.append(likeComment);

    const resButton = document.createElement('button');
    resButton.setAttribute('type', 'submit');
    resButton.textContent = 'Comments';
    resButton.addEventListener('click', commentsPopup);
    likeComment.append(resButton);

    const likeButton = document.createElement('input');
    likeButton.type = 'checkbox';
    likeButton.addEventListener('change', () => {
      sendLike(chapters[i].id);
      likeCount.textContent = parseInt(likeCount.textContent, 10) + 1;
    });
    likeComment.append(likeButton);

    const likeCount = document.createElement('p');
    likeOnApi.forEach((item) => {
      if (item.item_id === chapters[i].id) {
        likeCount.textContent = item.likes;
      }
    });
    likeCount.textContent = likeCount.textContent || 0;
    likeComment.append(likeCount);

  }
}
