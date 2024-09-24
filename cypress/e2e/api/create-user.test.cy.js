describe('Create New User', () => {
    it('Successfully create new user', () => {
        var user = {
            "name": "Eduwork",
            "job": "Education"
        }
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201); // Cek apakah statusnya 201 (Created)
            cy.log(response.body); // Log untuk melihat respons body

            expect(response.body.name).equal('Eduwork');
            expect(response.body.job).equal('Education');

        })
    });
})

