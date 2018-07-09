describe('Verify Email', function() {

    it('Init test database', function() {
        cy.exec('yarn pretest');
    });

    it('Test invalid hashes', function() {
        // no hash
        cy.visit('/register/confirm');
        cy.get('h1').should('contain', 'Failed');

        // no hash too short
        cy.visit('/register/confirm/abc');
        cy.get('h1').should('contain', 'Failed');

        // invalid hash
        cy.visit('/register/confirm/abcdefghijklmnopqrstuvwxyz');
        cy.get('h1').should('contain', 'Failed');
    });

    it('Test valid hash', function() {
        // valid hash
        cy.visit('/register/confirm/1234567890123456789012345');
        cy.get('h1').should('contain', 'Confirmed');
        cy.get('.button').should('exist').click();

        //should redirect
        cy.url().should('include', 'login');

    });
});
