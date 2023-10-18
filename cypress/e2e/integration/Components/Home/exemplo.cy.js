/// <reference types="cypress" />

describe('Exemplo de teste', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/').viewport(1400, 800);
  });

  context('Exemplo 01', () => {
    it('Deve exibir o título', () => {
      cy.get('#title').should('be.visible');
    });

    it('Deve exibir o título "O Podcast mais animado do Mundo Ágil"', () => {
      cy.get('#title')
        .should('be.visible')
        .should('have.text', '“O Podcast mais animado do Mundo Ágil”');
    });

    it('Deve exibir o título com um font-size de 96px', () => {
      cy.get('#title')
        .should('be.visible')
        .should('have.css', 'font-size', '96px');
    });

    it('Deve exibir o título com um font-size de 96px', () => {
      cy.get('#title')
        .should('be.visible')
        .should('have.css', 'color', 'rgb(254, 207, 93)');
    });

    it('Deve redirecionar para página cadastro', () => {
      cy.get('#btn-access').click();
      cy.url().should('eq', 'http://localhost:4200/cadastro');
    });
  });
});
