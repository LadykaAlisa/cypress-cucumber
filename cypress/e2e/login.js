import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the Login Page', () => {
  cy.visit ('https://qauto.forstudy.space/' , {
    auth: {
       username: 'guest',
       password: 'welcome2qauto' ,
   },
    })
});

When('I click Sign In button', () => {
  cy.get('.header_signin').click();
})

When('I enter {string} username', (username) => {
  cy.get('#signinEmail').type(username);
})

When('I enter {string} password', (password) => {
  cy.get('#signinPassword').type(password);
})

When('I click Login button', () => {
  cy.get('.modal-footer > .btn-primary').click();
})

Then('I expect to be on Garage Page', () => {
  cy.get('h1').should('have.text', 'Garage')
})

Then('I expect to button Login be disabled', () => {
  cy.get('.modal-footer > .btn-primary').should('be.disabled');
})

Then('I expect to error message', () => {
  cy.get('.alert-danger').invoke('text').should('eq', 'Wrong email or password');
})