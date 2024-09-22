/// <reference types="cypress" />
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor")

Given("I am on the web application homepage", () => {
    cy.visit("http://zero.webappsecurity.com/index.html")
    cy.url().should('include', 'index.html')
    cy.get("#homeMenu").should("be.visible")
});

When("I click on the search feature", () => {
    cy.get("#searchTerm").click()
    cy.get('#searchTerm').type('Online{enter}')
});

Then("I should see the search results", () => {
    cy.get('a').contains('Zero - Free Access to Online Banking')
    cy.get('a').should('be.visible')
});
