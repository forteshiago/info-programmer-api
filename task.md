## Tarefa

- [] Criar API com um CRUD (Create, Read, Update, Delete) de dados de programadores.

- [] Os dados dos programadores cadastrados deve conter nome, sobrenome, idade, empresa e lista de tecnologias que domina.

_Obs: Somente o back, com Express e testando as rotas no Insomnia!_

## Informações para execução

- Aplicação rodando na porta 7676

- Rotas: 
    ■ GET       http://localhost:7676/programmers
    ■ POST      http://localhost:7676/programmers
    ■ PUT:      http://localhost:7676/programmers/"idCadastrado"
    ■ DELETE:   http://localhost:7676/programmers/"idCadastrado"

- Exemplo de objeto para estrutura
    {
        "nome":"Mario",
        "sobrenome":"Bros.",
        "idade":"35",
        "empresa":"Nintendo",
        "tecnologias":["nodejs"]
    }