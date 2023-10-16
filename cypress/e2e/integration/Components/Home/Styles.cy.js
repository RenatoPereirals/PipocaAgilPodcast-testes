/// <reference types="cypress" />

describe('Teste de Cores e Estilos em uma viewport de 1400px', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/').viewport(1400, 800);
  });
});
