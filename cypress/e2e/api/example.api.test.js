/// <reference types="cypress" />

it('API TEST - Validate Header', () => {
  // Makes an API request to the Pokemon API for the Pokemon with ID 25 (Pikachu)
  cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')

  // Retrieves the response stored as 'pokemon'
  cy.get('@pokemon')
    // Accesses the 'headers' part of the response
    .its('headers')
    // Specifically checks the 'content-type' header
    .its('content-type')
    // Asserts that the 'content-type' includes 'application/json; charset=utf-8'
    .should('include', 'application/json; charset=utf-8')
})
