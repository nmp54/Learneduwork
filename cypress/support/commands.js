// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)

    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type(password)

    cy.get('input[name="submit"]').click()
});

Cypress.Commands.add('payment', () => {
    // cy.clearCookies()
    // cy.clearLocalStorage()
    cy.get('#sp_payee').select('sprint')
    cy.get('#sp_account').select('1')

    cy.get('#sp_amount').clear()
    cy.get('#sp_amount').type('100000')

    cy.get('#sp_date').clear()
    cy.get('#sp_date').type('2024-09-19')

    cy.get('#sp_description').clear({ force: true }) // Membersihkan input deskripsi
        .type('Deskripsi Pembayaran', { force: true }); // Mengisi deskripsi

    cy.get('#pay_saved_payees').click();
    cy.get('#alert_content', { force: true }) // Timeout ditambahkan untuk menunggu hasil
        .should('be.visible')
        .and('contain', 'The payment was successfully submitted.');

})