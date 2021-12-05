# Documentacion prueba synerfy

Esta aplicacion se creo con [Create React App](https://github.com/facebook/create-react-app).

## Scripts

En la carpeta del proyecto ejecutar:

## `npm install`

Descargara e instalara todas las dependencias del package.json.

## `dependencias`

"@testing-library/jest-dom": "^5.16.0": Instala jest utlizada para realizar pruebas que afirmen varias cosas sobre el estado del DOM esta libreria es intalada y configurada por [Create React App](https://github.com/facebook/create-react-app).

"@testing-library/react": "^11.2.7": Para trabajar con componentes de React esta libreria es intalada y configurada por [Create React App](https://github.com/facebook/create-react-app).

"@testing-library/user-event": "^12.8.3": Es una biblioteca complementaria para Testing Library que proporciona una simulación más avanzada de las interacciones del navegador esta libreria es intalada y configurada por [Create React App](https://github.com/facebook/create-react-app).

"materialize-css": "^1.0.0-rc.2": Dependencia utilizada para crear el diseño de la aplicacion al estilo material.

"nodemailer-react": "^1.0.1": Este paquete tiene como objetivo simplificar el uso de Nodemailer para enviar emails, junto con las plantillas React.

"react": "^17.0.2": React esta libreria es intalada y configurada por [Create React App](https://github.com/facebook/create-react-app)

"react-dom": "^17.0.2": proporciona métodos específicos del DOM esta libreria es intalada y configurada por [Create React App](https://github.com/facebook/create-react-app)

"react-router-dom": "^5.2.0": Dependencia utilizada para crear las rutas dentro de la aplicacion

"react-scripts": "4.0.3": Este paquete incluye scripts y la configuración utilizados por Create React App esta libreria es intalada y configurada por [Create React App](https://github.com/facebook/create-react-app).

"web-vitals": "^1.1.2": biblioteca modular para medir todas las métricas de Web Vitals en usuarios reales esta libreria es intalada y configurada por [Create React App](https://github.com/facebook/create-react-app)


### `npm start`

Ejecuta la aplicación en el modo de desarrollo.
Abre la ruta  [http://localhost:3000](http://localhost:3000) en el navegador.

Cualquier cambio guardado en la aplicacion recargara la pagina.\
Podra ver cualquier error en la consola.

### `npm test`

Lanzara las pruebas creadas en el proyecto.\
Ver [running tests](https://facebook.github.io/create-react-app/docs/running-tests) para mas informacion.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`. \
Agrupa correctamente React en el modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hash. \
¡Tu aplicación está lista para implementarse!

Mas informacion [deployment](https://facebook.github.io/create-react-app/docs/deployment).

### `npm run eject`

**Nota: esta es una operacion de un solo sentido. una vez ejecutado `eject`, no puedes volver atras!**

Si no está satisfecho con la herramienta de compilación y las opciones de configuración, puede "expulsar" en cualquier momento. Este comando eliminará la dependencia de compilación única de su proyecto.

En su lugar, copiará todos los archivos de configuración y las dependencias transitivas (paquete web, Babel, ESLint, etc.) directamente en su proyecto para que tenga un control total sobre ellos. Todos los comandos excepto `eject` seguirán funcionando, pero apuntarán a los scripts copiados para que pueda modificarlos. En este punto, estás solo.

No es necesario que utilices nunca "eject". El conjunto de funciones seleccionadas es adecuado para implementaciones pequeñas y medianas, y no debe sentirse obligado a utilizar esta función. Sin embargo, entendemos que esta herramienta no sería útil si no pudiera personalizarla cuando esté listo para usarla..



