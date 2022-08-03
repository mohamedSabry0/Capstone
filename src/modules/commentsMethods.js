const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ypC1aUu3q5JApTEBlsFl/';

const postComment = async (comment) => {
  fetch(`${url}comments`, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((bd) => bd.error.message);
};

const getComments = async (id) => {
  const comments = await fetch(`${url}comments?item_id=${id}`)
    .then((res) => {
      if (res.status === 400) {
        throw new Error('comments not found');
      }
      return res.json();
    })
    .catch((err) => err.message);

  return comments;
};

export {
  getComments,
  postComment,
};