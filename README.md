# REST API de Exemplo com Node, Express, Typescript e MongoDB

Este é um projeto de exemplo de uma REST API que demonstra como criar uma aplicação básica de CRUD (Create, Read, Update, Delete) utilizando Node.js, Express.js, Typescript e MongoDB.

## Configuração

Antes de começar a usar esta API, certifique-se de que você tenha o Node.js e o MongoDB instalados em seu sistema.

### 1. Clone o repositório

```bash
git clone https://github.com/Kiwiabacaxi/ts-node-mongo-rest-api.git
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor
Em `src/index.ts` altere a variável 'MONGO_URL' para a URL do seu banco de dados MongoDB.

```js
const MONGO_URL = "";
```

### 4. Teste a API

```bash
npm start
```

## Rotas da API

### Rotas de Usuários

- `GET /users`: Obtém uma lista de todos os usuários. Requer autenticação.

- `DELETE /users/:id`: Deleta um usuário específico baseado no `id` fornecido. Requer autenticação e que o usuário autenticado seja o proprietário do usuário a ser deletado.

- `PATCH /users/:id`: Atualiza um usuário específico baseado no `id` fornecido. Requer autenticação e que o usuário autenticado seja o proprietário do usuário a ser atualizado.

### Rotas de Autenticação

- `POST /auth/register`: Registra um novo usuário. Espera um corpo de requisição contendo detalhes do novo usuário.

- `POST /auth/login`: Autentica um usuário existente. Espera um corpo de requisição contendo credenciais do usuário.

## Autenticação

A autenticação é baseada em cookies. Certifique-se de incluir um cookie de autenticação válido nas solicitações para acessar rotas protegidas.

## Testando a API com Postman

Você pode usar o Postman para testar as diferentes rotas da API. Certifique-se de incluir os cookies de autenticação nas solicitações protegidas.

## Créditos

Este projeto foi baseado no trabalho de [Antonio Erdeljac](https://github.com/AntonioErdeljac). Você pode assistir ao vídeo tutorial no [YouTube](https://www.youtube.com/watch?v=b8ZUb_Okxro).