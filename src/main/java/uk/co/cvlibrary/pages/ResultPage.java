package uk.co.cvlibrary.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.co.cvlibrary.utility.Utility;

public class ResultPage extends Utility {
    public ResultPage() {
        PageFactory.initElements(driver, this);
    }

    private static final Logger log = LogManager.getLogger(ResultPage.class.getName());


    @FindBy(xpath = "//h1[@class='search-header__title']")
    WebElement resultText;

    public void verifyResults(String expected) {
        log.info("Verifying Results Displayed: " + resultText);
        verifyThatTextIsDisplayed(resultText, expected);
    }
}
