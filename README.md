# DESAFIO FINAL PARTE 1

## Requisitos
É necessário ter o NodeJS instalado! 
[NodeJS](https://nodejs.org/en/)


## Para inicializar, é necessário executar os seguintes comandos:

### Clona este repositório
```
$ git clone https://github.com/VitoriaStefany/DesafioFinalCompilados.git
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


```
// Inicia a aplicação em localhost:3000
$ npm run dev

```

## Endpoints
|       Route         |    Method    |                                                                   
|   ---------------   | :----------: |
|  `/product/:id`     |    GET       | 
|  `/product`         |    GET       | 
|  `/product`         |    POST      |   
|  `/product/:id`     |    PUT       |                                                        
|  `/product/:id`     |    DELETE    |

## Schemas

### Product Table
|    FieldName            |    Type   | Required | Unique |
|-------------------------|:---------:|:--------:|:------:|
| `title`                 | String    | true     | false  |
| `description`           | String    | true     | false  |
| `departament`           | String    | true     | false  |
| `brand`                 | String    | true     | false  |
| `password`              | String    | true     | false  |
| `price`                 | Number    | true     | false  |
| `qtd_stock`             | Number    | true     | false  |
| `stock_control_enabled` | Boolean   | false    | false  |
| `bar_codes`             | String    | true     | true   |
