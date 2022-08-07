/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('/employee-list');
});
describe('Employe list page', () => {
  it('successfully loads', () => {
    cy.visit('/employee-list');
    cy.get('table').should('have.class', 'emloyee-table');
  });
  it('search an employee', () => {
    cy.get('.search-input')
      .type('Sandor')
      .wait(1000)
      .should('have.value', 'Sandor');
  });
});
