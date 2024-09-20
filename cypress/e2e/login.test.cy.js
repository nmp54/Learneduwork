/// <reference types="cypress" />

describe('Login/Logout Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get("#signin_button").click()
    });

    it('Should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type("invalid username")
        cy.get('#user_password').type('invalid password')
        cy.get('input[name="submit"]').click()
    });

    it('Should display error massage', () => {
        cy.get('.alert-error').contains('Login and/or password are wrong.')
    });

    it('Should try to login application with valid data', () => {
        cy.fixture("user").then((user) => {
            const username = user.username
            const password = user.password
            cy.login(username, password)
            cy.get('h2').should('contain.text', 'Cash Accounts')
        })

    });

    it("Should logout from the application", () => {
        cy.logout()
        cy.get('h4').should('contain.text', 'Online Banking')
    });
})