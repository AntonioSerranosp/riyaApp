import { LogoutOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, Row } from "antd";
import { ReactComponent as RiyaLogo } from "../assets/riya-favicon.svg";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiyaContext } from "../context/RiyaContext";
import { types } from "../types/types";
const { Content, Footer, Sider, Header } = Layout;
export const RiyaHeader = () => {
  const { riyaState, dispatch } = useContext(RiyaContext);
  console.log(riyaState, "riyaheader");
  const navigate = useNavigate();
  const handleLogOut = () => {
    const action = {
      type: types.logout,
    };
    dispatch(action);
    navigate("/", {
      replace: true,
    });
  };
  return (
    <>
      <Header className="header-wraper">
        <RiyaLogo className="riya-icon-header" />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          className="menu-header"
        >
          <Menu.Item key="1">
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/about-us">Quienes somos</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/shop">Tienda</Link>
          </Menu.Item>
          <Menu.Item key="logout">
            <Button icon={<LogoutOutlined />} onClick={handleLogOut} />
          </Menu.Item>
        </Menu>
      </Header>
      <Row>
        <div className="subHeader">
          <div className="subHeader-item">Joyeria</div>
          <div className="subHeader-item">Ropa</div>
          <div className="subHeader-item">Artesanias</div>
          <div className="subHeader-item">Accesorios</div>
        </div>
      </Row>
    </>
  );
};
