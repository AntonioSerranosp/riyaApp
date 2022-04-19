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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ullam
        voluptatem nam, ut, eius dignissimos aut tempore voluptatum nulla,
        tempora quasi beatae doloremque suscipit tenetur laboriosam eum? At,
        quos nulla!
      </div>
      <Row>
        {/* <Image
          src={jarronTallado}
          style={{ width: "100vw" }}
          height={820}
          preview={false}
        /> */}
        <div className="know-riya-square">
          <Title level={3}>Conoce a riya</Title>
          <div className="know-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque harum
            distinctio asperiores ducimus! Deleniti est tempore velit sed
            molestiae hic, eos consequuntur libero voluptatum aspernatur quam.
            Non, provident. Adipisci, hic? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Necessitatibus neque perspiciatis
            porro dolores doloremque iste inventore sint ullam consectetur
            nesciunt, quis ipsa autem tempore veritatis nobis repudiandae
            adipisci officiis deserunt.
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
