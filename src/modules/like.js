const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Y73PjagOn0PIaLwLW8ue/likes/';

export async function sendLike(id) {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
}

export async function getLike() {
  const likesCount = await fetch(url);
  const likeArr = await likesCount.json();
  return likeArr;
}
