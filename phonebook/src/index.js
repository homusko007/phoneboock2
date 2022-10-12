import {getStorage} from './script/serviseStorage';
import render from './script/render';
import {modalControl, deleteControl, formControl} from './script/control';

import './scss/index.scss';

const {renderPhoneBook, renderContacts} = render;

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

