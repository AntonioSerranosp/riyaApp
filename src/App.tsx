import React from "react";
import logo from "./logo.svg";
import { UserOutlined } from "@ant-design/icons";
import "./App.less";
import { Layout, Menu } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { About } from "./components/aboutUs/About";
import { DashboardShop } from "./components/shop/DashboardShop";
import { ReactComponent as RiyaLogo } from "./assets/riya-favicon.svg";

const { Content, Footer, Sider, Header } = Layout;
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
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Quienes somos</Menu.Item>
          <Menu.Item key="3">
            <Link to={"/shop"}>Tienda</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Layout
          className="site-layout-background"
          // style={{ padding: "24px 0" }}
        >
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/shop" element={<DashboardShop />} />
            </Routes>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center", minHeight: "20vh" }}>
        Growth Cloud Demo ©2022 Created by Jose Antonio Serrano Peña.
      </Footer>
    </Layout>
  );
}

export default App;
