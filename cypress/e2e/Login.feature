# Login.feature

Feature: Login

Scenario: Login with correct email and password
  Given I visit the login page
  When I login with correct email and password
  Then I should be logged in

Scenario: Login with empty fields
  Given I visit the login page
  When I login with empty fields
  Then the Login button should be disabled

Scenario: Login with non-existent email and password
  Given I visit the login page
  When I login with non-existent email and password
  Then I should see an error message
