package uk.co.cvlibrary.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.cvlibrary.pages.HomePage;
import uk.co.cvlibrary.pages.ResultPage;

public class JobSearchSteps {
    @Given("^I Am On Home Page$")
    public void iAmOnHomePage() {
    }

    @When("^I Click On Accept Cookies Message$")
    public void iClickOnAcceptCookiesMessage() throws InterruptedException {
        Thread.sleep(1000);
    }

    @And("^I Enter \"([^\"]*)\"$")
    public void iEnter(String jobTitle) throws InterruptedException {
        Thread.sleep(1000);
        new HomePage().enterJobTitle(jobTitle);
    }

    @And("^I Enter The \"([^\"]*)\"$")
    public void iEnterThe(String location) throws InterruptedException {
        Thread.sleep(1000);
        new HomePage().enterLocation(location);
    }

    @And("^I Select The \"([^\"]*)\"$")
    public void iSelectThe(String distance) throws InterruptedException {
        Thread.sleep(1000);
        new HomePage().selectDistance(distance);
    }

    @And("^I Click On More Search Options Tab$")
    public void iClickOnMoreSearchOptionsTab() throws InterruptedException {
        Thread.sleep(1000);
        new HomePage().clickMoreSearchOptions();
    }

    @And("^I Enter Minimum Salary As \"([^\"]*)\"$")
    public void iEnterMinimumSalaryAs(String salaryMin) throws InterruptedException {
        Thread.sleep(1000);
        new HomePage().enterMinSalary(salaryMin);
    }

    @And("^I Enter Maximum Salary As \"([^\"]*)\"$")
    public void iEnterMaximumSalaryAs(String salaryMax) throws InterruptedException {
        Thread.sleep(1000);
        new HomePage().enterMaxSalary(salaryMax);
    }

    @And("^I Select Salary Type As \"([^\"]*)\"$")
    public void iSelectSalaryTypeAs(String salaryType) throws InterruptedException {
        Thread.sleep(1000);
        new HomePage().selectSalaryType(salaryType);
    }

    @And("^I Select Job Type As \"([^\"]*)\"$")
    public void iSelectJobTypeAs(String jobType) throws InterruptedException {
        Thread.sleep(1000);
        new HomePage().selectJobType(jobType);
    }

    @And("^I Click On Find Jobs$")
    public void iClickOnFindJobs() {
        new HomePage().clickOnFindJobs();
    }

    @Then("^I Can See The Jobs According To The Selection Criteria As \"([^\"]*)\"$")
    public void iCanSeeTheJobsAccordingToTheSelectionCriteriaAs(String expected) {
        new ResultPage().verifyResults(expected);
    }
}
