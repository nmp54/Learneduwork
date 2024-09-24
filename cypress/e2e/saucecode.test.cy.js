/// <reference types="cypress" />

describe('Login with Wrong Password', () => {
    it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'saucedemo')

    });
    it('Should try to login invalid', () => {
        cy.fixture('user').then((user) => {
            //memakai method untuk dapat mengimplementasikan username dan password nya
            const username = user.username_wrong
            const password = user.password_wrong
            cy.loginivalid(username, password)
            cy.get('.error-message-container').contains('Epic sadface: Username and password do not match any user in this service')
            cy.get('.error-message-container').should('be.visible')
        })
    })
});
describe('Login with Valid Credentials', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'saucedemo')
    })
    it('Should try to login', () => {
        cy.fixture('user').then((user) => {
            //buat method agar bisa di implementasikan
            const username = user.username_saucedemo
            const password = user.password_saucedemo

            cy.loginsc(username, password)
            cy.get('.header_secondary_container').should('be.visible')
        })
    })
    it('Filter Product', () => {
        cy.get('.product_sort_container').select('Name (Z to A)')
        cy.get('.inventory_item_name ').should('be.visible')
    })
});
describe('Add and Remove Product Into the Cart,', () => {
    //menambahkan produk menggunakan id untuk mengklik card dan  untuk mengklik keranjang
    it('Add product to cart', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();
        cy.get('.cart_desc_label').should('have.text', 'Description')

    });
    //menghapus produk dari keranjang menggunakan id
    it('Removing Products from Cart', () => {
        cy.get('#remove-sauce-labs-backpack').click();
        cy.get('#page_wrapper').should('be.visible')
    });
});
describe('Checkout Shopping', () => {
    //balik ke halaman /invetory untuk add produk
    it('Continue Shopping', () => {
        cy.contains('Continue Shopping').click()
        cy.get('.inventory_item_name').should('be.visible')
    });
    it('Add product to cart', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();
        cy.get('.cart_desc_label').should('have.text', 'Description')
    });
    it('Checkout Product', () => {
        cy.get('#checkout').click()
        cy.get('#checkout_info_container').should('be.visible')
    });
    it('Checkout Information', () => {
        cy.fixture('user').then((user) => {
            //buat method agar bisa di implementasikan
            const firstname = user.firstname
            const lastname = user.lastname
            const postalcode = user.postalcode
            cy.buyer(firstname, lastname, postalcode)
            cy.get('.header_secondary_container').should('be.visible')
        })
    });
    it('Finish Shopping', () => {
        cy.get('#finish').click()
        cy.get('h2').should('have.text', 'Thank you for your order!')
    });
});
//menggunakan id untuk mengklik menu agar di logout
describe('Log out of the web app', () => {
    it('Log out of the web app', () => {
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
        cy.get('#root').should('be.visible')
    });
})