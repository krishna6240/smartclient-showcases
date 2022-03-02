Feature: As a QA, I would like to test Dropdown Gris Category

  @Smoke
  Scenario: Select from dropdown row which will meet all criteria
    Given I am on homepage
    When I select Dropdown row Grid Category
    And Item contains
      | Item                        | Units | Unit Cost |
      | Exercise Book Sewn 192 Page | Ea    | 1.09      |
    Then I shall be able to show Grid Category




