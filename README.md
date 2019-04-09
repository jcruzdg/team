# teamChallenge

Este proyecto intenta dar una solución a la prueba redactada para un "Fullstack developer".
Este readme asume que ya tiene conocimientos básicos sobre **node.js** y su instalador de paquetes **npm**

## Instalación.

Una vez clonado el proyecto, navegar a la carpeta raíz del proyecto c:/team/teamChallenge
E ingresar el comando:

```bash
npm install
```

Instalar Sails.js v.1.0 de manera global.

```bash
npm install sails -g
```

**Más info en:** [Sails](https://sailsjs.com/get-started)

![alt text](https://sailsjs.com/images/logos/sails-logo_ltBg_ltBlue.png)

## Iniciar servidor

Una vez instaladas las dependencias el proyecto, sólo requiere el siguiente comando para iniciar el servidor de Sails.

```bash
sails lift
```

## Instalar MongoDb

Para este ejericio se requiere isntalar e iniciar mongodb:

Seguir las instrucciones de la [documentación oficial](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/).

- al finalizar la instalación, se debe crear una base llamada "team". [Comparto éste link](https://www.quackit.com/mongodb/tutorial/mongodb_create_a_database.cfm), como guía.


Por defecto al inicar mongodb, el puerto que escucha los cambios en el driver es: "27017".

Sí se desea cambiar el puerto por defecto dentro del proyecto, navegar al archivo:

.../config/datastores.js

```bash
default: {
    adapter: 'sails-mongo',
    url:'mongodb://localhost:27017/team'
  },
```

## Ejecutando pruebas:

La función a evaluar se puede acceder por medio de la siguiente ruta con un verbo **HTTP POST:**

```bash
{
"dna": ["AGGACT",
		"TATTTC",
		"CAATTT",
		"CATAGG",
		"ACCAGG",
		"TTGTAC"]
}
```

```bash
http://jlcdche-alb-team-199181831.us-east-2.elb.amazonaws.com/v1/mutation
```

Para obtener las estadísticas de las mutaciones, se debe realizar una petición **HTTP GET**

```bash
http://jlcdche-alb-team-199181831.us-east-2.elb.amazonaws.com/v1/stats
````

## Unit testing & coverage

Para ejecutar las pruebas unitarias se utilizó la librería [mocha](https://mochajs.org/).

```bash
npm test
````

```bash
npm run coverage
````

![alt text](https://camo.githubusercontent.com/af4bf83ab2ca125346740f9961345a24ec43b3a9/68747470733a2f2f636c6475702e636f6d2f78465646784f696f41552e737667)

## Para evaluar el código "limpio" & best practice:

Se utilizó [lint](https://eslint.org/)

Para ejecutar: 

```bash
npm run lint
````

## Features
- Esta solución asume que se recibirán arreglos de la misma dimensión, n filas x n columnas.
- Se debe considerar que la función evalua si dentro del arreglo que recibe sólo se contienen letras: A,T,C,G; en caso contrario, se determina que se trata de un arreglo incompatible y regresará una respuesta: **403 Forbidden.**
- Se agregó el recurso REST "/stats" para visualizar los resultados estadísticos de las evaluaciones de ADN.
- La solución está desplegada en un servidor Nginx, dentro de un EC2 de AWS, con un balanceador de carga denfinido para el crecimiento automático de los servidores en un plano horizontal de ser necesario.
- La aplicación de Sails.js está inicializada con el paquete [pm2](http://pm2.keymetrics.io/) para asegurar que en caso de fallo de aplicación, éste proceso se volverá a ejecutar automáticamente.
- Para dicha solución se ha utilizado una base de datos mongodb para la persistencia de datos, gestionado con el ORM
 [waterline](http://waterlinejs.org/).

![alt text](https://camo.githubusercontent.com/fda800f7fab38baffcf951761d8c1e97f3af6533/687474703a2f2f692e696d6775722e636f6d2f33587168364d7a2e706e67)
