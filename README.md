# cadastro-de-clientes

## Comandos do Docker

### Inicia a aplicação em modo desenvolvedor
docker compose --profile dev watch

### Inicia a aplicação em modo de produção
docker compose --profile prod up

### Faz o build dos serviços de um profile
docker compose --profile prod build

### Lista os grupos de serviços do docker compose
docker compose ls

### Finaliza um grupo de serviços pelo nome
docker compose -p cadastro_de_clientes down

## Comandos do container postgress

### Acessa o banco de dados
psql -U postgres -d cadastro-clientes-db

### Lista cada registro da tabela users
SELECT * FROM users;