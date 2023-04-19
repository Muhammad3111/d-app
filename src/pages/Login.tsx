import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import Logo from "../assets/logo.png";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const Login: React.FC = () => (
  <div
    style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <div style={{ width: "300px" }}>
      <img
        src={Logo}
        alt="logo"
        style={{ width: "100%", objectFit: "contain" }}
      />
    </div>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 800 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Foydalanuvchi nomi"
        name="username"
        rules={[
          { required: true, message: "Iltimos foydalanuvchi nomini kiriting!" },
        ]}
      >
        <Input style={{ width: "300px" }} />
      </Form.Item>

      <Form.Item
        label="Parol"
        name="password"
        rules={[{ required: true, message: "Iltimos parolni kiriting!" }]}
      >
        <Input.Password style={{ width: "300px" }} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Kirish
        </Button>
      </Form.Item>
    </Form>
  </div>
);

export default Login;
