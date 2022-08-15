import * as createElem from './createElements.js';

export const renderPhoneBook = (app, title) => {
  const header = createElem.createHeader();
  const logo = createElem.createLogo(title);
  const main = createElem.createMain();
  const buttonGroup = createElem.createButtonsGroup([
    {
      className: 'btn btn-primary mr-3',
      type: 'button',
      text: 'Добавить',
    },
    {
      className: 'btn btn-danger',
      type: 'button',
      text: 'Удалить',
    },
  ]);

  const table = createElem.createTable();
  const {form, overlay} = createElem.createForm();
  const footer = createElem.createFooter(title);
  header.headerContainer.append(logo);
  main.mainContainer.append(buttonGroup.btnWrapper, table, overlay);
  app.append(header, main, footer);

  return {
    logo,
    list: table.tbody,
    btnAdd: buttonGroup.btns[0],
    btnDel: buttonGroup.btns[1],
    formOverlay: overlay,
    form,
  };
};

export const renderContacts = (elem, data) => {
  const allRow = data.map(createElem.createRow);
  elem.append(...allRow);
  return allRow;
};

export default {
  renderPhoneBook,
  renderContacts,
};
