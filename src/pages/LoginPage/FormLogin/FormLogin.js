import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { userService } from "../../../services/userService";
import { localStorageService } from "../../../services/localStorageService";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setUserInforAction,
  setUserInforActionService,
} from "../../../redux/actions/userAction";

export default function FormLogin() {
  // can thiệp thanh URL, dùng để điều hướng trang
  let history = useHistory();

  let dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);
    let onSuccess = () => {
      message.success("Đăng nhập thành công");
      setTimeout(() => {
        history.push("/");
      }, 2000);
    };

    let onFail = () => {
      message.error("Sai rồi nhập lại!!!");
    };
    dispatch(setUserInforActionService(values, onSuccess, onFail));
  };

  // thunk - saga
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="taiKhoan"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <div className="text-center flex  justify-center">
        <Button className="bg-blue-500 text-white " htmlType="submit">
          Đăng nhập
        </Button>
        <NavLink to="/register">
          <div className="text-center">
            <Button
              className="bg-yellow-500 text-yellow ml-4"
              htmlType="submit"
            >
              Đăng ký
            </Button>
          </div>
        </NavLink>
      </div>
    </Form>
  );
}
