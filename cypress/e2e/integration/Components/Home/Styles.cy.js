/// <reference types="cypress" />

describe('Teste de Cores e Estilos em uma viewport de 1400px', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/').viewport(1400, 800);
  });

  context('Testes das cores e sombras das fontes', () => {
    it('Deve exibir o texto do menu com a cor correta', () => {
      cy.get('.menu')
        .should('be.visible')
        .should('have.css', 'color', 'rgb(255, 255, 255)');
    });

    it('Deve exibir o texto do título com a cor correta', () => {
      cy.get('#title')
        .should('be.visible')
        .should('have.css', 'color', 'rgb(254, 207, 93)');
    });

    it('Deve exibir o texto da descrição do título com a cor correta', () => {
      cy.get('#title-desc')
        .should('be.visible')
        .should('have.css', 'color', 'rgb(255, 255, 255)');
    });

    it('Deve exibir o texto da nome do botão assinar com a cor correta', () => {
      cy.get('#txt-btn-access')
        .should('be.visible')
        .should('have.css', 'color', 'rgb(0, 0, 0)');
    });

    it('Deve exibir o texto da apresentação com a cor correta', () => {
      cy.get('#txt-desc')
        .should('be.visible')
        .should('have.css', 'color', 'rgb(255, 255, 255)');
    });

    it('Deve exibir o texto da redes sociais com a cor correta', () => {
      cy.get('#txt-media')
        .should('be.visible')
        .should('have.css', 'color', 'rgb(255, 255, 255)');
    });

    it('Deve exibir o texto da apresentção do vídeo com a cor correta', () => {
      cy.get('#txt-presentation-video')
        .should('be.visible')
        .should('have.css', 'color', 'rgb(254, 207, 93)');
    });

    it('Deve exibir o texto dúltimos vídeos com a cor correta', () => {
      cy.get('#txt-last-videos')
        .should('be.visible')
        .should('have.css', 'color', 'rgb(255, 255, 255)');
    });

    it('Deve exibir o texto do título últimos vídeos com a cor correta', () => {
      cy.get('#txt-title-last-videos')
        .should('be.visible')
        .should('have.css', 'color', 'rgb(255, 255, 255)');
    });

    it('Deve exibir o texto da politica de privacidade e termos de uso do footer com a cor correta', () => {
      cy.get('.footer-term-policy')
        .should('be.visible')
        .should('have.css', 'color', 'rgb(255, 255, 255)');
    });

    it('Deve exibir o texto do email do footer com a cor correta', () => {
      cy.get('.footer-email')
        .should('be.visible')
        .should('have.css', 'color', 'rgb(255, 255, 255)');
    });

    it('Deve exibir o texto das redes sociais do footer com a cor correta', () => {
      cy.get('#footer-txt-media')
        .should('be.visible')
        .should('have.css', 'color', 'rgb(255, 255, 255)');
    });
  });
});

