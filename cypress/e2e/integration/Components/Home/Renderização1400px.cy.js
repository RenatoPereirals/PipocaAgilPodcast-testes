/// <reference types="cypress" />

describe('Teste de Renderização da página homepage na viewport de 1400px', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/').viewport(1400, 800);
  });

  context('Testes de renderização do header', () => {
    it('Deve exibir a logomarca', () => {
      cy.get('.logo-pipoca').should('be.visible');

      cy.get('.logo-pipoca #logomarca').should('be.visible');
    });

    it('deve exibir exibir o menu em linha', () => {
      cy.get('.menu').should('be.visible');

      cy.get('.menu li #home').should('be.visible').should('have.text', 'Home');
      cy.get('.menu li #blog').should('be.visible').should('have.text', 'Blog');
      cy.get('.menu li #episodios')
        .should('be.visible')
        .should('have.text', 'Episódios');
      cy.get('.menu li #quemsomos')
        .should('be.visible')
        .should('have.text', 'Quem somos');
      cy.get('.menu li #contato')
        .should('be.visible')
        .should('have.text', 'Contato');
    });

    it('Deve exibir o icone person', () => {
      cy.get('.div-container').should('be.visible');

      cy.get('.div-container #icon-person').should('be.visible');
    });

    it('Deve exibir o nome "Login"', () => {
      cy.get('.div-container #txt-person')
        .should('be.visible')
        .should('have.text', 'Login');
    });
  });

  context('Teste de renderização do conteúdo principal', () => {
    it('Deve exibir um fundo em desfoque por trás do título', () => {
      cy.get('#title-background').should('be.visible');
    });

    it('Deve exibir o título "O Podcast mais animado do Mundo Ágil”', () => {
      cy.get('.title #title')
        .should('be.visible')
        .should(($element) => {
          const text = $element.text();
          expect(text).to.equal(
            '“O Podcast mais animado do Mundo Ágil”',
            'Texto incorreto no título',
          );
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
      cy.get('.btn-container')
        .find('#btn-access')
        .should('be.visible')
        .find('#btn-access')
        .should('have.text', 'ASSINAR');
    });

    it('Deve exibir uma imagem de fundo com as dimensões 1400px x 810px', () => {
      cy.get('#microphone-background').then(($element) => {
        const parentWidth = $element.parent().width();
        const imageWidth = $element.width();

        expect(imageWidth).to.equal(parentWidth);
      });
      cy.get('#microphone-background').should('have.css', 'height', '810px');
    });

    it('Deve exibir um texto de descrição "O Pipoca Ágil é um podcast voltado para o Mundo Ágil e afins. com o propósito de ser um podcast "chão de fábrica", ajudando na divulgação de conteúdo do Mundo Ágil e contando casos e soluções para a implementação da Transformação Digital nas empresas."', () => {
      cy.get('#txt-desc')
        .should('be.visible')
        .should(
          'have.text',
          ' O Pipoca Ágil é um podcast voltado para o Mundo Ágil e afins. com o propósito de ser um podcast "chão de fábrica", ajudando na divulgação de conteúdo do Mundo Ágil e contando casos e soluções para a implementação da Transformação Digital nas empresas. ',
        );
    });

    it('Deve exibir um texto de redes sociais "Siga nossos canais"', () => {
      cy.get('#txt-media').should('have.text', 'Siga nossos canais');
    });

    it('Deve exibir os ícones das redes sociais', () => {
      cy.scrollTo('center');
      cy.wait(1000); // Espera 1 segundo para dar tempo de renderização
      cy.get('#youtube').should('be.visible');
      cy.get('#twitter').should('be.visible');
      cy.get('#instagram').should('be.visible');
      cy.get('#spotify').should('be.visible');
      cy.get('#linkedin').should('be.visible');
      cy.get('#facebook').should('be.visible');
    });

    it('Deve exibir um vídeo de apresentação', () => {
      cy.get('#presentation-video').should('be.visible');
    });

    it('Deve exibir um texto "Veja nossa apresentação!" “#txt-presentation-video”', () => {
      cy.get('.apresentacao #txt-presentation-video').should('be.visible');
    });

    it('Deve exibir uma faixa com a cor de fundo preta', () => {
      cy.get('.article-three .ultimos').should('be.visible');
    });

    it('Deve exibir uma mensagem “Últimos eventos”', () => {
      cy.get('#txt-last-videos')
        .should('be.visible')
        .should('have.text', 'Últimos eventos');
    });

    it('Deve exibir três vídeos do YouTube em space-around', () => {
      cy.get('#last-videos').should('be.visible');

      cy.get('#last-videos iframe').should('have.length', 3);

      cy.get('#last-videos iframe').each(($iframe, index, iframes) => {
        if (index === 0) {
          expect(
            iframes[index + 1].getBoundingClientRect().left -
              $iframe[0].getBoundingClientRect().right,
          ).to.be.above(0);
        } else if (index === iframes.length - 1) {
          expect(
            $iframe[0].getBoundingClientRect().left -
              iframes[index - 1].getBoundingClientRect().right,
          ).to.be.above(0);
        } else {
          expect(
            $iframe[0].getBoundingClientRect().left -
              iframes[index - 1].getBoundingClientRect().right,
          ).to.be.above(0);
          expect(
            iframes[index + 1].getBoundingClientRect().left -
              $iframe[0].getBoundingClientRect().right,
          ).to.be.above(0);
        }
      });
    });

    it('Deve exibir três botões de paginação #btn-pagination', () => {
      cy.get('.pagination').should('be.visible');
      cy.get('.pagination .btn-pagination').should('have.length', 3);
    });
  });

  context('Teste de renderização do footer', () => {
    it('Deve exibir o footer em space-around', () => {
      cy.get('.footer-container').should('be.visible');

      cy.get('.footer-container > div').each(($div, index, divs) => {
        if (index === 0) {
          // O primeiro elemento não deve ter margem à direita
          expect(
            divs[index + 1].getBoundingClientRect().left -
              $div[0].getBoundingClientRect().right,
          ).to.be.above(0);
        } else if (index === divs.length - 1) {
          // O último elemento não deve ter margem à direita
          expect(
            $div[0].getBoundingClientRect().left -
              divs[index - 1].getBoundingClientRect().right,
          ).to.be.above(0);
        } else {
          // Elementos intermediários devem ter margens à direita e à esquerda
          expect(
            $div[0].getBoundingClientRect().left -
              divs[index - 1].getBoundingClientRect().right,
          ).to.be.above(0);
          expect(
            divs[index + 1].getBoundingClientRect().left -
              $div[0].getBoundingClientRect().right,
          ).to.be.above(0);
        }
      });
    });

    it('Deve exibir a logomarca do rodapé', () => {
      cy.get('.logo-rodape').should('be.visible');

      cy.get('.logo-rodape #footer-logo').should('be.visible');
    });

    it('Deve exibir um texto de política e privacidade "Termos de Uso Politica de Privacidade ©Grupo Coral 2023"', () => {
      cy.get('.footer-term-policy')
        .should('be.visible')
        .should(
          'have.text',
          ' Termos de Uso  Política de Privacidade  ©Grupo Coral 2023 ',
        );
    });

    it('Deve exibir o texto de email “E-mail: pipocaagil@gmail.com”', () => {
      cy.get('.footer-email')
        .should('be.visible')
        .should('have.text', ' E-mail: pipocaagil@gmail.com');
    });

    it('Deve exibir um texto de redes sociais "Redes Sociais"', () => {
      cy.get('.rodape #footer-txt-media')
        .should('be.visible')
        .should('have.text', 'Redes Sociais');
    });

    it('Deve exibir os ícones das redes sociais do footer', () => {
      cy.wait(1000); // Espera 1 segundo para dar tempo de renderização
      cy.get('#footer-youtube').should('be.visible');
      cy.get('#footer-instagram').should('be.visible');
      cy.get('#footer-linkedin').should('be.visible');
    });
  });
});

