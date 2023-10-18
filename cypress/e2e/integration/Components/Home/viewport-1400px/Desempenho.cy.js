/// <reference types="cypress" />

it('Deve passar na auditoria Lighthouse para a página inicial', () => {
  cy.visit('http://localhost:4200');
  cy.wait(5000);
  cy.lighthouse();
});
