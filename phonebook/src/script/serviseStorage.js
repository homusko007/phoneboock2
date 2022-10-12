export const getStorage = () => (localStorage.getItem('storageData') ?
JSON.parse(localStorage.getItem('storageData')) : []);

const setStorage = (data) => {
  localStorage.setItem('storageData', JSON.stringify(data));
};

export const addContactData = (contact) => {
  const data = getStorage('storageData');
  data.push(contact);
  setStorage(data);
};

export const removeStorage = (number) => {
  const data = getStorage('storageData');
  const newData = data.filter(el => el.phone !== number);
  setStorage(newData);
};
