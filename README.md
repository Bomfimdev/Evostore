# EvoStore - E-Commerce Platform

Este projeto é uma aplicação completa de e-commerce chamada EvoStore, desenvolvida com frontend em React.js e backend em Java (Spring Boot).

## Estrutura do Projeto

O projeto está dividido em duas partes principais:

- **Frontend**: Desenvolvido em React.js, localizado em `/frontend`
- **Backend**: Desenvolvido em Spring Boot, localizado em `/backend`

## Tecnologias Utilizadas

### Frontend
- React.js (com hooks)
- React Router DOM para navegação
- Tailwind CSS para estilização
- Axios para chamadas HTTP

### Backend
- Spring Boot
- Spring Web
- Spring Data JPA
- H2 Database (banco de dados em memória)
- Lombok
- Swagger/OpenAPI para documentação da 

## Imagens do Projeto

### 1. Documentação da API (Swagger)
![Swagger API](./docs/swagger_api.png)

### 2. Tela Inicial
![Tela Inicial](./docs/tela_inicial.png)

### 3. Tela Inicial (Variante)
![Tela Inicial 2](./docs/tela_inicial2.png)


## Executando o Projeto

### Requisitos
- Node.js 16+
- Java 11+
- Maven

### Frontend

1. Navegue até o diretório do frontend:


2. Instale as dependências:


3. Execute o servidor de desenvolvimento:


O frontend estará disponível em `http://localhost:5173`

### Backend

1. Navegue até o diretório do backend:


2. Compile o projeto:


3. Execute a aplicação:


O backend estará disponível em `http://localhost:8080`

## Endpoints da API

### Keys
- `POST /keys` - Criar uma nova key
- `GET /keys` - Listar todas as keys
- `GET /keys/{id}` - Ver detalhes de uma key específica
- `DELETE /keys/{id}` - Excluir uma key

### Sessions
- `POST /sessions?keyId={keyId}` - Criar uma nova sessão para uma key
- `GET /sessions/{keyId}` - Buscar sessões de uma key específica
- `GET /sessions/details/{id}` - Buscar detalhes de uma sessão específica

## Documentação da API
A documentação da API está disponível através do Swagger UI, acessível em:
`http://localhost:8080/swagger-ui.html`

## Produtos
O sistema inclui os seguintes produtos:

- **Gold Bypass**
  - Mensal: R$1.140
  - Vitalício: R$3.450

- **FFX Bypass**
  - Mensal: R$680
  - Mensal + HB 30 dias: R$876

- **RTXPrivate**
  - Mensal: R$1.710

- **Engine Soul**
  - Diária: R$16
  - Semanal: R$86
  - Mensal: R$186

- **Hanbot**
  - Diária: R$9
  - Mensal: R$190

## Notas
- O frontend e o backend são independentes e podem ser executados separadamente.
- O backend utiliza um banco de dados H2 em memória, portanto os dados serão resetados quando o servidor for reiniciado.
- O console H2 está disponível em `http://localhost:8080/h2-console`