import visitCraigslist from "./common/visitCraigslist"

const CRAIGSLIST_HEADING_TEXT_SELECTOR = "#logo"

before(
    "will visit Craigslist",
    () => {
        visitCraigslist()
    }
)

describe(
    "will validate main headings have correct text",
    () => {
        it(
            "validates main 'Craigslist' heading has the correct text",
            () => {
                cy.get(CRAIGSLIST_HEADING_TEXT_SELECTOR)
                    .text()
                    .should(
                        "equal",
                        "craigslist"
                    )
            }
        )
    }
)
