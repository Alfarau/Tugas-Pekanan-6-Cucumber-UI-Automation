Feature: Login

  @positive @regression
  Scenario Outline: Login Successfully

    Given Open SwagLabs homepage
    And I input username <username> 
    And I input password <password>
    And I click login button
    Then I can click button add to cart

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
