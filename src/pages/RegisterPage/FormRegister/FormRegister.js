import { Button, Form, Input, InputNumber, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setUserRegisterActionService } from "../../../redux/actions/userAction";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};
const validateMessages = {
  required: "${label} không được để trống",
  types: {
    email: "${label} không đúng định dạng",
  },
};
/* eslint-enable no-template-curly-in-string */

const FormRegister = () => {
  let history = useHistory();
  let dispacth = useDispatch();
  const onFinish = (values) => {
    let newValue = { ...values.user, maNhom: "GP02" };
    let onSuccess = () => {
      message.success("Đăng ký thành công");
      setTimeout(() => {
        history.push("/login");
      }, 2000);
    };

    let onFail = () => {};
    dispacth(setUserRegisterActionService(newValue, onSuccess, onFail));
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "taiKhoan"]}
        label="Tên đăng nhập"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "hoTen"]}
        label="Họ tên"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[
          {
            required: true,
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "matKhau"]}
        label="Mật khẩu"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name={["user", "soDt"]}
        label="Số điện thoại"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <div className="text-center">
          <Button className="bg-blue-500 text-white mx-auto" htmlType="submit">
            Đăng ký
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default FormRegister;
