/// <reference types="cypress" />

describe('Teste de Navegação e links da página homepage na viewport de 1400px', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/').viewport(480, 800);
  });

  context('Teste de navegação do botões', () => {
    it('Ao clicar no botão "Assinar" deve redirecionar para a rota "/cadastro"', () => {
      cy.get('#btn-access').click();
      cy.url().should('eq', 'http://localhost:4200/cadastro');
    });
  });
});
