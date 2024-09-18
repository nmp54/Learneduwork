/// <reference types="cypress" />

describe('Login with Valid Credentials', () => {
    it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'saucedemo')

    });

    it('Should fill username', () => {
        cy.get('#user-name').clear()
        cy.get('#user-name').type('standard_user')
    });
    it('Should fill password', () => {
        cy.get('#password').clear()
        cy.get('#password').type('password')

    });
    it('Should try to login', () => {
        cy.fixture('user').then((user) => {
            const username = user.username
            const password = user.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)

            cy.get('#password').clear()
            cy.get('#password').type(password)

            cy.contains('Login').click()

        })
    })
})