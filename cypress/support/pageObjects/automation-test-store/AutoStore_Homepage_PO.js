class AutoStore_Homepage_PO {
  visitHomePage() {
    cy.visit('https://automationteststore.com');
  }
  clickOn_HairCair_Link() {
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
  }
}

export default AutoStore_Homepage_PO;
