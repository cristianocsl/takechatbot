# Take Chatbot API

Esta API foi desenvolvida para a etapa técnica do processo de seleção da _*Take Blip e consiste em uma integração à API pública do GitHub para filtrar informações e trazer os 5 repositórios com linguagem C# cujas datas de criação sejam as mais antigas e ordená-los de forma crescente, a partir da data de criação.

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
