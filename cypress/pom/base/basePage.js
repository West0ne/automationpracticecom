export class BasePage {
    CONTAINER;
    PAGE_NAME;
    PAGE_URL;

    constructor(container, page_name, page_url){
        this.CONTAINER = container;
        this.page_name = page_name;
        this.PAGE_URL = page_url;
    }

    visit() {
        cy.visit(this.PAGE_URL);
        
        return this
    }

    checkPageUrl() {
        cy.location('href', {timeout: 60000}).should('include', this.PAGE_URL);

        return this
    }

}