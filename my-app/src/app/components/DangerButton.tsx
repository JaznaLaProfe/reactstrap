"use client";

import React from 'react';
import { Button } from 'reactstrap';

export default function DangerButton() {
  return (
    <Button onClick={() => alert('Hola')} color="danger">
      Danger!
    </Button>
  );
}