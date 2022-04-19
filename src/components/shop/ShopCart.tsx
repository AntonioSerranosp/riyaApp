import { Button, message, Steps } from "antd";
import React, { useState } from "react";
import { Cartlist } from "./Cartlist";

export const ShopCart = () => {
  const [current, setCurrent] = useState(0);
  const { Step } = Steps;
  const steps = [
    {
      title: "CARRITO",
      content: "First-content",
    },
    {
      title: "ENVIO Y PAGO",
      content: "Second-content",
    },
    {
      title: "FINALIZAR PEDIDO",
      content: "Last-content",
    },
  ];
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <div className="shop-cart-wrapper">
      <Steps current={current} className="shop-cart-steps">
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      {current < steps.length - 1 && current === 0 && (
        <Cartlist setCurrent={setCurrent} current={current} />
      )}
      {current < steps.length - 1 && (
        <Button type="primary" onClick={() => next()}>
          Next
        </Button>
      )}
      {current === steps.length - 1 && (
        <Button
          type="primary"
          onClick={() => message.success("Processing complete!")}
        >
          Done
        </Button>
      )}
      {current > 0 && (
        <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
          Previous
        </Button>
      )}
    </div>
  );
};
