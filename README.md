---

# Testes de Integração Cypress para Pipoca Ágil

Neste repositório, você encontrará os testes de integração Cypress para a aplicação Pipoca Ágil. Esses testes garantem que a aplicação funcione conforme o esperado e mantenha um alto nível de qualidade.

## O que será feito

Os testes de integração incluem:

- Testes de renderização de página
- Testes de responsividade em diferentes tamanhos de tela
- Testes de navegação e links
- Testes de cores, estilos e animações
- Testes de funcionalidade de vídeos
- Testes de acessibilidade
- Testes de carregamento de página
- Testes de redimensionamento de imagens
- Testes de compatibilidade com navegadores

## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/): Framework de teste de código aberto para aplicativos web.
- [Angular](https://angular.io/): Estrutura de desenvolvimento de aplicativos web.
- [Node.js](https://nodejs.org/): Ambiente de tempo de execução JavaScript utilizado para executar os testes.

## Como Rodar os Testes

Siga estas etapas para executar os testes em seu ambiente local:

1. **Clonar o Repositório**:

   ```shell
   git clone https://github.com/RenatoPereirals/PipocaAgilPodecast-testes.git
   ```

2. **Instalar Dependências**:

   Certifique-se de ter o Node.js instalado. Em seguida, navegue até o diretório do projeto e execute:

   ```shell
   cd PipocaAgil
   npm install
   ```

3. **Executar os Testes**:

   Para iniciar os testes de integração, utilize o seguinte comando:

   ```shell
   npx cypress open
   ```

   Isso abrirá a interface do Cypress, onde você pode selecionar e executar testes individualmente ou todos de uma vez.

4. **Observações Importantes**:

   - Certifique-se de que a aplicação Pipoca Ágil esteja em execução localmente ou em um ambiente acessível para que os testes possam interagir com ela.
   - Os testes de compatibilidade com navegadores podem exigir configurações adicionais, dependendo do ambiente. Certifique-se de que os navegadores alvo estejam instalados e acessíveis.

## Contribuição

Sinta-se à vontade para contribuir com novos testes, melhorias ou correções. Abra um problema ou envie uma solicitação de pull.

---

Este README fornece informações sobre o que os testes de integração Cypress fazem, as tecnologias usadas e como executá-los em seu ambiente local. Certifique-se de personalizar os URLs de clonagem e as instruções de acordo com o seu repositório e configuração específicos.
