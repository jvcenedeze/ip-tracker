# ip-tracker
Projeto realizado utilizando VueJS, Vuex, Axios, Bootstrap e dependências do Node.js para melhora do projeto. O projeto inicialmente ao ser acessado faz uma requisição na API do geo.ipify onde é devolvido dados sobre a pessoa que está acessando, que são IP, cidade, geolocalização (latitude e longitude) e o provedor que está utilizando. Após isso é feito uma nova requisição na API de base de dados de mapa mapbox, onde o leaflet é utilizado para mostrar o mapa, e é criado um marcador na geolocalização obtida. Todas essas informações e o mapa são mostrados na tela ao final do carregamento, sendo também possível digitar o IP desejado na barra de pesquisas que toda essa rota é refeita para mostrar os dados e a geolocalização do novo IP.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
