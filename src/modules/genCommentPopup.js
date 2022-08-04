import { getComments } from './commentsMethods.js';

const commentsList = (list) => {
  const commentsUl = document.createElement('ul');
  list.forEach((item) => {
    const commentLi = document.createElement('span');
    commentLi.textContent = `${item.creation_date} by ${item.username}: ${item.comment}`;
    commentsUl.appendChild(commentLi);
  });
  return commentsUl;
};

const cardGenerator = async (chapter, container) => {
  const surah = await chapter;
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
  const commentsUl = commentsList(comments);
  card.append(closeIcon, nameSimple, nameArabic, nameComplex, revelationOrder);
  card.append(versesCount, revelationPlace, bismillahPre);
  card.append(commentsUl);
  container.appendChild(card);
};

export default cardGenerator;