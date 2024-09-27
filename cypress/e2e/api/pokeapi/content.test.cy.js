describe('Validate Content', () => {
    it('Successfully validate content', () => {
        var abilities = [
            {
                ability: {
                    name: "limber",
                    url: "https://pokeapi.co/api/v2/ability/7/"
                }
            }
        ];

        // Request API dan simpan response sebagai alias "ability"
        cy.request('https://pokeapi.co/api/v2/ability/7/').as('ability')

        // Validasi bahwa respons body dari request API menyertakan "limber"
        cy.get("@ability").its('body').should('include', { name: "limber" })
    });
});
