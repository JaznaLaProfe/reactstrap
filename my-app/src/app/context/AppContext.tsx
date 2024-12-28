"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Definir el tipo para el estado y las funciones
interface AppContextProps {
  count: number;
  increment: () => void;
}

// Crear el contexto con un valor inicial vacío
const AppContext = createContext<AppContextProps | undefined>(undefined);

// Proveedor del contexto
export function AppProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <AppContext.Provider value={{ count, increment }}>
      {children}
    </AppContext.Provider>
  );
}

// Hook personalizado para usar el contexto
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe ser usado dentro de un AppProvider");
  }
  return context;
}
