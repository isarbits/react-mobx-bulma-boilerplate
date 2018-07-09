describe('Register', function() {

    it('Init test database', function() {
        cy.exec('yarn pretest');
    });

    it('Test initial state', function() {
        cy.visit('/register');
        // we expect a form
        cy.get('form').should('exist');
        // it has email field
        cy.get('form').find('input[type=email]').should('exist').clear();
        // it has password field
        cy.get('form').find('input[type=password]').should('exist').clear();
        // button should exist and be disabled because fields are empty
        cy.get('form').find('[type=submit]').should('exist')
            .should('be.disabled');
        // input field works
        cy.get('input[type=email]')
            .type('fake@email.com').should('have.value', 'fake@email.com');
        // button should be disabled
        cy.get('form').find('[type=submit]').should('be.disabled');
        // password field works
        cy.get('input[type=password]')
            .type('password').should('have.value', 'password');
        // button should be enabled
        cy.get('form').find('[type=submit]').should('be.enabled');
    });

    it('Test validation', function() {
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
    });

    it('Submit valid data', function() {
        // valid inputs email
        cy.get('input[type=email]').clear().type('test1@test.com');
        cy.get('input[type=password]').clear().type('validpassword');
        // button should be enabled
        cy.get('form').find('[type=submit]').should('be.enabled');

        // submit field
        cy.get('form').find('[type=submit]').click();

        // check if view changed
        cy.get('h1').should('contain', 'Almost done');
    });

    it('Submit same data again', function() {
        // do test again with same details, should give error
        cy.visit('/register');
        cy.get('input[type=email]').clear().type('test1@test.com');
        cy.get('input[type=password]').clear().type('validpassword');
        cy.get('form').find('[type=submit]').click();
        cy.get('.noty_layout .noty_type__error').should('exist');
    });
});