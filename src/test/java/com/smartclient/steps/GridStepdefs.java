package com.smartclient.steps;

import com.smartclient.pages.Grid_Category;
import cucumber.api.PendingException;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.List;

public class GridStepdefs {
    @When("^I select Dropdown row Grid Category$")
    public void iSelectDropdownRowGridCategory() {
    }

    @And("^Units contains  Ea$")
    public void unitsContainsEa() {
    }

    @Then("^Unit Cost greater than (\\d+)\\.(\\d+)$")
    public void unitCostGreaterThan(int arg0, int arg1) {
    }

    @Then("^I shall be able to show Grid Category$")
    public void iShallBeAbleToShowGridCategory() {
    }

    @And("^Item contains$")
    public void itemContains(DataTable table) {
        List<List<String>> data = table.raw();
        for (int i = 1; i < data.size(); i++) {
            new Grid_Category().selectItemCategory();
            new Grid_Category().selectexercise(data.get(i).get(0));
            new Grid_Category().selectEa(data.get(i).get(1));
            new Grid_Category().selectcost(data.get(i).get(2));
        }
    }
}