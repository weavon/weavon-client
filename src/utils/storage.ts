const storage = (() => {
  const setData = (key: string, value: object) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getData = (key: string) => {
    const foundItem = localStorage.getItem(key);
    if (foundItem) {
      return JSON.parse(foundItem);
    }
  };

  const removeData = (key: string) => {
    localStorage.removeItem(key);
  };

  return {
    setData,
    getData,
    removeData,
  };
})();

export default storage;
