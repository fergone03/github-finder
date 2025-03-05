<div align="left" style="position: relative;">
<img src="https://img.icons8.com/?size=512&id=55494&format=png" align="right" width="30%" style="margin: -20px 0 0 20px;">
<h1>Backend - INFO-REPOSITORIOS</h1>
<p align="left">
</p>
<p align="left">Construido con:</p>
<p align="left">
    <a href="https://skillicons.dev">
        <img src="https://skillicons.dev/icons?i=php">
    </a>
</p>
</div>
<br clear="right">

## 🔗 Tabla de Contenidos

- [📍 Resumen](#-resumen)
- [👾 Características](#-características)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🚀 Comenzando](#-comenzando)
  - [☑️ Prerrequisitos](#-prerrequisitos)
  - [🤖 Uso](#🤖-uso)

---

## 📍 Resumen

Este es el backend de la aplicación **INFO-REPOSITORIOS**, diseñado para gestionar la comunicación con las APIs y manejar la lógica del servidor. Está desarrollado con **PHP puro** y funciona como la capa de backend para el frontend basado en React.

---

## 👾 Características

- **API en PHP:** Implementada sin frameworks adicionales para mantener la simplicidad.
- **Manejo de solicitudes HTTP:** Procesa peticiones GET y POST para interactuar con la API.
- **Respuesta en JSON:** Devuelve datos estructurados para su fácil uso en el frontend.
- **Configuración ligera:** No requiere una base de datos externa, facilitando la implementación.
- **CORS habilitado:** Permite la comunicación fluida con el frontend.

---

## 📁 Estructura del Proyecto

```sh
backend/
├── README.md
└──── api.php

```

---

## 🚀 Comenzando

### ☑️ Prerrequisitos

Antes de ejecutar el backend, asegúrate de contar con lo siguiente:

- **PHP 7.4+**
- **Servidor local** (Apache o PHP CLI Server)

### 🤖 Uso

Ejecuta el servidor con PHP en el puerto `3000`:
```sh
❯ php -S localhost:3000 api.php
```

