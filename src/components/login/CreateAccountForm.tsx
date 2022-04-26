import { Button, Form, FormInstance, Input } from "antd";
import { RuleObject } from "antd/lib/form";
import React from "react";

interface CreateAccountFormProps {
  formInstance: FormInstance<any>;
  onFinish: (values: any) => void;
}

const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 16,
  },
};
export const CreateAccountForm = (props: CreateAccountFormProps) => {
  return (
    <div>
      <Form
        {...layout}
        layout="vertical"
        form={props.formInstance}
        name="control-hooks"
        onFinish={props.onFinish}
      >
        <Form.Item
          name="fullName"
          label="Nombre de usuario"
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
          name="email"
          label="Dirección de correo electrónico"
          rules={[
            {
              type: "email",
              message: "La informacion es un e-mail valido!",
            },
            {
              required: true,
              message: "Por favor ingrese un e-mail!",
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
          hasFeedback
        >
          <Input.Password placeholder="password" />
        </Form.Item>
        {/* 
        TODO: Checar que no se bloqué el submit if so warningOnly <-
        */}
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(rule: RuleObject, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error(
                    "Las contraseñas ingresadas no hacen match, por favor intente de nuevo!"
                  )
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 7,
            span: 15,
          }}
        >
          <Button className="button-black" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
