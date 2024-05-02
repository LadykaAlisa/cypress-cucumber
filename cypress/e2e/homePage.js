/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I visit the login page', () => {
  cy.visit('/login');
});

When('I login with correct email and password', () => {
  cy.get('#email').type('example@example.com');
  cy.get('#password').type('password123');
  cy.get('.login-button').click();
});

Then('I should be logged in', () => {
  cy.url().should('include', '/profile');
});

When('I login with empty fields', () => {
  // Не заповнюємо поля
  cy.get('.login-button').click();
});

Then('the Login button should be disabled', () => {
  cy.get('.login-button').should('be.disabled');
});

When('I login with non-existent email and password', () => {
  cy.get('#email').type('nonexistent@example.com');
  cy.get('#password').type('wrongpassword');
  cy.get('.login-button').click();
});

Then('I should see an error message', () => {
  cy.get('.error-message').should('be.visible');
});
