import React from 'react';
import CustomNavbar from './components/CustomNavbar';
import CustomForm from './components/CustomForm';
import CustomCard from './components/CustomCard';
import { AppProvider } from './context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Page() {
  return (
    <AppProvider>
    <div>
      {/* Uso del Navbar */}
      <CustomNavbar />
      <div className="container">
        <h1>Bienvenido a la página principal</h1>
        <p>Explora las secciones usando el menú de navegación.</p>
        {/* Uso del Formulario */} <CustomForm />
        {/* Uso del Card */} <CustomCard />
      </div>
    </div>
    </AppProvider>
  );
}


//import DangerButton from './components/DangerButton';
//import CustomModal from './components/CustomModal';

/*
return (
  <div>
  */
    {/* Uso del Navbar */}
    /*
    <CustomNavbar />
    <div className="container">
      <h1>Bienvenido a la página principal</h1>
      <p>Explora las secciones usando el menú de navegación.</p>
*/
      {/* Uso del Formulario */}
      /*
      <CustomForm />
    </div>
  </div>
);
/*
  return (
    <div>
      
      <CustomNavbar />

      <div className="container">
        <h1>Bienvenido a la página principal</h1>
        <p>Explora las secciones usando el menú de navegación.</p>
      </div>
    </div>
  );  
 */
  /*
  return (
    <div>
      <h1>Bienvenido a la página principal</h1>
      <DangerButton />
    </div>
  );
  */
 
 // return (
 //   <div>
 //     <h1>Bienvenido a la página principal</h1>
 //     {/* Uso del Modal */}
 //     <CustomModal />
 //   </div>
  //);
   


