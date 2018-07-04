describe('Register', function() {

    it('Test register container', function() {
        cy.visit('/register');
        // we expect a form
        cy.get('form').should('exist');
        // it has email field
        cy.get('form').find('input[type=email]').should('exist').clear();
        // it has password field
        cy.get('form').find('input[type=password]').should('exist').clear();
        // button should exist and be enabled because initial state
        cy.get('form').find('[type=submit]').should('exist')
            .should('be.enabled');
        // input field works
        cy.get('input[type=email]')
            .type('fake@email.com').should('have.value', 'fake@email.com');
        // button should now be disabled
        cy.get('form').find('[type=submit]').should('be.disabled');

        // password field works
        cy.get('input[type=password]')
            .type('password').should('have.value', 'password');
        // button should now be enabled
        cy.get('form').find('[type=submit]').should('be.enabled');

        // test validation
        // invalid email
        cy.get('input[type=email]').clear().type('bademail');
        cy.get('input[type=password]').clear().type('validpassword');
        // button should be disabled
        cy.get('form').find('[type=submit]').should('be.disabled');
        // invalid password
        cy.get('input[type=email]').clear().type('goodemail@test.com');
        cy.get('input[type=password]').clear().type('pw');
        // button should be disabled
        cy.get('form').find('[type=submit]').should('be.disabled');

        // valid inputs email
        cy.get('input[type=email]').clear().type('test1@test.com');
        cy.get('input[type=password]').clear().type('validpassword');
        // button should be enabled
        cy.get('form').find('[type=submit]').should('be.enabled');

        // submit field
        cy.get('form').find('[type=submit]').click();

        // check if view changed
        cy.get('h1').should('contain', 'Almost done');

        // do test again with same details, should give error
        cy.visit('/register');
        cy.get('input[type=email]').clear().type('test1@test.com');
        cy.get('input[type=password]').clear().type('validpassword');
        cy.get('form').find('[type=submit]').click();
        cy.get('.noty_layout .noty_type__error').should('exist');

    });


/*
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
    */

});