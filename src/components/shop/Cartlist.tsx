import { CloseOutlined } from "@ant-design/icons";
import { Button, InputNumber, Row, Space, Table, Tag, Typography } from "antd";
import React from "react";
const { Title } = Typography;
export const Cartlist = (props: any) => {
  let src = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png";
  const handleNextStep = () => {
    props.setCurrent((current: number) => current + 1);
  };
  const handleDeleteRecord = (record: any) => {
    console.log(record, "se intento borrar el record");
  };
  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      render: (
        text:
          | boolean
          | React.ReactChild
          | React.ReactFragment
          | React.ReactPortal
          | null
          | undefined,
        record: any
      ) => {
        console.log(text);
        return (
          <div>
            <img alt="example" className="cart-list-item-image" src={src} />
            <div>{text}</div>
          </div>
        );
      },
    },
    {
      title: "Precio",
      dataIndex: "precio",
      key: "age",
    },
    {
      title: "Cantidad",
      dataIndex: "cantidad",
      key: "address",
      render: (text: any, record: any) => {
        return (
          <InputNumber
            min={0}
            max={10}
            defaultValue={0}
            style={{ alignSelf: "center" }}
          />
        );
      },
    },
    {
      title: "Subtotal",
      key: "tags",
      dataIndex: "subTotal",
      render: (text: any) => <>{text}</>,
    },
    {
      title: "Eliminar",
      key: "action",
      render: (text: any, record: any) => (
        <Button
          icon={<CloseOutlined />}
          size="large"
          onClick={() => handleDeleteRecord(record)}
        />
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      precio: 32,
      cantidad: 32,
      subTotal: 32,
      tags: ["nice", "developer"],
      product: "mi product",
    },
    {
      key: "2",
      name: "Jim Green",
      precio: 42,
      cantidad: 32,
      subTotal: 32,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
      product: "mi product",
    },
    {
      key: "3",
      name: "Joe Black",
      precio: 32,
      cantidad: 32,
      subTotal: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
      product: "mi product",
    },
  ];

  return (
    <div className="cart-list-wrapper">
      <Title>Tus productos</Title>
      <Table columns={columns} dataSource={data} pagination={false} />
      <Row>
        <Title>Total del carrito</Title>
        <div className="subtotal">Sub total</div>
        <div className="total">Total</div>
        <Button className="button-black">Continuar Comprando</Button>
        <Button className="button-black" onClick={handleNextStep}>
          Pagar
        </Button>
      </Row>
    </div>
  );
};
