Feature: Register

  @positive @regression
  Scenario Outline: Register Successfully

    Given Open Parabank homepage
    When I click link Register
    And I input first name <firstname>
    And I input last name <lastname>
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
    Then I click logout button


    Examples:
      | firstname  | lastname | street    | city    | state     | zip   | phone   | ssn  | reguser     | regpass  | repeatpass | text                                                          |
      |  farau     | test     | Jl Durian | Jakarta | Indonesia | 12345 | 0812345 | 6661 | farau.farau | farau123 | farau123   | Your account was created successfully. You are now logged in. |
