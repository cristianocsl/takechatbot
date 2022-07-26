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
