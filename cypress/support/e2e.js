// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
Cypress.Commands.add('loginViaAPI', () => {
    const email = Cypress.env('admin'),
        password = Cypress.env('admin')

    cy.request('POST', `${Cypress.env('apiUrl')}/users/login`, {
        username: email,
        password,
    }).then((response) => {
        cy.setCookie('sessionId', response.body.sessionId)
        cy.setCookie('userId', response.body.userId)
        cy.setCookie('userName', response.body.userName)
        cy.visit('https://the-internet.herokuapp.com/basic_auth')
    })
})

// Alternatively you can use CommonJS syntax:
// require('./commands')