import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the Login Page', () => {
  cy.visit ('https://qauto.forstudy.space/' , {
    auth: {
       username: 'guest',
       password: 'welcome2qauto' ,
   },
    })
});

Then('I expect to be 5 icons of social networks are present', () => {
  cy.get('span.socials_icon').should('have.length', 5);
});

When('I click on Sign Up', () => {
  cy.get('.hero-descriptor_btn').click();
});

Then('I should see the registration form', () => {
  cy.get('.modal-header').invoke('text').should('eq', 'Registration×');
});

When('I click on Sign In', () => {
  cy.get('.header_right > .btn').click();
})

Then('I should see the login form', () => {
  cy.get('.modal-header').invoke('text').should('eq', 'Log in×');
});
