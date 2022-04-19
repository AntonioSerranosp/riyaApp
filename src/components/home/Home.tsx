import React from "react";
import { Button, Row, Typography, Carousel, Col, Image, Space } from "antd";
import jarron from "../../assets/jarron.png";
import molcajete from "../../assets/molcajete.jpg";
import cubrebocas from "../../assets/cubrebocas.png";
import propinaImg from "../../assets/cosa-propina.png";
import aretes from "../../assets/aretes.png";
import "./Home.less";
import { Link } from "react-router-dom";
import { OffertProductCard } from "../products/OffertProductCard";

const { Title } = Typography;

export const Home = () => {
  return (
    <div className="layout-wrapper-home">
      <Row>
        <Col offset={2} span={10}>
          <Title>Lore ipsum home</Title>
          <div className="paragraph-left">
            <p>algo bien locochon</p>
          </div>
          <Button className="button-black">
            <Link to="/shop">ir a la tienda</Link>
          </Button>
        </Col>
        <Col span={10} pull={2}>
          <Carousel autoplay>
            <div>
              <Image src={jarron} height={445} width={700} preview={false} />
            </div>
            <div>
              <Image src={jarron} height={445} width={700} preview={false} />
            </div>
            <div>
              <Image src={jarron} height={445} width={700} preview={false} />
            </div>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col offset={2} span={5}>
          <Title level={2}>Ofertas</Title>
          <p>del mes</p>
          <Button className="button-black">ir a ofertas</Button>
        </Col>
        <Col span={12}>
          <Space>
            <OffertProductCard />
            <OffertProductCard />
            <OffertProductCard />
          </Space>
        </Col>
      </Row>
      <Row>
        <Col offset={2} span={5}>
          <Title level={2}>Nueva</Title>
          <p>Colección</p>
          <Image src={molcajete} height={194} width={194} preview={false} />
        </Col>
        <Col span={15}>
          <Image src={molcajete} height={194} width={194} preview={false} />
          <Image src={molcajete} height={194} width={194} preview={false} />
          <img className="molcaje" src={molcajete} alt={"molcajete"} />
        </Col>
      </Row>
      <Row>
        <Col offset={2} span={5}>
          <Title level={2}>Favoritos</Title>
        </Col>
      </Row>
      <Row>
        <Col offset={2} span={5}>
          <Button className="button-black">ir a favoritos</Button>
        </Col>
      </Row>
      <Row>
        <Col offset={2} span={10}>
          <div className="favorites-item">
            <Image src={cubrebocas} height={194} width={194} preview={false} />
            <div className="descripiton-item">Juego de cubrebocas</div>
            <div>$100.00</div>
          </div>
          <div className="favorites-item">
            <Image src={propinaImg} height={194} width={194} preview={false} />
            <div className="descripiton-item">Canastas multicolor</div>
            <div>$100.00</div>
          </div>
        </Col>
        <Col span={10} offset={2}>
          <div className="favorites-item">
            <Image src={aretes} height={194} width={194} preview={false} />
            <div className="descripiton-item">Aretes alebrije corazón</div>
            <div>$100.00</div>
          </div>
          <div className="favorites-item">
            <Image src={molcajete} height={194} width={194} preview={false} />
            <div className="descripiton-item">Aretes alebrije corazón</div>
            <div>$100.00</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
