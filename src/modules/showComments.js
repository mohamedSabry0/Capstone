import cardGenerator from './genCommentPopup.js';

const getSurah = async (id) => {
  const surahURL = `https://api.quran.com/api/v4/chapters/${id}`;
  const { chapter } = await fetch(surahURL)
    .then((res) => res.json());

  return chapter;
};

const commentsPopup = {
  handleEvent(event) {
    const parentElem = event.target.parentElement.parentElement;
    cardGenerator(getSurah(parentElem.id), parentElem);
  },
};

export {
  commentsPopup,
  getSurah,
};