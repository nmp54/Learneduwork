describe('Basic Auth', () => {
    it('Successfully login by appending username and password in url', () => {
        cy.loginViaAPI()
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials')
    });
    it('Successfully login using headers', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            headers: {
                authorization: "Basic YWRtaW46YWRtaW4="
            },
            failOnStatusCode: false
        })
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials')
    });
})
