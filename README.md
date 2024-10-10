
# Calculo de Distância por CEP

Este projeto é um serviço de cálculo de distância entre dois CEPs, baseado nas coordenadas geográficas obtidas a partir dos CEPs de origem e destino.

## Descrição do Projeto

O sistema permite calcular a distância entre dois locais no Brasil fornecendo apenas os CEPs de origem e destino. O projeto usa uma API pública para obter os dados de latitude e longitude dos CEPs e realiza o cálculo da distância em quilômetros entre os dois pontos.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript para o backend.
- **NestJS**: Framework para construção do serviço API.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **Geolib**: Biblioteca utilizada para calcular a distância entre as coordenadas geográficas (latitude e longitude).

## Funcionalidades

- **Cálculo de distância**: O sistema recebe dois CEPs (origem e destino), busca as coordenadas geográficas de ambos e calcula a distância entre eles em quilômetros.

## Como Utilizar

### 1. Clonar o repositório:

```bash
git clone https://github.com/vinicads/calculoDistancia.git
```

### 2. Instalar as dependências:

Navegue até o diretório do projeto e instale as dependências com o comando:

```bash
npm install
```

### 3. Configurar as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
apiCEP=https://cep.awesomeapi.com.br/json
```

Esta API é pública e fornece os dados de latitude e longitude para os CEPs informados. Mais detalhes podem ser encontrados na documentação da [API AwesomeCEP](https://cep.awesomeapi.com.br/).

### 4. Executar o projeto:

```bash
npm run start:dev
```

Agora você pode acessar o serviço e realizar cálculos de distância fornecendo dois CEPs.

## Exemplo de Uso

Ao enviar dois CEPs, o sistema retornará a distância em quilômetros entre eles. Por exemplo:

```json
{
  "de": "xxxxxxxx",
  "para": "xxxxxxxx",
}
```

E, como retorno, teremos 
```json
{
  "distancia": "xxxxxxxx",
}
```

## API Usada

Utilizamos a API pública **AwesomeCEP** (`https://cep.awesomeapi.com.br/json`), que retorna os dados completos de um CEP, incluindo as coordenadas geográficas (latitude e longitude), o que possibilita o cálculo preciso da distância entre dois pontos.

