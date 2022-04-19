import React from "react";
import {
  Breadcrumb,
  Button,
  Col,
  InputNumber,
  Row,
  Space,
  Typography,
  Image,
} from "antd";
import "./Product.less";
import molcajete from "../../assets/molcajete.jpg";

const { Title } = Typography;
export const Product = () => {
  function onChange(value: any) {
    console.log("changed", value);
  }
  return (
    <div className="product-wrapper-layout">
      <div className="breadcrumb-container">
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application List</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Row gutter={[0, 12]}>
        <Col span={4} offset={1}>
          <Space direction="vertical" size="large">
            <Image src={molcajete} height={78} width={78} preview={true} />
            <Image src={molcajete} height={78} width={78} preview={true} />
            <Image src={molcajete} height={78} width={78} preview={true} />
          </Space>
        </Col>
        <Col span={8}>
          <Image src={molcajete} preview={false} width={918} height={727} />
        </Col>
        <div className="product-details">
          <Title>Florero Grande</Title>
          <div className="product-price">$50.00</div>
          <div>
            <span className="cetegory-label">Categoria:</span> Artesanias
          </div>
          <div className="product-descrption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem rerum, veritatis ipsam porro hic, odit provident non
          </div>
          <div>
            <span className="cetegory-label"> Material:</span>
            Barro
          </div>
          <div className="quantity">Cantidad</div>
          <InputNumber
            min={0}
            max={10}
            defaultValue={0}
            onChange={onChange}
            style={{ alignSelf: "center" }}
          />
          <Button className="button-black">ir a ofertas</Button>
        </div>
        <div className="related-products">
          <Title level={2}>Productos Relacionados</Title>

          <Space direction="horizontal" size="large" className="">
            <div className="product-card">
              <Image
                src={molcajete}
                height={78}
                width={90}
                preview={false}
                style={{ margin: 10 }}
              />
              <div className="descripiton-item">Juego de cubrebocas</div>
              <div>$100.00</div>
            </div>
            <div className="product-card">
              <Image
                src={molcajete}
                height={78}
                width={90}
                preview={false}
                style={{ margin: 10 }}
              />
              <div className="descripiton-item">Juego de cubrebocas</div>
              <div>$100.00</div>
            </div>
            <div className="product-card">
              <Image
                src={molcajete}
                height={78}
                width={90}
                preview={false}
                style={{ margin: 10 }}
              />
              <div className="descripiton-item">Juego de cubrebocas</div>
              <div>$100.00</div>
            </div>
            <div className="product-card">
              <Image
                src={molcajete}
                height={78}
                width={90}
                preview={false}
                style={{ margin: 10 }}
              />
              <div className="descripiton-item">Juego de cubrebocas</div>
              <div>$100.00</div>
            </div>
          </Space>
        </div>
      </Row>
      {/* <Row>
        <div>
         
        </div>
        <br />
        
      </Row> */}
    </div>
  );
};
