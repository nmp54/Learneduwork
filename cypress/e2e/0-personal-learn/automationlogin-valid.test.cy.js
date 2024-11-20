/// <reference types="cypress" />
describe('Login with Valid Credentials', () => {
    // Visit the Saucedemo website
    it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'saucedemo')
    });

    // Input valid username by targeting the username ID
    it('Should fill username', () => {
        cy.get('#user-name').clear()
        cy.get('#user-name').type('standard_user')
    });

    // Input valid password by targeting the password ID
    it('Should fill password', () => {
        cy.get('#password').clear()
        cy.get('#password').type('secret_sauce')
    });

    // Use fixture to automate login credentials from the fixture file
    it('Should try to login', () => {
        cy.fixture('user').then((user) => {
            // Create variables for fixture data
            const username = user.username
            const password = user.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)

            cy.get('#password').clear()
            cy.get('#password').type(password)
            // Automate clicking the login button
            cy.contains('Login').click()
        })
    })
});

// Add and remove products from the cart
describe('Add and Remove Product Into the Cart', () => {
    // Add a product using its ID and open the cart using the class selector
    it('Add product to cart', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();
    });

    // Remove a product from the cart using its ID
    it('Removing Products from Cart', () => {
        cy.get('#remove-sauce-labs-backpack').click();
    });
});

// Perform checkout operations
describe('Checkout Shopping', () => {
    // Return to the inventory page to add products
    it('Continue Shopping', () => {
        cy.get('#continue-shopping').click()
    });

    // Add a product to the cart and open the cart
    it('Add product to cart', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();
    });

    // Click the checkout button
    it('Checkout Product', () => {
        cy.get('#checkout').click()
    });

    // Fill in checkout information using data from a fixture file
    it('Checkout Information', () => {
        cy.fixture('user').then((user) => {
            // Create variables for fixture data
            const firstname = user.firstname
            const lastname = user.lastname
            const postalcode = user.postalcode

            cy.get('#first-name').clear()
            cy.get('#first-name').type(firstname)

            cy.get('#last-name').clear()
            cy.get('#last-name').type(lastname)

            cy.get('#postal-code').clear()
            cy.get('#postal-code').type(postalcode)
            // Automate clicking the continue button
            cy.get('#continue').click()
        })
    });

    // Use the finish button to complete the checkout process
    it('Finish Shopping', () => {
        cy.get('#finish').click()
    });
});

// Log out from the web app
describe('Log out of the web app', () => {
    it('Log out of the web app', () => {
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
    });
});
