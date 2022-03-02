Feature: As a QA, I would like to test Featured nested Grid

  @Smoke
  Scenario: Assert that results contains for each item containing name "Correction" do following actions
    Given I am on homepage
    When I select nested Grid
    And I select Correction Fluid
    Then I select Description

