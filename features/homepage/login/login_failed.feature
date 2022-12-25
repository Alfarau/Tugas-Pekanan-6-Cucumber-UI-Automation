Feature: Login Failed
    
  @negative @regression  
  Scenario Outline: Login Failed - Blank Password

    Given Open SwagLabs homepage
    And I input username <username>
    And I click login button
    Then I can click button on error message

    Examples:
      | username      | message                            |
      | standard_user | Epic sadface: Password is required |
