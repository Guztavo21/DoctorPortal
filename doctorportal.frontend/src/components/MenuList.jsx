import React from "react";
import { Menu } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

const MenuList = ({ darkTheme }) => {
  const items = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: "Home",
    },
    {
      key: "patient",
      icon: <UserOutlined />,
      label: "Pacientes",
      children: [
        { key: "create", label: "Ingresar" },
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
    />
  );
};

export default MenuList;
