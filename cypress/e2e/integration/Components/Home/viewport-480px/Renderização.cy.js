/// <reference types="cypress" />

describe('Teste de Renderização da página homepage na viewport de 1400px', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/').viewport(480, 800);
  });

  context('Testes de renderização do header', () => {
    it('Deve exibir o botão "menu"', () => {
      cy.get('.icon-menu-img').should('be.visible');
    });

    it('Deve exibir a "logomarca"', () => {
      cy.get('#logomarca').should('be.visible');
    });

    it('Deve ocultar o menu em linha', () => {
      cy.get('.menu').should('not.be.visible');
    });

    it('Deve ocultar o icone person', () => {
      cy.get('.div-container').should('not.be.visible');
    });

    it('Deve ocultar o nome "Login"', () => {
      cy.get('.div-container #txt-person').should('not.be.visible');
    });
  });

  context('Teste de renderização do conteúdo principal', () => {
    it('Deve ocultar um fundo em desfoque por trás do título', () => {
      cy.get('#title-background').should('not.be.visible');
    });

    it('Deve exibir o título "O Podcast mais animado do Mundo Ágil”', () => {
      cy.get('#title-mobile')
        .should('be.visible')
        .should(($element) => {
          const text = $element.text();
          expect(text).to.include('“O Podcast mais animado do Mundo Ágil”');
        });
    });

    it('Deve exibir o texto "Assine e seja membro para ter acesso a conteúdos exclusivos."', () => {
      cy.get('.txt-desc')
        .find('#title-desc')
        .should('be.visible')
        .should(
          'have.text',
          ' Assine e seja membro para ter acesso a conteúdos exclusivos. ',
        );
    });

    it('Deve exibir o botão assinar como o texto "ASSINAR"', () => {
      cy.get('#btn-access').should('be.visible').should('have.text', 'ASSINAR');
    });

    it('Deve ocultar a imagem de fundo com as dimensões 1400px x 810px', () => {
      cy.get('#microphone-background').should('not.be.visible');
    });

    it('Deve exibir a imagem de fundo com as dimensões 100% x 780px', () => {
      cy.get('.background-wrapper')
        .should('be.visible')
        .should(($element) => {
          const parentWidth = $element.parent().width();
          const imageWidth = $element.width();
          const imageHeigth = $element.height();

          const marginOfError = 2; // aplica uma margem de erro

          expect(imageWidth).to.be.closeTo(parentWidth, marginOfError);
          expect(imageHeigth).to.be.closeTo(780, marginOfError);
        });
    });

    it('Deve exibir um texto de descrição "O Pipoca Ágil é um podcast voltado para o Mundo Ágil e afins. com o propósito de ser um podcast "chão de fábrica", ajudando na divulgação de conteúdo do Mundo Ágil e contando casos e soluções para a implementação da Transformação Digital nas empresas."', () => {
      cy.get('#txt-desc')
        .should('be.visible')
        .should(
          'have.text',
          ' O Pipoca Ágil é um podcast voltado para o Mundo Ágil e afins. com o propósito de ser um podcast "chão de fábrica", ajudando na divulgação de conteúdo do Mundo Ágil e contando casos e soluções para a implementação da Transformação Digital nas empresas. ',
        );
    });

    it('Deve ocultar um texto de redes sociais "Siga nossos canais"', () => {
      cy.get('#txt-media').should('not.be.visible');
    });

    it('Deve ocultar os ícones das redes sociais', () => {
      cy.scrollTo('center');
      cy.get('#youtube').should('not.be.visible');
      cy.get('#twitter').should('not.be.visible');
      cy.get('#instagram').should('not.be.visible');
      cy.get('#spotify').should('not.be.visible');
      cy.get('#linkedin').should('not.be.visible');
      cy.get('#facebook').should('not.be.visible');
    });

    it('Deve exibir um vídeo de apresentação', () => {
      cy.get('.mobile iframe')
        .should('be.visible')
        .should(($element) => {
          const src = $element.attr('src');

          expect(src).to.exist;
          expect(src).eq(
            'https://www.youtube.com/embed/RvSzTZUvj5o?controls=0',
          );
        });
    });

    it('Deve exibir um texto "Veja nossa apresentação!" “#txt-presentation-video”', () => {
      cy.get('.apresentacao #txt-presentation-video').should('be.visible');
    });

    it('Deve ocultar a faixa com a cor de fundo preta', () => {
      cy.get('.article-three .ultimos').should('not.be.visible');
    });

    it('Deve ocultar a mensagem “Últimos eventos”', () => {
      cy.get('#txt-last-videos').should('not.be.visible');
    });

    it('Deve ocultar os vídeos do YouTube em space-around', () => {
      cy.get('#last-videos').should('not.be.visible');
    });

    it('Deve ocultar os botões de paginação', () => {
      cy.get('.pagination').should('not.be.visible');
    });
  });

  context('Teste de renderização do footer', () => {
    it('Deve ocultar o footer', () => {
      cy.get('.footer-container').should('not.be.visible');
    });
  });
});
