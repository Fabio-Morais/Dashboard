describe('Home page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3000//api/metrics', { fixture: 'metrics.json' }).as('fetchMetrics')
    cy.visit('http://localhost:3000/')
    cy.wait('@fetchMetrics')
  })

  it('should display the efficiency, shift, and downtime sections when metrics are loaded successfully', () => {
    cy.get('[data-testid="efficiency-section"]').should('exist')
    cy.get('[data-testid="shift-section"]').should('exist')
    cy.get('[data-testid="downtime-section"]').should('exist')
  })
})
