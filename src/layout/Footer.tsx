import React from "react";
import { Col, Row, Typography, Layout, Button, Space, Image } from "antd";
import { FacebookFilled, TwitterOutlined } from "@ant-design/icons";
import pagos from "../assets/pagos.png";
import "./Footer.less";
const { Title } = Typography;

const { Footer } = Layout;
export const FooterLayOut = () => {
  return (
    <div className="footer-wrapper-layout">
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
            <Space>
              <Image src={pagos} preview={false} />
            </Space>
          </Col>
        </Row>
      </Footer>
    </div>
  );
};
