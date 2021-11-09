import LandingPage from "./landing-page"

Given('a web browser is on the Google page', () => {
    LandingPage.navigateToLandingPage()
})

When('the search phrase {string} is entered', searchPhrase=>{
    LandingPage.enterTheSearchPhrase(searchPhrase)
})