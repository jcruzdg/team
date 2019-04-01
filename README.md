# teamChallenge

Este proyecto intenta dar una solución a la prueba redactada para un "Fullstack developer".
Ésta readme asume que ya tiene conocimientos básicos sobre **node.js** y su instalador de paquetes **npm**

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

**Más info en:**

[Sails](https://sailsjs.com/get-started)

## Iniciar servidor

Una vez instaladas las dependencias el proyecto, sólo requiere el siguiente comando para iniciar el servidor de Sails.

```bash
sails lift
```

## Ejecutando pruebas:

La función a evaluar se puede acceder por medio de la siguiente ruta con un verbo **Http POST:

```bash
http://18.223.160.88:1337/v1/mutation
```

## Features
- Se debe considerar que la función evalua si dentro del arreglo que recibe sólo se contienen letras: A,T,C,G; en caso contrario, se determina que se trata de un arreglo incompatible y regresará una respuesta: **403 Forbidden.
- La solución está desplegada en un servidor Nginx, dentro de un EC2 de AWS, con un balanceador de carga denfinido para el crecimiento automático de los servidores en un plano horitzontal de ser necesario.
- La aplicación de Sails.js está inicializada con el paquete **pm2** para asegurar que en caso de fallo de aplicación, éste proceso se volverá a ejecutar automáticamente.
[pm2](http://pm2.keymetrics.io/)
- Para dicha solución se ha utilizado una base de datos mongodb para la persistencia de datos, gestionado con el ORM
 waterline.
[waterline](http://waterlinejs.org/)
