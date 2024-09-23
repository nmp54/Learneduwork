const URL = "http://zero.webappsecurity.com/index.html";
const SEARCH = "#searchTerm";

class Homepage {
    static visit() {
        cy.visit(URL);
    }

    static search() {
        cy.get(SEARCH).click();
        cy.get(SEARCH).type("Online{enter}");
    }
}

export default Homepage;
