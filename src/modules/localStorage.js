const inStorage = (itemId) => {
  const currentStorage = JSON.parse(localStorage.getItem('likes')) || [];
  if (currentStorage.includes(itemId)) {
    return true;
  }
  currentStorage.push(itemId);
  localStorage.setItem('likes', JSON.stringify(currentStorage));
  return false;
};

export default inStorage;