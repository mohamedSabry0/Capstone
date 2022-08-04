const genCommentLi = (item) => {
  const commentLi = document.createElement('li');
  commentLi.textContent = `${item.creation_date} by ${item.username}: ${item.comment}`;
  return commentLi;
};

export default genCommentLi;