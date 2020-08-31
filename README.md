# Farmacia en Turno - Backend

## 1. Frameworks Utilizados

- VueJS 2.6
- Bootstrap 4.5

## 2. Requerimientos

### 2.1 Requerimientos mínimos en el servidor

- Memoria ram 512MB
- 1 vCPU
- 1 GB SSD

### 2.2 Técnicos

- Node >= 8.9.0
- Npm >= 5.5.1

## 3. Instalación Desarrollo

Se debe clonar el repositorio perteneciente al proyecto, este proyecto está bajo el software de control de
versiones llamado git y hospedado en GitHub, para clonar el repositorio se debe ejecutar el siguiente comando,

    git clone https://github.com/OscarLeon/be-pharmacies.git

> Este comando te pedirá autenticación, deberás autenticarte con tu usuario y constraseña.

Una vez autenticado comenzara la clonación del repositorio. Este repositorio contiene el proyecto, sin las librerías
externas de JavaScript utilizadas, por ende, se debe a proceder a instalarlas de la forma que se describe a continuación:

Cuando esté el repositorio clonado, se deberá ingresar a él, está ubicado en el directorio `be-pharmacies`
que se acabó de crear al ejecutar el comando anterior.

    cd be-pharmacies

Luego, la instalación de las librerias JS necesarias:

```
npm install
```

### Compilando para desarrollo

```
npm run watch (Uso de nodemon para estar atento a los cambios)
```

### Compilando para producción

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

## 4. Pasos para ejecutar la aplicación

Paso 1: Ejecutamos el siguiente comando para tener el servidor ejecutandose de modo que si existen cambios se autorefresque

```
npm run watch
```

Paso Final: Luego escribimos en nuestro navegador la siguiente url para ver la api este funcionando correctamente

```
http://localhost:3000/commune/7
http://localhost:3000/pharmacy
```

Paso Extra: Como valor adicional se incluye Swagger, un entorno para testear APIs, por lo que si deseas testearlas puedes ingresar al siguiente enlace:

```
http://localhost:3000/api/
```

## 5. Soporte

En caso de necesitar ayuda contactar a:

- oleon.icci@gmail.com
