Feature: Orders

  Scenario: Add and delete item form cart
    Given I have an item in the cart
    When I complete the order placement form
    And I place the order
    Then The placed order sign should be displayed
