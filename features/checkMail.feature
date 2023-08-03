@test
Feature: Verify email
  Scenario: User verifies email:
    Given A mail was sent
    When User goes to mailbox page
    When User opens the mail
    When Mail contains the link
    Then User is on google page with title Google