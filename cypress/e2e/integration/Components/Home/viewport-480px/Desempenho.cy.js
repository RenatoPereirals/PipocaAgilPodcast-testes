/// <reference types="cypress" />

it('Deve passar na auditoria Lighthouse para a página inicial', () => {
  cy.visit('https://pipocaagilpodcast.web.app/');
  cy.wait(5000);
  cy.lighthouse();
});
