Feature: As A User I Want To Verify The Job Search Functionalities

  @Sanity @regression
  Scenario Outline: Verifying The Job Search Functionality
    Given I Am On Home Page
    When I Click On Accept Cookies Message
    And I Enter "<jobTitle>"
    And I Enter The "<location>"
    And I Select The "<distance>"
    And I Click On More Search Options Tab
    And I Enter Minimum Salary As "<salaryMin>"
    And I Enter Maximum Salary As "<salaryMax>"
    And I Select Salary Type As "<salaryType>"
    And I Select Job Type As "<jobType>"
    And I Click On Find Jobs
    Then I Can See The Jobs According To The Selection Criteria As "<expected>"
    Examples:
      | jobTitle         | location               | distance | salaryMin | salaryMax | salaryType | jobType   | expected                                         |
      | Tester           | Harrow, Greater London | 5 miles  | 30000     | 500000    | Per annum  | Permanent | Permanent Tester jobs in Harrow on the Hill      |
      | Presser          | London                 | 25 miles | 15000     | 30000     | Per annum  | Permanent | Permanent Presser jobs in London                 |
      | Store Manager    | Northamptonshire       | 15 miles | 300       | 600       | Per week   | Permanent | Permanent Store Manager jobs in Northamptonshire |
      | It Administrator | Warwick, Warwickshire  | 15 miles | 40000     | 80000     | Per annum  | Permanent | Permanent It Administrator jobs in Warwick       |
      | Network Manager  | Reading                | 7 miles  | 45000     | 65000     | Per annum  | Permanent | Permanent Network Manager jobs in Reading        |
      | Test Analyst     | Peterborough           | 15 miles | 45000     | 55000     | Per annum  | Permanent | Permanent Test Analyst jobs in Peterborough      |
      | Test Manager     | Milton Keynes          | 10 miles | 350       | 700       | Per day    | Contract  | Contract Test Manager jobs in Milton Keynes      |