Feature: Login

    Scenario: Success Login with the correct email and password
        Given I am on the Login Page
        When I click Sign In button
        When I enter "ladykaalisa@gmail.com" username
        When I enter "1Raduga1" password
        When I click Login button
        Then I expect to be on Garage Page


    Scenario: Success Login with empty fields
        Given I am on the Login Page
        When I click Sign In button
        Then I expect to button Login be disabled


    Scenario: Success Login with non-existent login and password
        Given I am on the Login Page
        When I click Sign In button
        When I enter "ladykaalisa@gmail.ua" username
        When I enter "1Raduga0" password
        When I click Login button
        Then I expect to error message
