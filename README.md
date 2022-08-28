# DESAFIO FINAL PARTE 1

## Requisitos
É necessário ter o NodeJS instalado!
[NodeJS](https://nodejs.org/en/)


## Para inicializar, é necessário executar os seguintes comandos:

### Clona este repositório
```
$ git clone https://github.com/Desafio4Grupo2/CompassStoreExecutados.git
```
### Acessa a pasta do projeto
```
$ cd DesafioFinalCompilados
```
### Instala as dependências
```
$ npm install
```

## Com todas as dependências instaladas, já é possível iniciar o projeto!


```bash
// Inicia a aplicação em localhost:3000
$ npm run dev

```

## Endpoints
|       Route           |    Method    |                                                                   
|   ---------------     | :----------: |
|  `/product/:id`       |    GET       | 
|  `/product`           |    GET       | 
|  `/product`           |    POST      |   
|  `/product/:id`       |    PUT       |                                                        
|  `/product/:id`       |    DELETE    |

## Schemas

### Product Table
|    FieldName   |    Type   | Required | Unique |
|----------------|:---------:|:--------:|:------:|
| `id`           | ObjectId  | true     | true   |
| `cpf`          | String    | true     | true   |
| `name`         | String    | true     | false  |
| `birthday`     | String    | true     | false  |
| `email`        | String    | true     | true   |
| `password`     | String    | true     | false  |
| `cep`          | String    | true     | false  |
| `uf`           | String    | true     | false  |
| `city`         | String    | true     | false  |
| `address`      | String    | true     | false  |
| `number`       | String    | true     | false  |
| `complement`   | String    | false    | false  |
| `neighborhood` | String    | true     | false  |
