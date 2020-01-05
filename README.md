# ecommerce

## Descrição do Projeto

Construir um ecommerce no formato de marketplace.

- Requisitos

  - Sistema operacional: Windows, Mac ou Linux
  - Browser (Google Chrome, Firefox, etc...)
  - [Node.JS](https://nodejs.org/en/) - V.10.16.3

- Front

  - Projeto iniciado com [create-react-app](https://github.com/facebook/create-react-app)

  - Dependências
    - Material UI - `npm install @material-ui/core`
    - Material Icon - `npm install @material-ui/icons`
    - React Router - `npm install react-router-dom`
    - Redux Logger - `npm install redux-logger`
    - Redux Thunk - `npm install redux-thunk`
    - Redux - `npm install redux`
    - React Redux - `npm install react-redux`
    - React Router - `npm install react-router-dom`
    - Pagarme - `npm install pagarme`

- Back

  - [API - Pagarme](https://github.com/pagarme/pagarme-js)

<hr>

## Iniciar projeto

### Local

- Clone o repositório (Terminal)

  - escolher diretório (exemplo) `cd Documents`
  - clonar repositório `git clone https://github.com/bucceroni/ecommerce.git`

- API

  - Gerar API Key - [Instruções](https://docs.pagar.me/reference)
  - Criar arquivo .env e adicionar código abaixo substituindo a API Key

  ```
  REACT_APP_API_KEY = API Key
  ```

  - Não esquecer de adicionar o arquivo .env no .gitignore

- Inicie o projeto (Terminal)
  - `cd ecommerce`
  - Instalar dependências `npm install`
  - Iniciar APP `npm start`
  - acessar URL `http://localhost:3000/`

<hr>

## Deploy

- Heroku
  - Aplicação disponível em:
  - [https://ecommerce-pagarme.herokuapp.com/](https://ecommerce-pagarme.herokuapp.com/)

<hr>
