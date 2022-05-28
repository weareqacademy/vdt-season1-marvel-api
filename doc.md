

# Viver de Teste 1.ª Temporada

<h1 align="left">
    <img src=".github/logo.svg" width="250px">
</h1>

# Marvel API

## 🔖 Requisitos funcionais

### Cadastro de Personagens

- [ ] Deve poder cadastrar um personagem com as seguintes características:
| campos | descrição                             | tipo     | obrigatório |
| ------ | :------------------------------------ | -------- | ----------- |
| name   | nome do personagem                    | texto    | sim         |
| age    | idade                                 | inteiro  | não         |
| alias  | codinome                              | texto    | sim         |
| team   | afiliações (vingadores, x-men, etc..) | lista    | sim         |
| active | se o personagem está ativo ou não     | booleano | sim         |
- [ ] Deve retornar o id do personagem ao realizar o cadastro
- [ ] Não deve cadastrar personagem com nome duplicado
- [ ] Com exceção da idade, todos os campos são obrigatórios

### Busca de Personagens

- [ ] Deve retornar uma lista de personagens cadastrados
- [ ] Deve retornar uma lista vazia caso não existam personagens
- [ ] Deve poder buscar por personagem por nome
- [ ] Deve poder buscar personagem pelo id
- [ ] Deve retornar 404 ao buscar por id não cadastrado

### Remover Personagem

- [ ] Deve poder remover por id, um personagem cadastrado
- [ ] Deve retornar não encontrado ao remover por id não cadastrado

## 🚀 Tecnologias

- [Node.js] - plataforma de desenvolvimento
- [Express] - framework onde a API foi construída
- [Cypress] - framework de testes automatizados
- [MongoDB] - Banco de dados (Não relacional)

## 👨🏻‍💻 Como executar o projeto

[Node.js](https://nodejs.org/) v16 ou superior para executar.

Execute os comandos abaixo para instalar das dependências do projeto e execução dos testes:

```sh
cd marvel-api-cypress-vdt1
npm i
npx cypress run
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feito com 💜 &nbsp;por Fernando Papito 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/papitoio/)
