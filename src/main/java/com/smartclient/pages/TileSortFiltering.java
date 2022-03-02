package com.smartclient.pages;

import com.smartclient.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class TileSortFiltering extends Utility {
    private static final Logger log = LogManager.getLogger(TileSortFiltering.class.getName());

    public TileSortFiltering() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "isc_SideNavTree_0_valueCell8")
    WebElement tilesortFiltering;
    @CacheLookup
    @FindBy(id = "__gwt_historyFrame")
    WebElement iframe;
    @CacheLookup
    @FindBy(xpath = "//input[@name='commonName']")
    WebElement animal;
    @CacheLookup
    @FindBy(id = "isc_EP")
    WebElement maxlifespan;
    @CacheLookup
    @FindBy(xpath = "//div[@class='selectItemLiteText']")//isc_37 or 3B
    WebElement clickondropbox;
    @FindBy(css = "td[class='pickListCellSelected'] div[role='presentation']")
    WebElement sortby;
    @CacheLookup
    @FindBy(xpath = "//div[@class='labelAnchor']")
    WebElement ascending;
    @CacheLookup
    @FindBy(xpath = "//div[@class='message-error validation-summary-errors']")
    WebElement errorMessage;

    public void selectTileSortFiltering() {
        mouseHoverToElementAndClick(tilesortFiltering);
    }

    public void selectiframe() {
        switchToIframe(iframe);
       // clickOnElement(tilesortFiltering);
        driver.switchTo().defaultContent();
    }

    public void selectAnimal(String value) {
        sendTextToElement(animal, value);
    }

    public void selectMaxlifespan() {
        mouseHoverToElementAndClick(maxlifespan);
        Actions actions = new Actions(driver);
        Action movement = actions.moveToElement(maxlifespan)
                .clickAndHold()
                .moveToElement(maxlifespan, -142, -202)
                .release(maxlifespan)
                .build();
        movement.perform();
    }

    public void selectLifeSpan() {
        clickOnElement(clickondropbox);
        clickOnElement(sortby);
    }

    public void clickByAscendinOrder() {
        clickOnElement(ascending);
    }
    public String getErrorMessage() {

        return getTextFromElement(errorMessage);
    }

}
