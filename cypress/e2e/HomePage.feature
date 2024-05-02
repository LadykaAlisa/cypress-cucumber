# HomePage.feature

Feature: Home Page

Scenario: Check presence of social media icons
  Given I visit the home page
  Then I should see 5 social media icons

Scenario: Open registration form after clicking Sign Up
  Given I visit the home page
  When I click on Sign Up
  Then I should see the registration form

Scenario: Open login form after clicking Sign In
  Given I visit the home page
  When I click on Sign In
  Then I should see the login form
