/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I visit the home page', () => {
  cy.visit ('https://qauto.forstudy.space/' , {
    auth: {
       username: 'guest',
       password: 'welcome2qauto' ,
   },
    })
});

Then('I should see 5 social media icons', () => {
  cy.get('div.socials').should('have.length', 5);
});

When('I click on Sign Up', () => {
  cy.get('button.btn-primary').click();
});

Then('I should see the registration form', () => {
  cy.get('.registration-form').should('be.visible');
});

When('I click on Sign In', () => {
  cy.get('button.header_signin').click();
});

Then('I should see the login form', () => {
  cy.get('.login-form').should('be.visible');
});