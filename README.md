# 🛒 Ferremás - E-Commerce de Repuestos

Este proyecto es una tienda virtual de repuestos llamada **Ferremás**, desarrollada como parte de la Evaluación Parcial de la asignatura ASY5131. Incluye funcionalidades de comercio electrónico, autenticación de usuarios, integración con Webpay (modo sandbox) y consulta de tipo de cambio USD/CLP desde el Banco Central de Chile.

---

## 🚀 Tecnologías Utilizadas

- **Frontend**: [Ionic](https://ionicframework.com/) + [Angular](https://angular.io/)
- **Backend**: [Node.js](https://nodejs.org/) con [Express](https://expressjs.com/)
- **Base de Datos**: [MySQL](https://www.mysql.com/) (usado con XAMPP y HeidiSQL)
- **API de pago**: [Transbank Webpay Sandbox](https://transbankdevelopers.cl/)
- **API externa**: [mindicador.cl](https://mindicador.cl) (tipo de cambio USD/CLP)

---

## 📁 Estructura del Proyecto

FERREMAS_IONIC/
├── backend-ferremas/
│ ├── index.js
│ ├── routes/
│ │ ├── productos.routes.js
│ │ ├── usuarios.routes.js
│ │ ├── webpay.routes.js
│ │ └── divisas.routes.js
│ ├── servicios/
│ └── package.json
├── src/
│ └── app/
│ ├── admin/
│ │ └── adproductos/
│ ├── carrito/
│ ├── compartido/
│ ├── contacto/
│ ├── guards/
│ ├── inicio/
│ ├── login/
│ ├── pago/
│ ├── pago-error/
│ ├── pago-exitoso/
│ ├── productos/
│ ├── registro/
│ └── servicios/
├── ionic.config.json
├── package.json



---

## ⚙️ Requisitos Previos

- Node.js (última versión LTS)
- Ionic CLI → `npm install -g @ionic/cli`
- MySQL con XAMPP y HeidiSQL
- Git (para clonar el repositorio)

Para importar la base de datos inicial:

-Abre XAMPP y accede a phpMyAdmin
-Crea una nueva base de datos llamada ferremas
-Ve a la pestaña "Importar"
-Carga el archivo ferremas_init.sql

---

## 🧪 Instalación y Ejecución

### 🔧 Backend

```bash
cd backend-ferremas
npm install
node index.js

El servidor correrá en: http://localhost:3000

### 🔧 Frontend

cd frontend
npm install
ionic serve
La app Ionic se abrirá en: http://localhost:8100


Usuarios de prueba

Admin:
  correo: admin@ferremas.cl
  clave: admin123

Usuario:
  correo: usuario@ferremas.cl
  clave: usuario123

Webpay Sandbox (simulación)
Utiliza los siguientes datos para simular pagos:

Tarjeta de prueba: 4051885600446623

Fecha vencimiento: 12/34

CVV: 123

RUT: 11.111.111-1


Endpoints principales (API)
Método	Endpoint	Descripción
GET	/api/productos	Obtener productos
POST	/api/usuarios/registro	Registrar usuario
POST	/api/usuarios/login	Login usuario
POST	/api/webpay/crear-transaccion	Iniciar pago Webpay (modo sandbox)
GET	/api/divisas/dolar	Obtener valor USD/CLP desde mindicador.cl


Notas Finales
Proyecto con arquitectura en capas (backend y frontend separados).

La API propia orquesta llamadas a Webpay y al Banco Central.

El backend está protegido contra intentos de transacción inválidos.

El login diferencia correctamente entre usuario y administrador.


Uso académico únicamente. Proyecto desarrollado para la Evaluación Parcial 2 del curso ASY5131.



## 📬 Pruebas con Postman (Formato Manual)

A continuación, se muestran ejemplos para probar los endpoints clave utilizando Postman.

---

### 🔐 1. Registro de Usuario

- **Método**: `POST`  
- **URL**: `http://localhost:3000/api/usuarios/registro`  
- **Headers**:  
  `Content-Type: application/json`  
- **Body (raw → JSON)**:
```json
{
  "nombre": "Juan Pérez",
  "correo": "juan@correo.cl",
  "clave": "123456"
}


### 🔐 2. Login de Usuario
Método: POST

URL: http://localhost:3000/api/usuarios/login

Headers:
Content-Type: application/json

Body (raw → JSON):
{
  "correo": "juan@correo.cl",
  "clave": "123456"
}

### 3. Obtener Productos
Método: GET

URL: http://localhost:3000/api/productos

No requiere body


### 4.Iniciar Transacción con Webpay
Método: POST

URL: http://localhost:3000/api/webpay/crear-transaccion

Headers:
Content-Type: application/json

Body (raw → JSON):

{
  "monto": 24990,
  "ordenCompra": "ORD123456"
}


### 5. Obtener Valor del Dólar
Método: GET

URL: http://localhost:3000/api/divisas/dolar

No requiere parámetros.
