describe('template spec', () => {

  const baseUrl = 'https://blog.agibank.com.br/'

  beforeEach(() => {
    cy.viewport(1440, 900)
    cy.visit(baseUrl)
  })

  it('Pesquisar termo existente', () => {
    cy.get('[aria-label="Search icon link"]', {timeout: 10000})
      .should('be.visible')
      .first()
      .click()
      //.filter(':visible')
      //.click({ force: true })

    cy.get('input[placeholder="Digite sua busca"]',  { timeout: 10000 })
      .should('be.visible')
      .type('imposto de renda{enter}')

    cy.get('.post-item',  { timeout: 10000 })
      .should('have.length.greaterThan', 0)
  })

  it('Pesquisar termo inexistente', () => {
    cy.get('[aria-label="Search icon link"]', { timeout: 10000 })
      .should('be.visible')
      .first()
      .click()
      //.filter(':visible')
      //.click()

    cy.get('input[placeholder="Digite sua busca"]', { timeout: 10000 })
      .should('be.visible')  
      .type('termoInexistente123{enter}')
    
    cy.contains('Nenhum resultado', {timeout: 10000})
      .should('be.visible')  

  })
})