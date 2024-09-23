import Homepage from "./login.page";
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("I am on the web application homepage", () => {
    Homepage.visit();
    cy.get("#homeMenu").should("be.visible");
});

When("I click on the search feature", () => {
    Homepage.search();
});

Then("I should see the search results", () => {
    cy.get('a').contains('Zero - Free Access to Online Banking');
    cy.get('a').should('be.visible');
});
