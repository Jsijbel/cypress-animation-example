describe('template spec', () => {
  it('passes', () => {
    cy.visit('./example/example-page.html')
    cy.get('[data-test="errorMessage"]').parent().invoke('remove')
    cy.get('[data-test="fullSizeGalleryThumb"] img').eq(0).click()
    cy.get('[data-test="next"]').click()
    cy.get('[data-test="dialogBase"] img[src*="man-met-meter-1000.jpg"]').should(($el) => {
      const message = `Expected to find ${$el[0].outerHTML} in viewport`;
      const right = Cypress.$(cy.state('window')).width();
      const rect = $el[0].getBoundingClientRect();
      expect(rect.left).to.be.at.least(0, message);
      expect(rect.left).to.be.at.most(right - rect.width, message);
      expect(rect.right).to.be.at.least(0 + rect.width, message);
      expect(rect.right).to.be.at.most(right, message);
    });
  })
})