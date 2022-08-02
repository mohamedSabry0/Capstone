const getSurah = async (id) => {
  const surahURL = `https://api.quran.com/api/v4/chapters/${id}`;
  const { chapter } = await fetch(surahURL)
    .then((res) => res.json());

  return chapter;
};

const closePopup = {
  handleEvent(event) {
    event.target.parentElement.remove();
  },
};

const cardGenerator = async (chapter, container) => {
  const surah = await chapter;
  const card = document.createElement('div');
  card.classList.add('comments-card');
  const closeIcon = document.createElement('button');
  closeIcon.classList.add('close-btn');
  closeIcon.addEventListener('click', closePopup);

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
  card.append(closeIcon, nameSimple, nameArabic, nameComplex, revelationOrder);
  card.append(versesCount, revelationPlace, bismillahPre);

  container.appendChild(card);
};

const commentsPopup = {
  handleEvent(event) {
    const parentElem = event.target.parentElement;
    cardGenerator(getSurah(parentElem.id), parentElem);
  },
};

export default commentsPopup;