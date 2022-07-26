# Take Chatbot API

Esta API foi desenvolvida para a etapa técnica do processo de seleção da _**Take Blip**_. Ela consiste em uma integração à API pública do GitHub para filtrar e trazer informações dos 5 repositórios mais antigos da Take com linguagem C# e ordená-los de forma crescente, a partir da data de criação.

Um chatbot criado no portal da **Take Blip** utilizará esta API como fonte de informações.

# Endpoint GET <code>/repos</code>

A resposta à requisição GET na rota <code>/repos</code> consiste na apresentação das informações, conforme os critérios de seleção das informações dos repositórios com linguagem C# da Take, ordenados de forma ascendente a partir da data de criação.

```json
[
  {
    "language": "C#",
    "fullName": "takenet/library.data",
    "description": "Provides a simple abstraction for implementing the repository and unit of work patterns for data-enabled applications",
    "createdAt": "2013-10-25T13:04:51Z"
  },
  {
    "language": "C#",
    "fullName": "takenet/library.logging",
    "description": "Provides a simple logging interface for applications and some basic implementations of this interface",
    "createdAt": "2013-10-25T15:18:07Z"
  },
  {
    "language": "C#",
    "fullName": "takenet/libphonenumber-csharp",
    "description": "Forking original c# port",
    "createdAt": "2013-11-29T09:16:51Z"
  },
  {
    "language": "C#",
    "fullName": "takenet/Takenet.Radar",
    "description": "Radar de tecnologias takenet",
    "createdAt": "2014-01-13T11:38:38Z"
  },
  {
    "language": "C#",
    "fullName": "takenet/Takenet.ScoreSystem",
    "description": "Takenet score system",
    "createdAt": "2014-01-28T10:31:10Z"
  }
]
```

# Informações e instruções sobre os testes

Foram realizados os testes unitário da camada services e o teste de integração da API.

Para os testes unitários foi utilizada uma API simplificada que simula a API pública do GitHub, que foi utilizada na aplicação. Este mock da API está disponível [**aqui**] (https://62decf3d976ae7460be2be6d.mockapi.io/api/v1/takebliptest/repos).

Os testes unitários da camada services consistem na verificação dos seguintes tópicos:

**Em caso de sucesso na requisição à API do GitHub:
- deve retornar um array com tamanho 5;
- cada objeto do Array deve conter a chave 'language';
- cada objeto do Array deve conter a chave 'fullName';
- cada objeto do Array deve conter a chave 'description';
- cada objeto do Array deve conter a chave 'createdAt';
- A chave 'language' de cada objeto do Array deve conter o valor <code>C#</code>.

**Em caso de falha na requisição à API do GitHub:
- deve lançar a seguinte mensagem de erro: 'Não foi possível obter os repositórios'.

Na raiz do projeto, utiliza o comando <code>npm test</code> para rodas todos os arquivos de teste

### Estrutura da aplicação:
```shell
.
├── challenge
│   ├── Api
│   │   ├── controllers
│   │   │   ├── ReposController.js
|   |   |   ├── ReposController.spec.js
|   |   |   ├── ReposRouter.js
│   │   ├── helpers
│   │   │   ├── AxiosInstance.js
│   │   │   ├── url.js
│   │   ├── models
│   │   │   ├── ReposModel.js
│   │   ├── services
│   │   │   ├── ReposService.js
│   │   │   ├── ReposService.spec.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── Flow
│   │   ├── mybotflow.json
```

# Linguagem / ferramentas utilizadas

- linguagem: **JavaScript**
- ambiente de execução: **Node.js**
- framework: **Express**

- **Axios**: Cliente HTTP baseado em promessas para o navegador e Node.js
- **Dotenv**: gerenciador de variáveis de ambiente
- **HTTP Status Codes**: facilitador de acesso aos códigos de status
- **ESLint**: organização e padronização de código

- framework de teste unitário: **Jest**
- **SuperTest**: biblioteca npm para testar API a partir de simulações de requisições HTTP
