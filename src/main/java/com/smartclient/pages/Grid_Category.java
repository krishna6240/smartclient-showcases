package com.smartclient.pages;

import com.smartclient.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

public class Grid_Category extends Utility {
    private static final Logger log = LogManager.getLogger(TileSortFiltering.class.getName());

    public Grid_Category() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "__gwt_historyFrame")
    WebElement iframe;
    @CacheLookup
    @FindBy(id = "isc_SideNavTree_0_valueCell16")
    WebElement grid;

////div[contains(text(),'Exercise Book Sewn 192 Page')]
    ////div[contains(text(),'Ea')]
////div[contains(text(),'1.09')]

    ////div[@class='selectItemLiteText']
    @CacheLookup
    @FindBy(xpath = "//div[@class='selectItemLiteText']")
    WebElement selectoption;
    @CacheLookup
    @FindBy(xpath = "//div[contains(text(),'Exercise Book Sewn 192 Page')]")
    List<WebElement> exercise;
    @CacheLookup
    @FindBy(xpath = "//div[contains(text(),'Ea')]")
    List<WebElement> Ea;
    @CacheLookup
    @FindBy(xpath = "//div[contains(text(),'1.09')]")
    List<WebElement> cost;


    public void selectItemCategory() {
        clickOnElement(selectoption);

    }

    public void clickOnGrid() {
        clickOnElement(grid);
    }

    public void selectexercise(String selection) {
        for (WebElement name : exercise) {
            if (name.getText().equalsIgnoreCase(selection)) {
                mouseHoverToElementAndClick(name);
                log.info("selecting an item from main menu : " + selection + "<br>");
                break;
            }
        }
    }

    public void selectEa(String selection1) {
        for (WebElement name : Ea) {
            if (name.getText().equalsIgnoreCase(selection1)) {
                mouseHoverToElementAndClick(name);
                log.info("selecting an item from main menu : " + selection1 + "<br>");
                break;
            }
        }
    }
        public void selectcost (String selection2) {
            for (WebElement name : cost) {
                if (name.getText().equalsIgnoreCase(selection2)) {
                    mouseHoverToElementAndClick(name);
                    log.info("selecting an item from main menu : " + selection2 + "<br>");
                    break;
                }
            }
        }


    }
