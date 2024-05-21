import React, { useState } from "react";
import { Button, Checkbox, ConfigProvider, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../store/axiosInstance";
import { useDispatch } from "react-redux";
import { updateToken } from "../../store/slice/userSlice";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [fail, setFail] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    setFail(false);
    try {
      const { data } = await axiosInstance.post(`/users/login/`, values);

      localStorage.setItem("token", data.token);
      dispatch(updateToken(data.token));
      navigate("/");
    } catch (error) {
      setFail(true);
    }
    setLoading(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:  ", errorInfo);
  };

  return (
    <section className="container mx-auto py-10 lg:flex justify-center flex-col items-center mb-10 lg:mt-10">
      <h1 className="text-2xl font-bold text-center">Login Page </h1>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#C89374",
            borderRadius: 2,
            colorBgContainer: "white",
          },
        }}
      >
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          className="lg:w-[50%]  mt-10"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              className="border-0 p-3 rounded outline-0 shadow-none"
              placeholder="Enter Your Email "
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password className="border-0 p-3 rounded shadow-none" placeholder="Enter Your Password "/>
          </Form.Item>

          <p className="w-full text-end">
            <Link to={""} className="text-red-500 hover:text-red-500">
              Forget Password?
            </Link>
          </p>

          {fail && (
            <p className="text-red-500 text-center">
              Please Enter Correct Email & Password
            </p>
          )}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              disabled={loading}
              className={`p-3 py-6 shadow-none border-0 outline-none bg-secondary flex justify-center items-center mt-2 w-full rounded hover:bg-success`}
            >
              {loading ? <>Loading...</> : <>Submit</>}
            </Button>
          </Form.Item>

          <p className="text-center">
            <Link className="text-sm text-secondary hover:text-success">
              Register Now!
            </Link>
          </p>
        </Form>
      </ConfigProvider>
    </section>
  );
}
