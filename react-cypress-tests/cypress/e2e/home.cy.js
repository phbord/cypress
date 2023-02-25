describe('home spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('button[type="submit"]').click()
    cy.get('form').within(() => {
      cy.get('input#firstName').type('olaf')
      cy.get('select#country').select('fr')
      cy.get('button[type="submit"]').click()
    })
    cy.get('#btn-modal').click()
    cy.get('#btn-close').click()
    cy.get('#btn-modal').click()
    cy.get('#btn-close-cross').click()
    cy.get('#btn-return').click()
  })
})