/// <reference types="cypress" />
describe('Login with Valid Credentials', () => {
    ///memasukkan link website saucedemo
    it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'saucedemo')


    });
    ///mengambil id username dan menaruh username valid
    it('Should fill username', () => {
        cy.get('#user-name').clear()
        cy.get('#user-name').type('standard_user')
    });
    ///mengambil id password dan menaruh password valid
    it('Should fill password', () => {
        cy.get('#password').clear()
        cy.get('#password').type('secret_sauce')


    });
    ///memanfaatkan fixture untuk mengotomatisasi username dan password yang sudah dimasukkan di fixture dan dihubungkan
    it('Should try to login', () => {
        cy.fixture('user').then((user) => {
            ///buat method agar bisa di implementasikan
            const username = user.username
            const password = user.password


            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)


            cy.get('#password').clear()
            cy.get('#password').type(password)
            ///mengotomatisasikan login button
            cy.contains('Login').click()


        })
    })
})
///menambahkan dan menghapus produk dari keranjang
describe('Add and Remove Product Into the Cart,', () => {
    ///menambahkan produk menggunakan id untuk mengklik card dan class untuk mengklik keranjang
    it('Add product to cart', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();


    });
    ///menghapus produk dari keranjang menggunakan id
    it('Removing Products from Cart', () => {
        cy.get('#remove-sauce-labs-backpack').click();
    });
});
describe('Checkout Shopping', () => {
    ///balik ke halaman /invetory untuk add produk
    it('Continue Shopping', () => {
        cy.get('#continue-shopping').click()
    });
    it('Add product to cart', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();
    });
    it('Checkout Product', () => {
        cy.get('#checkout').click()


    });
    it('Checkout Information', () => {
        cy.fixture('user').then((user) => {
            ///buat method agar bisa di implementasikan
            const firstname = user.firstname
            const lastname = user.lastname
            const postalcode = user.postalcode


            cy.get('#first-name').clear()
            cy.get('#first-name').type(firstname)


            cy.get('#last-name').clear()
            cy.get('#last-name').type(lastname)


            cy.get('#postal-code').clear()
            cy.get('#postal-code').type(postalcode)
            ///mengotomatisasikan login button
            cy.get('#continue').click()


        })
    })
    ///menggunakan id di finish selanjutnya bisa mendapatkan tampilan pembelian sukses
    it('Finish Shopping', () => {
        cy.get('#finish').click()
    });
});
///menggunakan id untuk mengklik menu agar di logout
describe('Log out of the web app', () => {
    it('Log out of the web app', () => {
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
    });
})
