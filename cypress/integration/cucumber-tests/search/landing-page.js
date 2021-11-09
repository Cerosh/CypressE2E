import {Given, When} from 'cypress-cucumber-preprocessor/steps'
const URL = 'https://www.google.com/'
const SEARCH_BOX = 'input[type=\'text\']'

class LandingPage{
    static navigateToLandingPage(){
        cy.visit(URL)
    }
    static enterTheSearchPhrase(searchPhrase){
        cy.get(SEARCH_BOX).type(searchPhrase).type('{enter}')
    }

}
export default LandingPage
