Feature: Home Page


    Scenario: Success 5 icons of social networks are present
        Given I am on the Login Page
        Then I expect to be 5 icons of social networks are present

    Scenario: Success after clicking Sign Up the registration form opens
        Given I am on the Login Page
        When I click on Sign Up
        Then I should see the registration form

        
    Scenario: Success after clicking Sign In the login form opens
        Given I am on the Login Page
        When I click on Sign In
        Then I should see the login form



