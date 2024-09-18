/// <reference types="cypress" />
///melakukan login dengan username dan password yang salah
describe('Login with Wrong Password', () => {
    it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'saucedemo')

    });
    ///menggunakan id untuk memasukkan username password yang salah
    it('Should fill username wrong', () => {
        cy.get('#user-name').clear()
        cy.get('#user-name').type('username')
    });
    ///menggunakan id untuk memasukkan password yang salah
    it('Should fill password wrong', () => {
        cy.get('#password').clear()
        cy.get('#password').type('password')

    });
    //menggunakan fixture untuk memasukkan username dan password 
    it('Should try to login', () => {
        cy.fixture('user').then((user) => {
            ///memakai method untuk dapat mengimplementasikan username dan password nya
            const username = user.username_wrong
            const password = user.password_wrong

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)

            cy.get('#password').clear()
            cy.get('#password').type(password)

            cy.contains('Login').click()
            //menggunakan class untuk memasukkan detail errror
            cy.get('.error-message-container').contains('Epic sadface: Username and password do not match any user in this service')
        })
    })
})