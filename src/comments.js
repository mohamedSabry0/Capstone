// const alFatihah = {"id":1,
// "revelation_place":"makkah",
// "revelation_order":5,
// "bismillah_pre":false,
// "name_simple":"Al-Fatihah",
// "name_complex":"Al-Fātiĥah",
// "name_arabic":"الفاتحة",
// "verses_count":7,
// "pages":[1,1],
// "translated_name":{
//   "language_name":"english",
//   "name":"The Opener"
// }}

const getSurah = async (id) => {
  const surahURL = `https://api.quran.com/api/v4/chapters/${id}`;
  const surah = await fetch(surahURL);
  return surah;
}

const cardGenerator = (surah, container) => {
  const card = document.createElement('div');
  card.classList.add('comments-card');
  const closeIcon = document.createElement('button');
  closeIcon.classList.add('close-btn');
  const revelationPlace = document.createElement('span');
  const revelationOrder = document.createElement('span');
  const bismillahPre    = document.createElement('span');
  const nameSimple      = document.createElement('span');
  const nameComplex     = document.createElement('span');
  const nameArabic      = document.createElement('span');
  const versesCount     = document.createElement('span');
  revelationOrder.textContent = `revelation order: ${surah.revelation_order}`;
  revelationPlace.textContent = `revelation place: ${surah.revelation_place}`;
  bismillahPre.textContent = 'bismillah before Recommended?';
  bismillahPre.textContent += surah.bismillah_pre ? 'yes' : 'should not say';
  nameArabic.textContent = `Name in Arabic: ${surah.name_arabic}`;
  nameSimple.textContent = `Name in English: ${surah.name_simple}`;
  versesCount.textContent = `Verses count ${surah.verses_count}`;
  card.append(closeIcon, nameSimple, nameArabic, nameComplex, revelationOrder);
  card.append(versesCount, revelationPlace, bismillahPre)

  container.appendChild(card);
}

const commentsPopup = {

  handleEvent(event) {
    const parentElemId = event.target.parentElement.id;
    cardGenerator(getSurah(parentElemId), parentElem);
  }

}


class CommentsHandler {
  constructor(surah = alFatihah) {
    this.surah = surah;
  }

  handleEvent(event) {
    this.cardGenerator(this.surah, event.target);
  }

  cardGenerator(surah, target) {
    const card = document.createElement('div');
    card.classList.add('comments-card');
    const closeIcon = document.createElement('button');
    closeIcon.classList.add('close-btn');
    const revelationPlace = document.createElement('span');
    const revelationOrder = document.createElement('span');
    const bismillahPre    = document.createElement('span');
    const nameSimple      = document.createElement('span');
    const nameComplex     = document.createElement('span');
    const nameArabic      = document.createElement('span');
    const versesCount     = document.createElement('span');
    revelationOrder.textContent = `revelation order: ${surah.revelation_order}`;
    revelationPlace.textContent = `revelation place: ${surah.revelation_place}`;
    bismillahPre.textContent = 'bismillah before Recommended?';
    bismillahPre.textContent += surah.bismillah_pre ? 'yes' : 'should not say';
    nameArabic.textContent = `Name in Arabic: ${surah.name_arabic}`;
    nameSimple.textContent = `Name in English: ${surah.name_simple}`;
    versesCount.textContent = `Verses count ${surah.verses_count}`;
    card.append(closeIcon, nameSimple, nameArabic, nameComplex, revelationOrder);
    card.append(versesCount, revelationPlace, bismillahPre)

    target.appendChild(card);
  }
}

export default commentsPopup;