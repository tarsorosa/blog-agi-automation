# Teste Técnico QA -- Automação Web (Blog do Agi)

## Sobre o Projeto

Este projeto tem como objetivo automatizar cenários de teste para a
funcionalidade de busca do blog do Agi:

https://blogdoagi.com.br/

A automação foi desenvolvida utilizando **Cypress**, com foco em validar
o comportamento da busca de artigos (ícone de lupa no canto superior
direito).

------------------------------------------------------------------------

## Objetivo do Teste

Validar a funcionalidade de pesquisa do blog, garantindo que o usuário consiga:
- Buscar conteúdos existentes 
- Receber feedback adequado ao buscar conteúdos inexistentes

------------------------------------------------------------------------

## Cenários Automatizados

Os cenários foram descritos utilizando o padrão BDD (Gherkin) para melhor legibilidade, 
porém a implementação foi feita utilizando Cypress sem framework BDD.

### Cenário 1: Pesquisa com termo existente

**Dado** que o usuário acessa o blog\
**Quando** ele realiza uma busca com um termo válido\
**Então** o sistema deve exibir resultados relacionados

------------------------------------------------------------------------

### Cenário 2: Pesquisa com termo inexistente

**Dado** que o usuário acessa o blog\
**Quando** ele realiza uma busca com um termo inválido\
**Então** o sistema deve exibir uma mensagem de "nenhum resultado"

------------------------------------------------------------------------

## Tecnologias Utilizadas

-   Node.js
-   Cypress
-   Mochawesome (geração de relatórios HTML)

------------------------------------------------------------------------

## Pré-requisitos

- Cypress (versão 15.x)
- Node.js (versão 18 ou superior)
- npm
- Google Chrome
- IDE (recomendado: Visual Studio Code)

------------------------------------------------------------------------

## Como Executar o Projeto

``` bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>
npm install
npm run cypress:run
```

------------------------------------------------------------------------

## Geração de Relatórios e screenshots 

Para gerar o relatório HTML consolidado, execute:

``` bash
npx mochawesome-merge cypress/reports/mochawesome*.json > cypress/reports/report.json
npx marge cypress/reports/report.json -f report -o cypress/reports
```
Após a execução dos testes, os artefatos são gerados automaticamente nos seguintes diretórios:

- Relatórios JSON: `cypress/reports/`
- Relatório HTML consolidado: `cypress/reports/report.html`
- Screenshots (em caso de falha): `cypress/screenshots/`

------------------------------------------------------------------------

## Autor

Projeto desenvolvido como parte de teste técnico para vaga de QA.
