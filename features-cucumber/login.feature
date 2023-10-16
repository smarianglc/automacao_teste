Feature: Login Action

Scenario: Sucessful login with Valid Credentials
    Given User is on Home Page
    When User Navigate to LogIn Page
    And User Enters UserCpf and Password
    Then Message displayed Login Successfully