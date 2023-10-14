/// <reference types="cypress" />

describe('Teste de Renderização de página homepage na viewport de 1400px', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/').viewport(1400, 800);
  });

  describe('Teste de renderização do conteúdo principal', () => {
    it('Deve exibir um fundo em desfoque por trás do título', () => {
      cy.get('#title-background').should('be.visible');
    });

    it('Deve exibir o título "O Podcast mais animado do Mundo Ágil”', () => {
      cy.get('.title')
        .find('#title')
        .should('be.visible')
        .should('have.text', '“O Podcast mais animado do Mundo Ágil”');
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
      cy.get('.background-fullscreen')
        .should('be.visible')
        .should('have.css', 'height', '810px')
        .should('have.css', 'width', '1400px');
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
    cy.get('')
  })
  });
});
