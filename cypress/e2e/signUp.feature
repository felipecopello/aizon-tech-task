Feature: Sign up

  Scenario: Sign up, login and logout test
    Given I am in demoblaze home page
    When I sign up
    And I login using valid credentials
    And I logout
    Then I should be logged out