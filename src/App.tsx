import React, { useReducer } from "react";
import {
  FacebookFilled,
  LogoutOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import "./App.less";
import { Button, Col, Layout, Menu, Row, Space, Typography, Image } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { About } from "./components/aboutUs/About";
import { DashboardShop } from "./components/shop/DashboardShop";
import { ReactComponent as RiyaLogo } from "./assets/riya-favicon.svg";
import { Contact } from "./components/contact/Contact";
import { ShopCart } from "./components/shop/ShopCart";
import { Product } from "./components/products/Product";
import pagos from "./assets/pagos.png";
import { FooterLayOut } from "./layout/Footer";
import { LogIn } from "./components/login/LogIn";
import { RiyaProvider } from "./context/RiyaProvider";
import { authReducer } from "./auth/authReducer";
import { RiyaHeader } from "./layout/RiyaHeader";
import { PrivateRoute } from "./routers/PrivateRoute";
import { PublicRoute } from "./routers/PublicRoute";
import { AppRouter } from "./routers/AppRouter";

const { Content, Footer, Sider, Header } = Layout;
const { Title } = Typography;
const init = () => {
  return {
    logged: true,
    name: "Antonio",
  };
};
function App() {
  // const [state, dispatch] = useReducer(authReducer, {}, init);
  const handleClickLogo = (): void => {
    console.log("ey");
  };

  return (
    <RiyaProvider>
      <div className="riya-wrapper-layout">
        <Layout>
          <RiyaHeader />
          <Content>
            <Layout className="site-layout-background">
              <Content>
                {/* <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about-us" element={<About />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/shop" element={<DashboardShop />} />
                  <Route
                    path="/login"
                    element={
                      <PublicRoute>
                        <LogIn />
                      </PublicRoute>
                    }
                  />
                  {/* <Route path="/login" element={<LogIn />} /> 
                  <Route path="/shoping-cart" element={<ShopCart />} />
                  <Route path="/*" element={<PrivateRoute></PrivateRoute>} />
                </Routes> */}
                <AppRouter />
              </Content>
            </Layout>
          </Content>
          <div className="footer-wrapper-layout">
            <Footer style={{ textAlign: "center", minHeight: "20vh" }}>
              <Row>
                <Col offset={1} span={4}>
                  <Title level={5}>EXPERIENCIA RIYA</Title>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam
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
                  <Space>
                    <Image src={pagos} preview={false} />
                  </Space>
                </Col>
              </Row>
            </Footer>
          </div>
        </Layout>
      </div>
    </RiyaProvider>
  );
}

export default App;
