describe('Delete User', () => {
    it('Successfully deleted user', () => {
        cy.request('DELETE', 'https://reqres.in/api/users/2').then((response) => {
            // Memastikan status kode yang diterima adalah 204
            expect(response.status).to.equal(204);

            // Memastikan header "content-length" adalah '0'
            expect(response.headers['content-length']).to.equal('0');

            // Memastikan header "connection" adalah 'keep-alive'
            expect(response.headers['connection']).to.equal('keep-alive');

            // Memastikan header "x-powered-by" adalah 'Express'
            expect(response.headers['x-powered-by']).to.equal('Express');

            // Memastikan waktu respons kurang dari 700 ms
            cy.log(`Response time: ${response.duration} ms`);
            expect(response.duration).to.be.lessThan(700);
        });
    });
});
