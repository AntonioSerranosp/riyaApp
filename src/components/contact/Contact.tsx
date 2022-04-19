import { Col, Row, Form, Button, Input, Typography } from "antd";
import { ReactComponent as RiyaLogo } from "../../assets/riya-favicon.svg";
import "./Contact.less";
import React from "react";

const layout = {
  labelCol: {
    span: 0,
  },
  wrapperCol: {
    span: 16,
  },
};
const { Title } = Typography;
export const Contact = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <div className="contact-wrapper-layout">
      <Row>
        <Col offset={1} span={11}>
          <RiyaLogo className="riya-icon-contact" />
        </Col>
        <Col span={12}>
          <div style={{ marginLeft: 40 }}>
            <h1 className="form-title">Contáctanos</h1>
          </div>

          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
          >
            <Form.Item
              name="fullName"
              label="Nombre completo"
              rules={[
                {
                  required: true,
                  message: "El nombre es requerido.",
                },
              ]}
            >
              <Input placeholder="NOMBRE COMPLETO" />
            </Form.Item>
            <Form.Item
              name="email"
              label="email"
              rules={[
                {
                  required: true,
                  message: "El email es requerido.",
                },
              ]}
            >
              <Input placeholder="CORREO" />
            </Form.Item>
            <Form.Item name="message" label="message">
              <Input.TextArea placeholder="MENSAJE" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 7,
                span: 16,
              }}
            >
              <Button className="button-black" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
