"use client";

import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function CustomForm() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Valor enviado: ${inputValue}`);
    setInputValue("");
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-4">
      <FormGroup>
        <Label for="exampleInput">Nombre:</Label>
        <Input
          id="exampleInput" name="text"
          placeholder="Escriba acá su nombre"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </FormGroup>
      <Button type="submit" color="primary">
        Enviar
      </Button>
    </Form>
  );
}
