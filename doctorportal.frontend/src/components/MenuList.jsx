import React from "react";
import { Menu } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";  // Importar Link de React Router

const MenuList = ({ darkTheme }) => {
  const items = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>,  // Usar Link para la navegación
    },
    {
      key: "patient",
      icon: <UserOutlined />,
      label: "Pacientes",
      children: [
        {
          key: "create",
          label: <Link to="/ingreso-paciente">Ingresar</Link>,  // Navegar a "Ingreso Paciente"
        },
        { key: "show", label: "Ver" },
      ],
    },
  ];

  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
      className="menu-bar"
      items={items}
      style={{ height: "88vh" }} // Asegura que ocupe toda la altura disponible
    />
  );
};

export default MenuList;
