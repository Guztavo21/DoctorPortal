import React, { useState } from 'react';
import { Layout, Button, theme } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import PatientsList from './components/PatientsList';
import Logo from './components/Logo';
import MenuList from './components/MenuList';
import ToggleThemeButton from './components/ToggleThemeButton';

// IMPORTAR INGRESO PACIENTE Y HOME 
import IngresoPaciente from './pages/IngresoPaciente';  // Importa el componente de Ingreso Paciente
import Home from './pages/Home';  // Asegúrate de tener una página Home si la usas

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa Router, Route y Routes

const { Header, Sider } = Layout;

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => setDarkTheme(prevTheme => !prevTheme);

  const { token: { colorBgContainer } } = theme.useToken();

  return (
    <Router> {/* Envolver la aplicación con Router para habilitar la navegación */}
      <Layout style={{ minHeight: '98vh' }}>
        <Sider
          collapsed={collapsed}
          collapsible
          trigger={null}
          theme={darkTheme ? 'dark' : 'light'}
          className="sidebar"
        >
          <Logo />
          <MenuList darkTheme={darkTheme} />
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>

        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              className="toggle"
              onClick={() => setCollapsed(prev => !prev)}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
          </Header>
          <div className="main-content" style={{ padding: '20px', flex: 1 }}>
            {/* Aquí se gestiona el contenido dependiendo de la ruta */}
            <Routes>
              <Route path="/" element={<Home />} /> {/* Ruta para la página Home */}
              <Route path="/ingreso-paciente" element={<IngresoPaciente />} /> {/* Ruta para la página de ingreso paciente */}
              <Route path="/pacientes" element={<PatientsList />} /> {/* Ruta para la lista de pacientes */}
            </Routes>
          </div>
        </Layout>
      </Layout>
    </Router>
  );
};


export default App;
