import SearchResultsPage from "./search-result"

Then('results for {string} are shown', searchPhrase=>{
    SearchResultsPage.validateSearchResultsContainSearchPhrase(searchPhrase)
})

And('the related results include {string}', realtedResult=>{
    SearchResultsPage.validateSearchResultsContainsRelatedResults(realtedResult)
})

But('the related results do not include {string}', notRelatedResult=>{
    SearchResultsPage.validateSearchResultsDoesNotContainsRelatedResults(notRelatedResult)
})

And('the following related results are shown',(dataTable)=>{
    SearchResultsPage.validateSearchResultsContainsRelatedResultsFromTable(dataTable)
})