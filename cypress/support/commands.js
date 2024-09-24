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
Cypress.Commands.add('loginivalid', (username_wrong, password_wrong) => {
    cy.get('#user-name').clear()
    cy.get('#user-name').type(username_wrong)

    cy.get('#password').clear()
    cy.get('#password').type(password_wrong)

    cy.contains('Login').click()
    //menggunakan class untuk memasukkan detail errror
})

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)

    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type(password)

    cy.get('input[name="submit"]').click()
})
Cypress.Commands.add('logout', () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.contains('username').click()
    cy.get('#logout_link').click()

})
Cypress.Commands.add('loginsc', (standard_user, secret_sauce) => {
    cy.get('#user-name').clear()
    cy.get('#user-name').type(standard_user)


    cy.get('#password').clear()
    cy.get('#password').type(secret_sauce)
    ///mengotomatisasikan login button
    cy.contains('Login').click()
});

Cypress.Commands.add('buyer', (Nurul, Putri) => {
    cy.get('#first-name').clear()
    cy.get('#first-name').type(Nurul)
    cy.get('#last-name').clear()
    cy.get('#last-name').type(Putri)


    cy.get('#postal-code').clear()
    cy.get('#postal-code').type(15512)
    ///mengotomatisasikan login button
    cy.get('#continue').click()
})