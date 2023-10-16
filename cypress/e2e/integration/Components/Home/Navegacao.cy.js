/// <reference types="cypress" />

describe('Teste de Navegação e links da página homepage na viewport de 1400px', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/').viewport(1400, 800);
  });

  context('Teste de navegação nos menus', () => {
    it('Ao clicar em “Home” deve redirecionar para a rota “/”', () => {
      cy.get('#home').click();
      cy.url().should('eq', 'http://localhost:4200/');
    });

    it('Ao clicar em “Blog” deve redirecionar para a rota “/blog”', () => {
      cy.get('#blog').click();
      cy.url().should('eq', 'http://localhost:4200/blog');
    });

    it('Ao clicar em “Episódios” deve redirecionar para a rota “/episodios”', () => {
      cy.get('#episodios').click();
      cy.url().should('eq', 'http://localhost:4200/episodios');
    });

    it('Ao clicar em “Quem somos” deve redirecionar para a rota “/quemsomos”', () => {
      cy.get('#quemsomos').click();
      cy.url().should('eq', 'http://localhost:4200/quemsomos');
    });

    it('Ao clicar em “Contato” deve redirecionar para a rota “/contato', () => {
      cy.get('#contato').click();
      cy.url().should('eq', 'http://localhost:4200/contato');
    });

    it('Ao clicar em “Login” deve redirecionar para a rota “/login', () => {
      cy.get('#txt-person').click();
      cy.url().should('eq', 'http://localhost:4200/login');
    });
  });

  context('Teste de navegação do botões', () => {
    it('Ao clicar no botão "Assinar" deve redirecionar para a rota "/cadastro"', () => {
      cy.get('#btn-access').click();
      cy.url().should('eq', 'http://localhost:4200/cadastro');
    });
  });

  context('Teste de navegação dos ícones de redes sociais', () => {
    it('Deve verificar se o ícone do Youtube está correto', () => {
      cy.get('#link-youtube').should(($element) => {
        const href = $element.attr('href');
        expect(href).to.exist;
      });
    });
    it('Deve verificar se o ícone do Instagram está correto', () => {
      cy.get('#link-instagram').should(($element) => {
        const href = $element.attr('href');
        expect(href).to.exist;
      });
    });
    it('Deve verificar se o ícone do linkedin está correto', () => {
      cy.get('#link-linkedin').should(($element) => {
        const href = $element.attr('href');
        expect(href).to.exist;
      });
    });
    it('Deve verificar se o ícone do twitter está correto', () => {
      cy.get('#link-twitter').should(($element) => {
        const href = $element.attr('href');
        expect(href).to.exist;
      });
    });
    it('Deve verificar se o ícone do facebook está correto', () => {
      cy.get('#link-facebook').should(($element) => {
        const href = $element.attr('href');
        expect(href).to.exist;
      });
    });
    it('Deve verificar se o ícone do spotify está correto', () => {
      cy.get('#link-spotify').should(($element) => {
        const href = $element.attr('href');
        expect(href).to.exist;
      });
    });
  });
});
