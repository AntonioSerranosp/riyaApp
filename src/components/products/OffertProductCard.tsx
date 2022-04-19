import React from "react";
import { Button, Row, Typography, Carousel, Col, Image } from "antd";
import pripinaImg from "../../assets/cosa-propina.png";
import { Link } from "react-router-dom";
export const OffertProductCard = () => {
  return (
    <div className="offertProductCard-wrapper">
      <Button className="button-red" danger>
        <Link to="/shop">Ver oferta</Link>
      </Button>
      <br />
      <Image src={pripinaImg} height={210} width={210} preview={false} />
      <div>Canastas multicolor</div>
      <div className="prices-container">
        <p className="before-price">$100</p>
        <p className="current-price">$99</p>
      </div>
    </div>
  );
};
