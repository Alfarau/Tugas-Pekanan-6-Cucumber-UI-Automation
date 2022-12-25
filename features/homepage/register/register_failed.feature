Feature: Register Failed

  @negative @regression
  Scenario Outline: Register Failed - Blank Firstname and Lastname

    Given Open Parabank homepage
    When I click link Register
    And I click register button
    And I input address <street>
    And I input city <city>
    And I input state <state>
    And I input zip <zip>
    And I input phone <phone>
    And I input ssn <ssn>
    And I input username <reguser>
    And I input password <regpass>
    And I input confirm password <repeatpass>
    And I click register button
    Then I should see <error1> and <error2>

    Examples:
      Examples:
      | error1                    | error2                   | street    | city    | state     | zip   | phone   | ssn  | reguser     | regpass  | repeatpass | text                                                          |
      |  First name is required.  | Last name is required.   | Jl Durian | Jakarta | Indonesia | 12345 | 0812345 | 6661 | farau.farau | farau123 | farau123   | Your account was created successfully. You are now logged in. |