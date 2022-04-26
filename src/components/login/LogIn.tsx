import React, { useContext, useState } from "react";
import { Col, Row, Form, Button, Input } from "antd";
import "./Login.less";
import { CreateAccountForm } from "./CreateAccountForm";
import { RiyaContext } from "../../context/RiyaContext";
import { useNavigate } from "react-router-dom";
import { types } from "../../types/types";
import { ReactComponent as RiyaLogo } from "../../assets/riya-favicon.svg";

const layout = {
  labelCol: {
    span: 0,
  },
  wrapperCol: {
    span: 16,
  },
};

export const LogIn = () => {
  const [hasCount, sethasCount] = useState(false);
  const [form] = Form.useForm();
  const [formCreateAccount] = Form.useForm();
  const first = useContext(RiyaContext);
  const navigate = useNavigate();
  const { dispatch } = useContext(RiyaContext);
  // console.log(first, "context");
  //TODO: CALL THE API
  const logIn = (formValues: any) => {
    const { name, password } = formValues;
    //TODO:
    const action = {
      type: types.login,
      payload: { name },
    };
    dispatch(action);
    navigate("/", {
      replace: true,
    });
  };

  const onFinish = async (values: any) => {
    try {
      const values = await form.validateFields();

      console.log(values);
      logIn(values);
    } catch (error) {}
    console.log(values);
  };
  /**
   *
   * @param values
   * TODO: Con los valores obtenidos hacer
   * La peticion para hacer el log in
   *
   */

  const onFinishCreateNewAccount = async (values: any) => {
    try {
      const formValues = await formCreateAccount.validateFields();
      console.log(formValues, "formValues");
      const { fullName, email, password } = formValues;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-wrapper-layout">
      <Row>
        <Col span={11} offset={2}>
          <h2 className="title-logIn">{hasCount ? "Acceder" : "REGISTRATE"}</h2>
          {hasCount ? (
            <Form
              layout="vertical"
              form={form}
              name="control-hooks"
              onFinish={onFinish}
            >
              <Form.Item
                name="name"
                label="Nombre de usuario o correo electronico"
                rules={[
                  {
                    required: true,
                    message: "Campo requerido.",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="password"
                label="password"
                rules={[
                  {
                    required: true,
                    message: "La contraseña es requerida.",
                  },
                ]}
              >
                <Input.Password placeholder="password" />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 15,
                }}
              >
                <Button className="button-black" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <CreateAccountForm
              formInstance={formCreateAccount}
              onFinish={onFinishCreateNewAccount}
            />
          )}
          {!hasCount && (
            <div onClick={() => sethasCount(true)}>
              Ya tienes cuenta? Haz login
            </div>
          )}
        </Col>
        <Col span={11}>
          <RiyaLogo className="riya-icon-contact" />
        </Col>
      </Row>
    </div>
  );
};
