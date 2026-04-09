describe('template spec', () => {

  const baseUrl = 'https://blog.agibank.com.br/'

  beforeEach(() => {
    cy.viewport(1440, 900)
    cy.visit(baseUrl)
  })

  it('Pesquisar termo existente', () => {
    cy.get('[aria-label="Search icon link"]', {timeout: 10000})
      .filter(':visible')
      .first()
      .click()

    cy.get('input[placeholder="Digite sua busca"]', { timeout: 10000 })
      .should('be.visible')  
      .type('Imposto de renda{enter}')

    cy.location('search').should('match', /imposto/i)

    cy.get('main', {timeout: 10000})
      .should('be.visible')

    cy.get('main a')
      .should('have.length.greaterThan', 0)

    cy.get('main')
      .contains('imposto', {matchCase: false})
      .should('be.visible')
  })

  it('Pesquisar termo inexistente', () => {
    cy.get('[aria-label="Search icon link"]', { timeout: 10000 })
      .should('be.visible')
      .first()
      .click()

    cy.get('input[placeholder="Digite sua busca"]', { timeout: 10000 })
      .should('be.visible')  
      .type('termoInexistente123{enter}')
    
    cy.url().should('include', 's=termoInexistente123')

    cy.get('main', {timeout: 10000})
      .should('be.visible')

    cy.contains('Lamentamos, mas nada foi encontrado', {timeout: 10000})
      .should('be.visible')  

  })
})