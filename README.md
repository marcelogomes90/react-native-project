# React Native Project

Um projeto desenvolvido em React Native utilizando Expo e TypeScript. Este repositório contém uma aplicação móvel que utiliza as seguintes tecnologias.

## Tecnologias Utilizadas

- **React Native**: Biblioteca para criar aplicativos móveis utilizando JavaScript e React.
- **Expo**: Ferramenta e plataforma para construir aplicativos React Native de forma rápida e fácil.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Axios**: Cliente HTTP para fazer requisições a APIs.
- **React Hook Form**: Biblioteca para gerenciar formulários de maneira eficiente.
- **Yup**: Biblioteca para validação de esquemas de objetos, utilizada em conjunto com o React Hook Form.
- **Redux Toolkit**: Ferramenta para gerenciar o estado da aplicação de forma simples e eficiente.
- **Redux Persist**: Middleware para persistir o estado do Redux.
- **Async Storage**: Armazenamento local para dados persistentes em dispositivos móveis.
- **React Native Navigation**: Navegação entre telas na aplicação.

## Configuração do Projeto

Este projeto utiliza ferramentas de desenvolvimento para garantir a qualidade do código:

- **ESLint**: Ferramenta de linting para identificar e reportar padrões no código JavaScript.
- **Prettier**: Formatador de código para garantir um estilo consistente.
- **Husky**: Ferramenta para gerenciar hooks do Git e automatizar tarefas de desenvolvimento.

## Como Rodar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/marcelogomes90/react-native-project.git
   ```

2. **Acesse o diretório do projeto:**

   ```bash
   cd react-native-project
   ```

3. **Use a versão do Node especificada no projeto:**

   ```bash
   nvm use
   ```

4. **Instale as dependências:**

   ```bash
   yarn
   ```

5. **Crie um arquivo `.env` na raiz do projeto e adicione a chave `API_URL`:**

   ```env
   API_URL=https://sua-api.com
   ```

6. **Para rodar o projeto:**

   Para iOS:

   ```bash
   yarn ios
   ```

   Para Android:

   ```bash
   yarn android
   ```
