import { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import IngresoPaciente from './pages/IngresoPaciente';
import Home from './pages/Home';
// import PatientsList from './components/PatientsList';

import Sidebar from './components/Sidebar';
import CustomFooter from './components/Footer';


import VerPacientes from './pages/VerPacientes'; // Importa el componente VerPacientes

const App = () => {
  const [collapsed, setCollapsed] = useState(false); // Estado para controlar el colapso del menú
  const [isMobile, setIsMobile] = useState(false);

  // Detecta si la pantalla es móvil
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Comprobación inicial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router> {/* Envolver la aplicación con Router para habilitar la navegación */}
      <Layout style={{ }}>
        {/* Sidebar */}
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

        {/* Layout principal, ajusta el margen izquierdo según el tamaño de la pantalla */}
        <Layout
          style={{
            
            marginLeft: collapsed
              ? (isMobile ? 0 : 80)  // Si está colapsado y es móvil, sin margen, si es pantallas grandes, 80px
              : (isMobile ? 20 : 250),  // Si no está colapsado, 20px en móviles, 250px en pantallas grandes
          }}
        >
          
          <div>
            {/* Aquí se gestiona el contenido dependiendo de la ruta */}
            <Routes>
              <Route path="/" element={<Home />} /> {/* Ruta para la página Home */}
              <Route path="/ingreso-paciente" element={<IngresoPaciente />} /> {/* Ruta para la página de ingreso paciente */}
              <Route path="/pacientes" element={<VerPacientes />} /> {/* Ruta para la lista de pacientes */}
            </Routes>
          </div>  
         {/* Footer */}
        <CustomFooter />  
        </Layout>
             
        
      </Layout>
    </Router>
  );
};

export default App;
