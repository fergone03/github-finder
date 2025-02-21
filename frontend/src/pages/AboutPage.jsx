// eslint-disable-next-line no-unused-vars
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const AboutPage = () => {
  return (
    <div className="container mt-5 " style={{ minHeight: "64vh" }}>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Acerca de este proyecto</h1>
          <p className="card-text">
            Este proyecto es una aplicación web diseñada para aprender y practicar la integración de APIs. 
            Está desarrollado como parte de mi investigación de cara a mis prácticas de Desarrollo de Aplicaciones Web (DAW).
          </p>
          <p className="card-text">
            Se exploran varias herramientas de desarrollo web, 
            como React para la construcción de interfaces de usuario en React y Bootstrap para el diseño responsivo y estilizado.
            PHP puro para la API. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage