import genCommentLi from './commentItem.js';
import { postComment, getComments } from './commentsMethods.js';

const handlePostComment = {
  handleEvent(event) {
    const parent = event.target.parentElement.parentElement;
    const nameInput = parent.querySelector('input');
    const commentInput = parent.querySelector('textarea');
    const commentObj = {
      item_id: parseInt(parent.parentElement.id, 10),
      username: nameInput.value,
      comment: commentInput.value,
    };
    postComment(commentObj)
      .then(async () => {
        nameInput.value = '';
        commentInput.value = '';
        const ul = parent.querySelector('ul');

        const list = await getComments(parent.parentElement.id);
        ul.innerHTML = '';
        list.forEach((element) => {
          ul.appendChild(genCommentLi(element));
        });
      });
  },
};

const commentForm = () => {
  const nameInput = document.createElement('input');
  const commentInput = document.createElement('textarea');
  nameInput.classList.add('input');
  commentInput.classList.add('input');
  const commentButton = document.createElement('button');
  commentButton.classList.add('comment-btn');
  commentButton.type = 'submit';
  commentButton.textContent = 'Comment';
  commentButton.addEventListener('click', handlePostComment);
  return [nameInput, commentInput, commentButton];
};

export default commentForm;