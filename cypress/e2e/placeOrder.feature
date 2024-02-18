Feature: Orders

  Scenario: Add and delete item form cart
    Given I have an item in the cart
    When I complete the order placement form
    Then I place the order
