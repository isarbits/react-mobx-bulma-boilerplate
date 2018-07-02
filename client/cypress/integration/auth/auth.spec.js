describe('Login', function() {
    it('Test login container', function() {
        cy.visit('/login');
        // we expect a form
        cy.get('form').should('exist');
        // it has email field
        cy.get('form').find('input[type=email]').should('exist').clear();
        // it has password field
        cy.get('form').find('input[type=password]').should('exist').clear();
        // button should exist and be disabled because inputs are empty
        cy.get('form').find('[type=submit]').should('exist')
            .should('be.disabled');
        // input field works
        cy.get('input[type=email]')
            .type('fake@email.com').should('have.value', 'fake@email.com');
        // button should still be disabled
        cy.get('form').find('[type=submit]').should('be.disabled');

        // password field works
        cy.get('input[type=password]')
            .type('password').should('have.value', 'password');
        // button should now be enabled
        cy.get('form').find('[type=submit]').should('be.enabled');

        // test validation
        // invalid email
        cy.get('input[type=email]').clear().type('bademail');
        // button should now be disabled
        cy.get('form').find('[type=submit]').should('be.disabled');

        // test login itself

    });

    it('Test register container', function() {
        cy.visit('/register');
        // we expect a form
        cy.get('form').should('exist');

    });
})