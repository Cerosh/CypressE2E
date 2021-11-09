Feature: Google Searching

    As a web surfer, I want to search Google, so that I can learn new things about Doshii.
    
    Scenario: Simple Google search
        Given a web browser is on the Google page
        When the search phrase "Doshii" is entered
        Then results for "Doshii" are shown
        And the related results include "Doshii: Venue Integration Served Simply"
        But the related results do not include "Spriggy"
    
    Scenario: Search in google for related results
        Given a web browser is on the Google page
        When the search phrase "Doshii" is entered
        Then results for "Doshii" are shown
        And the following related results are shown
        | related                                                       |
        | Doshii - Australian FinTech                                   |
        | Doshii: Venue Integration Served Simply                       |
        | CBA-owned Doshii to build market share - Finance - Strategy   |

    Scenario Outline: Searches in google using examples
        Given a web browser is on the Google page
        When the search phrase "<phrase>" is entered
        Then results for "<phrase>" are shown
        And the related results include "<related>"

        Examples: CommBank and Doshii
        | phrase            | related                                                     |
        | Doshii            | Doshii: Venue Integration Served Simply                     |
        | Commonwealth Bank | CommBank - bank accounts, credit cards, home loans and ...  |