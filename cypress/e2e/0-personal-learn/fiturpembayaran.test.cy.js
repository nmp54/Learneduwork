/// <reference types="cypress" />

describe('Fitur pembayaran', () => {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
        cy.url().should('include', 'login.html')
    });

    it('Should try to login', () => {
        cy.fixture('user').then((user) => {
            const username = user.username_zero
            const password = user.password_zero
            cy.login(username, password)

        })
    })
    it('Pay bills', () => {
        cy.get('#pay_bills_tab').click()
    });

    it('Make payments to your saved payees', () => {
        cy.payment()
    });
})
