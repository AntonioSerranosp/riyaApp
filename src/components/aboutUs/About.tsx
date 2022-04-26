import { Row, Image, Typography, Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import jarronTallado from "../../assets/jarron-tallado.png";
import "./About.less";
const { Title } = Typography;
export const About = () => {
  return (
    <div className="aboutUs-layout-wrapper">
      <div className="text-paragraph-left">
        Trabajamos con diversas comunidades indígenas para poder ofrecer
        diversas artesanias de multiples estados de la Republica Mexicana, con
        el fin apoyar a los artesanos.
      </div>
      <Row>
        <div className="know-riya-square">
          <Title level={3}>Conoce a riya</Title>
          <div className="know-paragraph">
            Riya es una iniciativa de Alternare A.C., organización dedicada,
            desde hace más de 23 años, a impulsar el desarrollo integral
            sustentable en pro de la conservación de la Reserva de la Biosfera
            mariposa monarca de la mano de las comunidades que habitan la
            región.
          </div>
          <div className="know-paragraph">
            El impacto de nuestro modelo da respuesta a algunas de las
            principales problemáticas a las que nos enfrentamos a nivel mundial:
            degradación ambiental, inseguridad alimentaria, pobreza rural, entre
            muchos otros. A través de Riya esperamos apoyar a multiples
            comunidades indigenas y artesanos locales.
          </div>

          <Button className="button-black">
            <Link to="/contact">CONTACTANOS</Link>
          </Button>
        </div>
        <div className="image-container">
          <Image
            src={jarronTallado}
            style={{ width: "100vw" }}
            height={820}
            preview={false}
          />
        </div>
      </Row>
    </div>
  );
};
