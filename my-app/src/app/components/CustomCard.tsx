"use client";

import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg, Button } from "reactstrap";
import { useAppContext } from "../context/AppContext";

export default function CustomCard() {
  const { count, increment } = useAppContext(); // Acceso al contexto
  return (
    <Card className="mt-4" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <CardImg
        top width="100%" src="https://via.placeholder.com/400x200"
        alt="Imagen de ejemplo"
      />
      <CardBody>
        <CardTitle tag="h5">Card simple</CardTitle>
        <CardText>
          <strong>Interacciones : {count}</strong>
        </CardText>
        <Button color="primary" onClick={increment}>
          Incrementar
        </Button>
      </CardBody>
    </Card>
  );
}

/*
        <Button color="primary" onClick={() => alert("¡Botón del Card!")}>
          Acción
        </Button>
*/

/*
        <CardText>
          Este es un ejemplo de una tarjeta usando Reactstrap.
        </CardText>
*/