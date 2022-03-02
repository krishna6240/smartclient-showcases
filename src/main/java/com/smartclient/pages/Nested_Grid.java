package com.smartclient.pages;

import com.smartclient.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Nested_Grid extends Utility {
    private static final Logger log = LogManager.getLogger(TileSortFiltering.class.getName());

    public Nested_Grid() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "__gwt_historyFrame")
    WebElement iframe;
    @CacheLookup
    @FindBy(xpath = "//td[contains(text(),'Nested Grid')]")
    WebElement grid;
    @CacheLookup
    @FindBy(xpath = "//td[@class='cellSelectedDark']//span[@eventpart='valueicon']")
    WebElement correctionfluid;
    @CacheLookup
    @FindBy(xpath = "//div[@id='isc_KW']")
    WebElement description;

    public void clickOnGrid() {
        //clickOnElement(iframe);
        clickOnElement(grid);
    }

    public void clickOnCorrectionFluid() {
        clickOnElement(correctionfluid);
    }

    public void clickOnDescription() {
        clickOnElement(description);
    }

}
