package com.smartclient.steps;

import com.smartclient.pages.Nested_Grid;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class NestedGridStepdefs {
    @When("^I select nested Grid$")
    public void iSelectNestedGrid() {
        new Nested_Grid().clickOnGrid();
    }

    @And("^I select Correction Fluid$")
    public void iSelectCorrectionFluid() {
        new Nested_Grid().clickOnCorrectionFluid();
    }

    @Then("^I select Description$")
    public void iSelectDescription() {
        new Nested_Grid().clickOnDescription();
    }
}
