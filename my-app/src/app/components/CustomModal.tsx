"use client";

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function CustomModal() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Botón para abrir el Modal */}
      <Button color="primary" onClick={toggle}>
        Abrir Modal
      </Button>

      {/* Modal */}
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Primer Modal</ModalHeader>
        <ModalBody>
          ¡Este es un ejemplo de Modal con Reactstrap! Estamos aprendiendo Reactstrap!.
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cerrar
          </Button>
          <Button color="primary" onClick={() => alert("Acción confirmada")}>
            Confirmar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
