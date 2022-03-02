Feature: As a QA, I would like to test Tile sort and Filtering

  @Smoke
  Scenario: Assert that results contains more than 12 items
    Given I am on homepage
    When I select Tile sort and filtering
    And I select "a" in animal field
    And Max life span set to  40
    And Sort order by "<Life Span>”
    Then Select checkbox  to Ascending



