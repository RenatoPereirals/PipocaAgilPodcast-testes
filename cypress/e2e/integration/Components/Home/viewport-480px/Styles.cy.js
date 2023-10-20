/// <reference types="cypress" />

describe('Teste de Cores e Estilos em uma viewport de 1400px', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/').viewport(480, 800);
  });

  context('Testes das cores e sombras dos textos', () => {
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

  context(
    'Testes das cores e sombras de botões e ícones e cores de fundo',
    () => {
      it('Deve exibir o botão assinar com a cor correta', () => {
        cy.get('#btn-access')
          .should('be.visible')
          .should(
            'have.css',
            'background',
            'rgb(254, 207, 93) none repeat scroll 0% 0% / auto padding-box border-box',
          );
      });

      it('Deve exibir a seção últimos vídeos com a cor de fundo correta', () => {
        cy.get('.article-three')
          .should('be.visible')
          .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
      });

      it('Deve exibir a na imagem de fundo microfone com a sombra correta', () => {
        cy.get('.background-fullscreen')
          .should('be.visible')
          .should(
            'have.css',
            'box-shadow',
            'rgba(0, 0, 0, 0.25) 0px 4px 4px 0px',
          );
      });

      it('Deve exibir a no botão de acesso com a sombra correta', () => {
        cy.get('.btn-access')
          .should('be.visible')
          .should(
            'have.css',
            'box-shadow',
            'rgba(0, 0, 0, 0.25) 1px 14px 9px 0px',
          );
      });
    },
  );
});

