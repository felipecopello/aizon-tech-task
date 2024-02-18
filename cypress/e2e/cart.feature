Feature: Cart

  Scenario: Add and delete item form cart
    Given I am in demoblaze home page
    When I add a random item to the cart
    Then I can delete the item from the cart

