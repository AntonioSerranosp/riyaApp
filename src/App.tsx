import React from "react";
import logo from "./logo.svg";
import {
  FacebookFilled,
  InstagramOutlined,
  TwitterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./App.less";
import { Button, Col, Layout, Menu, Row, Typography } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { About } from "./components/aboutUs/About";
import { DashboardShop } from "./components/shop/DashboardShop";
import { ReactComponent as RiyaLogo } from "./assets/riya-favicon.svg";
import { Contact } from "./components/contact/Contact";
import { ShopCart } from "./components/shop/ShopCart";
import { Product } from "./components/products/Product";

const { Content, Footer, Sider, Header } = Layout;
const { Title } = Typography;
const { SubMenu } = Menu;
function App() {
  const handleClickLogo = (): void => {
    console.log("ey");
  };
  return (
    <Layout>
      <Header className="header-wraper">
        <RiyaLogo className="riya-icon-header" onClick={handleClickLogo} />
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
      <Content>
        <Layout className="site-layout-background">
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/shop" element={<DashboardShop />} />
              <Route path="/shoping-cart" element={<ShopCart />} />
              <Route path="/product" element={<Product />} />
            </Routes>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center", minHeight: "20vh" }}>
        <Row>
          <Col offset={1} span={4}>
            <Title level={5}>EXPERIENCIA RIYA</Title>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            </p>
            <Title level={5}>ESCRÍBENOS</Title>
            <div>contacto@riya.com</div>
            <Button shape="circle" icon={<TwitterOutlined />} />
            <Button shape="circle" icon={<TwitterOutlined />} />
            <Button shape="circle" icon={<FacebookFilled />} />
          </Col>
          <Col offset={3} span={6}>
            <Title level={5}>ATENCIÓN A CLIENTES</Title>
            <div>55 30 000511</div>
            <Title level={5}>HORARIO DE ATENCIÓN</Title>
            <div>
              <p>Lun a Vie 9:00 hrs a 19:hrs</p>
              <p> Sab y Dom 9:00 hrs a 14:00 hrs</p>
            </div>
          </Col>
          <Col offset={3} span={5}>
            <div>Preguntas frecuentes</div>
            <div>Aviso de Privacidad</div>
            <div>Términos y Condiciones</div>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
}

export default App;
