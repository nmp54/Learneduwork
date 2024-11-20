/// <reference types="cypress" />

// Test case for logging in with an incorrect username and password
describe('Login with Wrong Password', () => {
    // Visit the Saucedemo website
    it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'saucedemo')
    });

    // Input an incorrect username using the username ID
    it('Should fill incorrect username', () => {
        cy.get('#user-name').clear()
        cy.get('#user-name').type('username')
    });

    // Input an incorrect password using the password ID
    it('Should fill incorrect password', () => {
        cy.get('#password').clear()
        cy.get('#password').type('password')
    });

    // Use fixture data to input an incorrect username and password
    it('Should try to login with incorrect credentials', () => {
        cy.fixture('user').then((user) => {
            // Use variables from the fixture file for incorrect credentials
            const username = user.username_wrong
            const password = user.password_wrong

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)

            cy.get('#password').clear()
            cy.get('#password').type(password)

            // Click the login button
            cy.contains('Login').click()

            // Verify the error message using its class
            cy.get('.error-message-container').contains('Epic sadface: Username and password do not match any user in this service')
        })
    })
})
