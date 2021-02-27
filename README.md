<!---</p>
<h1 align="center">
    <img alt="Proffy" title="#Proffy 2" src="./Prints/1.png" />
</h1>-->
<h1 align="center">
    <img alt="Proffy" src="./Prints/logo.svg" height="100px" />
    <br> 🚀 <strong> Proffy - 2º NLW</strong> 🚧
</h1>

<br>

<p align="center">
   <img src="https://img.shields.io/badge/version-0.0.1-yellow.svg" />
  
  <a href="https://github.com/savio-2-lopes">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
 
 <a href="https://github.com/savio-2-lopes">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-blue.svg" target="_blank" />
  </a>
</p>

<br> 

## :pushpin: Índice

- [Sobre](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Layout](#layout)
- [Como Executar](#executar)
- [Tecnologias utilizadas](#tecnologias)
- [Licença](#licenca)
- [Autor](#autor)

<br>

<a id="sobre-o-projeto"></a>

## 💻 Sobre o projeto

:memo: **Proffy** - é uma forma de conectar professores particulares a estudantes interessados de maneira mais rápida e intuitiva.

Projeto desenvolvido durante a **2º edição da NLW - Next Level Week** oferecida pela [Rocketseat](https://blog.rocketseat.com.br).

<br>

<a id="funcionalidades"></a>

## ⚙️ Funcionalidades

- [x] Os professores interessados podem se cadastrar na plataforma web enviando:
  - [x] Matérias
  - [x] Imagem/Avatar do professor(a)
  - [x] Nome do professor(a)
  - [x] Preço/Hora
  - [x] Dias e Horário de atuação de serviço
  - [x] Número para contato

- [x] Os estudantes tem acesso ao aplicativo móvel, onde podem:
  - [x] filtrar os professores cadastrados por máterias, dias da semanas e horários disponiveis.
  - [x] entrar em contato com a entidade através do WhatsApp

<br>

<a id="layout"></a>

## 🎨 Layout

### Mobile

<p align="center">
  <img alt="NextLevelWeek2" title="#NextLevelWeek2" src="./Prints/5.png" width="100px">
  <img alt="NextLevelWeek2" title="#NextLevelWeek2" src="./Prints/6.png" width="100px">
  <img alt="NextLevelWeek2" title="#NextLevelWeek2" src="./Prints/7.png" width="100px">
  <img alt="NextLevelWeek2" title="#NextLevelWeek2" src="./Prints/12.png" width="100px">
  <img alt="NextLevelWeek2" title="#NextLevelWeek2" src="./Prints/9.png" width="100px">
  <img alt="NextLevelWeek2" title="#NextLevelWeek2" src="./Prints/10.png" width="100px">
</p>

<br>

### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="NextLevelWeek2" title="#NextLevelWeek2" src="./Prints/1.png" width="200px">
  <img alt="NextLevelWeek2" title="#NextLevelWeek2" src="./Prints/11.png" width="200px">
  <img alt="NextLevelWeek2" title="#NextLevelWeek2" src="./Prints/3.png" width="200px">
  <img alt="NextLevelWeek2" title="#NextLevelWeek2" src="./Prints/4.png" width="200px">
</p>

<br>

<a id="executar"></a>

## 🚀 Como executar o projeto

Este projeto é divido em três partes:
1. Backend (pasta server) 
2. Frontend (pasta web)
3. Mobile (pasta mobile)

💡Tanto o Frontend quanto o Mobile precisam que o Backend esteja sendo executado para funcionar.

<br>

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e o gerenciador de pacotes [Yarn](https://yarnpkg.com).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

<br>

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone git@github.com/savio-2-lopes/Next-Level-Week-2.git

# Acesse a pasta do projeto no terminal/cmd
$ cd Next-Level-Week-2

# Vá para a pasta server
$ cd server

# Instale as dependências
$ yarn add

# Execute a aplicação em modo de desenvolvimento
$ yarn run dev:server

# O servidor inciará na porta:3333 - acesse http://localhost:3333 

```

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone github.com/savio-2-lopes/Next-Level-Week-2.git

# Acesse a pasta do projeto no terminal/cmd
$ cd Next-Level-Week-2

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ yarn add

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

<br>

<a id="tecnologias"></a>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[React-scripts](https://github.com/facebook/create-react-app/tree/master/packages/react-scripts)**
-   **[React-dom](https://github.com/facebook/react/tree/master/packages/react-dom)**
-   **[Typescript](https://github.com/microsoft/TypeScript)**

#### **Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[KnexJS](http://knexjs.org/)**
-   **[SQLite](https://github.com/mapbox/node-sqlite3)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**
-   **[Typescript](https://github.com/microsoft/TypeScript)**

#### **Mobile**  ([React Native](http://www.reactnative.com/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Expo](https://expo.io/)**
-   **[Expo Google Fonts](https://github.com/expo/google-fonts)**
-   **[Axios](https://github.com/axios/axios)**
-   **[React-dom](https://github.com/facebook/react/tree/master/packages/react-dom)**
-   **[React-native](https://github.com/facebook/react-native)**


<br>

<a id="licenca"></a>

## :memo: Licença

Este projeto está sob a licença do MIT. Veja a [página de licença](https://opensource.org/licenses/MIT) para mais detalhes.

<br>

<a id="autor"></a>

## 🦸 Autor

[![Github Badge](https://img.shields.io/badge/-Github-373737?style=flat&logo=Github&logoColor=white)](https://github.com/savio-2-lopes) 
[![Instagram Badge](https://img.shields.io/badge/-Instagram-8a3ab9?style=flat&logo=instagram&logoColor=white)](https://www.instagram.com/savioaugulopes/) 
[![LinkedIn Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/savio-lopes/) 
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat&logo=gmail&logoColor=white)](mailto:savio.dev.lopes@gmail.com) 

Feito com ❤️ por Savio Lopes 👋🏽 [Entre em contato!](https://www.linkedin.com/in/savio-lopes/)

<br>

<a id="agradecimento"></a>

## 💙 Agradecimentos

Obrigado [Rocketseat](https://rocketseat.com.br/) por disponibilizar esse conteúdo sensacional 🚀.
