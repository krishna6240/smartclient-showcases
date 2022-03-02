$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("gridcategory.feature");
formatter.feature({
  "line": 1,
  "name": "As a QA, I would like to test Dropdown Gris Category",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-test-dropdown-gris-category",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11614200200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Select from dropdown row which will meet all criteria",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-test-dropdown-gris-category;select-from-dropdown-row-which-will-meet-all-criteria",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I select Dropdown row Grid Category",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Item contains",
  "rows": [
    {
      "cells": [
        "Item",
        "Units",
        "Unit Cost"
      ],
      "line": 8
    },
    {
      "cells": [
        "Exercise Book Sewn 192 Page",
        "Ea",
        "1.09"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I shall be able to show Grid Category",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 234854900,
  "status": "passed"
});
formatter.match({
  "location": "GridStepdefs.iSelectDropdownRowGridCategory()"
});
formatter.result({
  "duration": 43900,
  "status": "passed"
});
formatter.match({
  "location": "GridStepdefs.itemContains(DataTable)"
});
formatter.result({
  "duration": 60262647600,
  "status": "passed"
});
formatter.match({
  "location": "GridStepdefs.iShallBeAbleToShowGridCategory()"
});
formatter.result({
  "duration": 17300,
  "status": "passed"
});
formatter.after({
  "duration": 716300500,
  "status": "passed"
});
formatter.uri("nestedgrid.feature");
formatter.feature({
  "line": 1,
  "name": "As a QA, I would like to test Featured nested Grid",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-test-featured-nested-grid",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6997371100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Assert that results contains for each item containing name \"Correction\" do following actions",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-test-featured-nested-grid;assert-that-results-contains-for-each-item-containing-name-\"correction\"-do-following-actions",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I select nested Grid",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select Correction Fluid",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select Description",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 271442900,
  "status": "passed"
});
formatter.match({
  "location": "NestedGridStepdefs.iSelectNestedGrid()"
});
formatter.result({
  "duration": 255244900,
  "status": "passed"
});
formatter.match({
  "location": "NestedGridStepdefs.iSelectCorrectionFluid()"
});
formatter.result({
  "duration": 20126921600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//td[@class\u003d\u0027cellSelectedDark\u0027]//span[@eventpart\u003d\u0027valueicon\u0027]\"}\n  (Session info: chrome\u003d98.0.4758.102)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DELL7480\u0027, ip: \u0027172.24.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b7a175c8c6f822cfb4818da515dca4ad, findElement {using\u003dxpath, value\u003d//td[@class\u003d\u0027cellSelectedDark\u0027]//span[@eventpart\u003d\u0027valueicon\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.102, chrome: {chromedriverVersion: 98.0.4758.102 (273bf7ac8c90..., userDataDir: C:\\Users\\Krishna\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:60733}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60733/devtoo..., se:cdpVersion: 98.0.4758.102, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b7a175c8c6f822cfb4818da515dca4ad\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.smartclient.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.smartclient.pages.Nested_Grid.clickOnCorrectionFluid(Nested_Grid.java:37)\r\n\tat com.smartclient.steps.NestedGridStepdefs.iSelectCorrectionFluid(NestedGridStepdefs.java:16)\r\n\tat ✽.And I select Correction Fluid(nestedgrid.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NestedGridStepdefs.iSelectDescription()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 890235900,
  "status": "passed"
});
formatter.uri("smartclient.feature");
formatter.feature({
  "line": 1,
  "name": "As a QA, I would like to test Tile sort and Filtering",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-test-tile-sort-and-filtering",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7777939200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Assert that results contains more than 12 items",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-test-tile-sort-and-filtering;assert-that-results-contains-more-than-12-items",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I select Tile sort and filtering",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select \"a\" in animal field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Max life span set to  40",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Sort order by \"\u003cLife Span\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select checkbox  to Ascending",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 222638500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectTileSortAndFiltering()"
});
formatter.result({
  "duration": 409454800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 10
    }
  ],
  "location": "MyStepdefs.iSelectInAnimalField(String)"
});
formatter.result({
  "duration": 247635200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.maxLifeSpanSetTo(int)"
});
formatter.result({
  "duration": 584490700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.sortOrderByLifeSpan()"
});
formatter.result({
  "duration": 211818600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.selectCheckboxToAscending()"
});
formatter.result({
  "duration": 75201300,
  "status": "passed"
});
formatter.after({
  "duration": 766142900,
  "status": "passed"
});
});