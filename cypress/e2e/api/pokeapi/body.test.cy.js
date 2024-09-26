describe('Validate Body', () => {
    it('should validate the response body successfully', () => {
        cy.request('GET', "https://pokeapi.co/api/v2/pokemon/ditto").as("pokemon")
            .then((response) => {
                // Validate is_hidden of the second ability
                expect(response.body.abilities[1].is_hidden).to.equal(true);

                // Validate base_experience
                expect(response.body.base_experience).to.equal(101);

                // Validate the name of the first form
                expect(response.body.forms[0].name).to.equal("ditto");

                // Validate the version name of the first game_indices
                expect(response.body.game_indices[0].version.name).to.equal("red");

                // Validate height
                expect(response.body.height).to.equal(3);

                // Validate the item name of the first held_items
                expect(response.body.held_items[0].item.name).to.equal("metal-powder");

                // Validate id
                expect(response.body.id).to.equal(132);

                // Validate is_default
                expect(response.body.is_default).to.equal(true);

                //Validate the effort of the first stats
                expect(response.body.stats[1].effort).to.equal(0);

                //Validate the name type of the first types
                expect(response.body.types[0].slot).to.equal(1);

                //Validate weight
                expect(response.body.weight).to.equal(40)
            });
    });
});
