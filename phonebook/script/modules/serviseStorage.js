
export const getStorage = (key) => (localStorage.getItem(key) ?
    JSON.parse(localStorage.getItem(key)) : []);

const setStorage = (key, obj) => {
  const data = getStorage(key);
  data.push(obj);
  console.log(data);
  localStorage.setItem(key, JSON.stringify(data));
};


export const removeStorage = (number) => {
  const k = getStorage('storageData');
  k.forEach(el => {
    for (const key in el) {
      if (el[key] === number) {
        const index = k.indexOf(el);
        k.splice(index, 1);
        console.log(k);
        setStorage(k);
      }
    }
  });
};

export const addContactData = (contact) => {
  getStorage('storageData');
  setStorage('storageData', contact);
};


