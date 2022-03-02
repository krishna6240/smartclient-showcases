package com.smartclient.steps;

import com.smartclient.pages.TileSortFiltering;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class MyStepdefs {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
        new TileSortFiltering().selectiframe();
    }

    @When("^I select \"([^\"]*)\" in animal field$")
    public void iSelectInAnimalField(String value) {
        new TileSortFiltering().selectAnimal(value);
    }


    @And("^Max life span set to  (\\d+)$")
    public void maxLifeSpanSetTo(int arg0) {
        new TileSortFiltering().selectMaxlifespan();
    }

    @And("^Select checkbox  to Ascending$")
    public void selectCheckboxToAscending() {
        new TileSortFiltering().clickByAscendinOrder();
    }

    @When("^I select Tile sort and filtering$")
    public void iSelectTileSortAndFiltering() {
        new TileSortFiltering().selectTileSortFiltering();

    }

    @And("^Sort order by \"<Life Span>”$")
    public void sortOrderByLifeSpan() {
        new TileSortFiltering().selectLifeSpan();
    }

    @Then("^Assert that results$")
    public void assertThatResults() {
        String expectedErrorMessage = "Login was unsuccessful. Please correct the errors and try again.\n"
                + "No customer account found";
        Assert.assertEquals("",expectedErrorMessage,new TileSortFiltering().getErrorMessage());
    }
    }

