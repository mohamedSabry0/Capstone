const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Y73PjagOn0PIaLwLW8ue/';

const postComment = (comment) => {
  console.info('sending comment...', 'loading...');
  return fetch(`${url}comments`, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.text())
    .then((body) => body);
};

const getComments = (id) => {
  console.info('retriving comments', '...loading');
  return fetch(`${url}comments?item_id=${id}`)
    .then((response) => {
      if (response.status !== 400) {
        const value = response.json();
        return Promise.resolve(value);
      }
      return Promise.reject(new Error('No Comments'));
    })
    .catch((error) => error.message)
    .then((json) => json);
};

export {
  getComments,
  postComment,
};