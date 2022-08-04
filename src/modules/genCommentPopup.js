import genCommentLi from './commentItem.js';
import { getComments } from './commentsMethods.js';
import commentForm from './newComment.js';

const commentsList = (parent, list) => {
  const commentsUl = parent.querySelector('ul');
  console.log(typeof (list));
  if (typeof (list) === 'string') {
    const message = document.createElement('li');
    message.textContent = list;
    commentsUl.appendChild(message);
    return commentsUl;
  }

  list.forEach((item) => commentsUl.appendChild(genCommentLi(item)));
  return commentsUl;
};

const cardGenerator = async (chapter, container) => {
  const surah = await chapter;
  const commentsUl = document.createElement('ul');
  const card = document.createElement('div');
  card.classList.add('comments-card');
  const closeIcon = document.createElement('button');
  closeIcon.classList.add('close-btn');
  closeIcon.addEventListener('click', (e) => {
    e.target.parentElement.remove();
  });

  const revelationPlace = document.createElement('span');
  const revelationOrder = document.createElement('span');
  const bismillahPre = document.createElement('span');
  const nameSimple = document.createElement('span');
  const nameComplex = document.createElement('span');
  const nameArabic = document.createElement('span');
  const versesCount = document.createElement('span');
  revelationOrder.textContent = `revelation order: ${surah.revelation_order}`;
  revelationPlace.textContent = `revelation place: ${surah.revelation_place}`;
  bismillahPre.textContent = 'bismillah before Recommended? ';
  bismillahPre.textContent += surah.bismillah_pre ? 'yes' : 'should not say';
  nameArabic.textContent = `Name in Arabic: ${surah.name_arabic}`;
  nameSimple.textContent = `Name in English: ${surah.name_simple}`;
  versesCount.textContent = `Verses count ${surah.verses_count}`;

  const comments = await getComments(surah.id);

  card.append(closeIcon, nameSimple, nameArabic, nameComplex, revelationOrder);
  card.append(versesCount, revelationPlace, bismillahPre);
  card.append(commentsUl);
  commentsList(card, comments);
  card.append(...commentForm());
  container.appendChild(card);
};

export default cardGenerator;
