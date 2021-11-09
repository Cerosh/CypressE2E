import { And, But, Then } from "cypress-cucumber-preprocessor/steps";

class SearchResultsPage{
    static validateSearchResultsContainSearchPhrase(searchPhrase){
        cy.get('h2').should('contain', searchPhrase)
    }
    static validateSearchResultsContainsRelatedResults(realtedResult){
        cy.get('h3').should('contain', realtedResult)

    }
    static validateSearchResultsDoesNotContainsRelatedResults(notRelatedResult){
        cy.get('h3').should('not.contain',notRelatedResult)

    }
    static validateSearchResultsContainsRelatedResultsFromTable(dataTable){
        dataTable.hashes().forEach(elem => {
            cy.get('h3').should('contain', elem.related)
            })
    }
}
export default SearchResultsPage
