const commentsCount = ((list) => {
  if (typeof (list) === 'string') {
    return 0;
  }
  return list.length;
});

export default commentsCount;