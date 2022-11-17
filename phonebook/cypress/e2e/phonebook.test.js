/// <reference types="cypress" />

describe('Тестируем телефонный справочник', () => {
beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/'); // проверяет посещаемость сайта
})
    it('Открыть модальное окно', () => {
        cy.get('.js-add').click();   // проверяем открытие модального окна
        cy.get('.form-owerlay').should('have.class', 'is-visible');
        // should проверяет имеет ли элемент указанный класс
    });

    it('Добавить контакт', () => {
        cy.get('.js-add').click(); 
        cy.get('[name="name"]').type('Иван');
        cy.get('[name="surname"]').type('Петров');
        cy.get('[name="phone"]').type('8999995511');
        cy.get('form').get('[type="submit"]').click();
        cy.get('tbody').get('.contact').should('contain.html',
        '<td class="delete"><button class="del-icon" data-phone="8999995511"></button></td><td>Иван</td><td>Петров</td><td><a href="tel:8999995511">8999995511</td>' );
    });

});