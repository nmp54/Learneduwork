/// <reference types="cypress" />

describe('Browser actions', () => {
    it('Should load correct url', () => {
        cy.visit('https://example.com/', { timeout: 20000 })
    });

    it('Should load correct url', () => {
        cy.url().should('include', 'example.com')
    });

    it('Should check for correct element on the page', () => {
        cy.get('h1').should('be.visible')
    })
});