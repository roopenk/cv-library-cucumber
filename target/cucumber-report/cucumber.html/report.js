$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("JobSearch.feature");
formatter.feature({
  "line": 1,
  "name": "As A User I Want To Verify The Job Search Functionalities",
  "description": "",
  "id": "as-a-user-i-want-to-verify-the-job-search-functionalities",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verifying The Job Search Functionality",
  "description": "",
  "id": "as-a-user-i-want-to-verify-the-job-search-functionalities;verifying-the-job-search-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I Am On Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Click On Accept Cookies Message",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I Enter \"\u003cjobTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Enter The \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Select The \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Click On More Search Options Tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Enter Minimum Salary As \"\u003csalaryMin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Enter Maximum Salary As \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Select Salary Type As \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Select Job Type As \"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Click On Find Jobs",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Can See The Jobs According To The Selection Criteria As \"\u003cexpected\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "as-a-user-i-want-to-verify-the-job-search-functionalities;verifying-the-job-search-functionality;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "expected"
      ],
      "line": 18,
      "id": "as-a-user-i-want-to-verify-the-job-search-functionalities;verifying-the-job-search-functionality;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow, Greater London",
        "5 miles",
        "30000",
        "500000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow on the Hill"
      ],
      "line": 19,
      "id": "as-a-user-i-want-to-verify-the-job-search-functionalities;verifying-the-job-search-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3741693700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verifying The Job Search Functionality",
  "description": "",
  "id": "as-a-user-i-want-to-verify-the-job-search-functionalities;verifying-the-job-search-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I Am On Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Click On Accept Cookies Message",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I Enter \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Enter The \"Harrow, Greater London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Select The \"5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Click On More Search Options Tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Enter Minimum Salary As \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Enter Maximum Salary As \"500000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Select Salary Type As \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Select Job Type As \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Click On Find Jobs",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Can See The Jobs According To The Selection Criteria As \"Permanent Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 72169100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnAcceptCookiesMessage()"
});
formatter.result({
  "duration": 1012098600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 9
    }
  ],
  "location": "JobSearchSteps.iEnter(String)"
});
formatter.result({
  "duration": 1113811400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow, Greater London",
      "offset": 13
    }
  ],
  "location": "JobSearchSteps.iEnterThe(String)"
});
formatter.result({
  "duration": 1090236600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 miles",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iSelectThe(String)"
});
formatter.result({
  "duration": 1203579900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionsTab()"
});
formatter.result({
  "duration": 1099980100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 27
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalaryAs(String)"
});
formatter.result({
  "duration": 1096778600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500000",
      "offset": 27
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalaryAs(String)"
});
formatter.result({
  "duration": 1095980300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 25
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryTypeAs(String)"
});
formatter.result({
  "duration": 1134541400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectJobTypeAs(String)"
});
formatter.result({
  "duration": 1123267100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobs()"
});
formatter.result({
  "duration": 78446100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow on the Hill",
      "offset": 59
    }
  ],
  "location": "JobSearchSteps.iCanSeeTheJobsAccordingToTheSelectionCriteriaAs(String)"
});
formatter.result({
  "duration": 1366616000,
  "status": "passed"
});
formatter.after({
  "duration": 689465900,
  "status": "passed"
});
});