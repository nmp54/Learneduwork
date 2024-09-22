Feature: Data Search in the Web

    As a user
    I want to use the search feature on http://zero.webappsecurity.com/index.html
    So that I can search for data

    Scenario: User uses search feature
        Given I am on the web application homepage
        When I click on the search feature
        Then I should see the search results
