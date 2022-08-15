import {getStorage} from './modules/serviseStorage.js';
import render from './modules/render.js';
import {modalControl, deleteControl, formControl} from './modules/control.js';

const {renderPhoneBook, renderContacts} = render;
//const {modalControl, deleteControl, formControl} = control;

const init = (selectorApp, title) => {
  const app = document.querySelector(selectorApp);
  const data = getStorage();

  const {
    list,
    logo,
    btnAdd,
    formOverlay,
    form,
    btnDel,
  } = renderPhoneBook(app, title);

  const allRow = renderContacts(list, data);
  const {closeModal} = modalControl(btnAdd, formOverlay);

  deleteControl(btnDel, list);
  formControl(form, list, closeModal);
};

window.phoneBookInit = init;

