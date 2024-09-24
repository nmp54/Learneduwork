describe('Get user list', () => {
    it('Verify the list users will display', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users"
        }).as("users")
        cy.get("@users").its("status").should("equal", 200)
    });
    ;
})
