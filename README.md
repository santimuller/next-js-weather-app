# 🌞 WeatherApp


#### ⚛ Tecnologías
EL proyecto fue realizado con las tecnologías: NextJS, TypeScript, Tailwindcss, Cypress y Jest, también express para guardar las rutas personalizadas en el servidor.
Las APIs que se utilizaron fueron las siguientes: OneCall API de openweathermap.org y para conseguir la ubicación del usuario se uso ip-api.com 

### Sobre el Proyecto
El proyecto consiste en mostrar el clima de mi ciudad actual rastreando la localización usando ip-api, junto con el de las 5 ciudades a elección. Una vez que se selecciona una ciudad cuenta con el seguimiento expandido del clima durante los próximos 5 días.

## Levantar Entorno

Para correr el proyecto en entorno de test se usa:

```bash
yarn dev
```
Para generar el build y luego correr el proyecto en modo producción
```bash
yarn build
yarn start
```

Una vez que esté corriendo podes entrar desde tu browser de preferencia ingreando a:  [http://localhost:3000](http://localhost:3000)

###  🧪 Tests
##### Cypress
Para correr los test end-to-end con cypress se usa el siguiente comando:
```bash
yarn cypress:open
```
##### Jest
Para correr los test unitarios y chequear que los snapshots esten bien:
```bash
yarn test
```


### Mejoras Pendientes


Mejoras que haría:
- Implementación de Store: Algo que no me convenció fue pegarle a la API tanto en la home como en la sección /clima, ya que trae la misma data, en caso de usar store (Context,Redux, etc..) o LocalStorage, Cookies quedaria guardada la  data y no pediria 2 veces los datos. 
Esto haría tambien que no sea necesario pasar los párametros en la uri como por ej el nombre  de la ciudad que es algo que no me devolvía la API

- Los estilos custom dejarlos más ordenados o si se usarian en otras pantallas los agregaria en un ui kit o componente

- Paginas de error más personalizadas

- Test en los payload de las APIs

- Componente para la tipografía del sitio 

- En caso de que crezca implementaria Storybook para ver los componentes que tienen que ver con ui

- Optimización de imágenes para mejorar la carga, oscurecer un poco las de la home para que el blanco del texto no se pierda con la imágen del fondo y sea más accesible para los usuarios
- Sacaría los iconos de weatherAPI y usaría unos custom que vayan acorde al diseño

### Notas
- Tuve que hacer una lógica fea en el front para cortar el periodo de 7 días a 5 que es lo que se pide! eso hizo que
tenga que correr un día con el index + 1 cuando muestro el periodo de pronóstico,  ya que arrancaba con el día de hoy y esa información se estaba mostrando en el banner previamente.
- Me pareció muy copada dynamic la funcionalidad de NextJS que funciona como React.lazy() solo que del lado del server
- Para pedir la data no hice uso de getInitialProps/getServerSideProps que hacen las peticiones en el  server y opte hacerlas en el useEffect para hacerlas client-side. 


  





