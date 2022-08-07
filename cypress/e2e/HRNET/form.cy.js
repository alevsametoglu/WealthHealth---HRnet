/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('/');
});

describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });
  it('add employe', () => {
    cy.get('[style="width: 200px;"] > input').type('alev');
    cy.wait(1000);
    cy.get('.information > :nth-child(3) > input').type('sametoglu');
    cy.wait(1000);
    cy.get(':nth-child(4) > input').trigger('click').type('2000-01-01');

    cy.wait(1000);
    cy.get('.information > :nth-child(5) > input')
      .trigger('click')
      .type('2022-07-01');
    cy.wait(1000);

    cy.get(':nth-child(6) > select').select('Sales');
    cy.wait(1000);
    cy.get('.address > :nth-child(2) > input').type('5 avenue paris');
    cy.wait(1000);
    cy.get('.address > :nth-child(3) > input').type('paris');
    cy.wait(1000);
    cy.get(':nth-child(4) > select').select('Alaska');
    cy.wait(1000);
    cy.get('.address > :nth-child(5) > input').type('75000');
    cy.wait(1000);
    cy.get('.save-button').click();
    cy.get('.modal-title').should('contain', 'Succes!!!');
  });

  it('change page with button', () => {
    cy.get('.add-button').click();
    cy.get('h1').should('contain', 'Employee List');
  });
});
