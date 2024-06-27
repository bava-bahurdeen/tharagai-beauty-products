import { Button, ConfigProvider, Form, Input, Radio, Select, Space } from "antd";
import React, { useState } from "react";

export default function UserAddress() {
  const options = [
    {
      value: "+91",
      label: "+91",
    },
  ];

  

  const [value, setValue] = useState()

  console.log(value);

  const onChange = (e) =>{
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  }

  return (
    <section className="container mx-auto my-5">
      <div className="bg-white p-2 md:p-10 rounded-lg">
        <h1 className="text-3xl mt-5 mb-10 text-center">
          Customer Information
        </h1>
        <Form layout="vertical">
          <div className="md:grid grid-cols-2 gap-14">
            <div className="shadow-lg border p-5 rounded-lg mb-5 md:mb-0">
              <h3 className="text-base mb-5 font-semibold">Personal Details</h3>
              <Form.Item
                label="First Name"
                name={"first_name"}
                rules={[
                  {
                    required: true,
                    message: "Please input your First Name!",
                  },
                ]}
              >
                <Input
                  placeholder="First name"
                  className="shadow focus:shadow border-none p-2 rounded"
                />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name={"last_name"}
                rules={[
                  {
                    required: true,
                    message: "Please input your Last Name!",
                  },
                ]}
              >
                <Input
                  placeholder="Last name"
                  className="shadow focus:shadow border-none p-2 rounded"
                />
              </Form.Item>
            </div>
            <div className="shadow-lg border p-5 rounded-lg">
              <h3 className="text-base mb-5 font-semibold">Contact Details</h3>
              <Form.Item
                label="Email ID"
                name={"email"}
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input your Email ID!",
                  },
                ]}
              >
                <Input
                  placeholder="Email Address"
                  className="shadow focus:shadow border-none p-2 rounded"
                />
              </Form.Item>
              <Form.Item
                label="Mobile Number"
                name={"mobile "}
                rules={[
                  {
                    required: true,
                    message: "Please input your Phone Number!",
                  },
                ]}
              >
                <Space.Compact className="w-full">
                  <Select
                    style={{
                      width: 80,
                    }}
                    className=" shadow focus:shadow border-none  rounded"
                    defaultValue="+91"
                    options={options}
                  />
                  <Input className=" shadow focus:shadow border-none  rounded" />
                </Space.Compact>
              </Form.Item>
            </div>
          </div>
          <div className="shadow-lg border my-10 rounded-lg">
            <h3 className="text-base mb-5 font-semibold p-5">Delivery Address</h3>
            <div className="md:grid grid-cols-2 gap-14">
              <div className=" p-5">
                <Form.Item
                  label="Street or Area"
                  name={"street_address"}
                  rules={[
                    {
                      required: true,
                      message: "Please input your Street or Area!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Street or Area"
                    className="shadow focus:shadow border-none p-2 rounded"
                  />
                </Form.Item>
                <Form.Item
                  label="City"
                  name={"city"}
                  rules={[
                    {
                      required: true,
                      message: "Please input your City!",
                    },
                  ]}
                >
                  <Input
                    placeholder="City"
                    className="shadow focus:shadow border-none p-2 rounded"
                  />
                </Form.Item>
                <Form.Item
                  label="State"
                  name={"state"}
                  rules={[
                    {
                      required: true,
                      message: "Please input your State!",
                    },
                  ]}
                >
                  <Input
                    placeholder="State"
                    className="shadow focus:shadow border-none p-2 rounded"
                  />
                </Form.Item>
                <Form.Item label="Address Type" rules={[
                  {
                    required: true,
                    message: "Please input your Address Type!"
                  }
                ]}>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio value={"home"}>Home</Radio>
                    <Radio value={"work"}>Work</Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
              <div className="p-5">
                <Form.Item
                  label="Pincode"
                  name={"pin_code"}
                  rules={[
                    {
                      required: true,
                      message: "Please input your Pincode!",
                    },
                  ]}
                >
                  <Input
                    placeholder=" Pincode"
                    className="shadow focus:shadow border-none p-2 rounded"
                  />
                </Form.Item>
                <Form.Item
                  label="Country"
                  name={"country "}
                  rules={[
                    {
                      required: true,
                      message: "Please input your Country!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Country"
                    className="shadow focus:shadow border-none p-2 rounded"
                  />
                </Form.Item>
                <Form.Item
                  label="Alternate Number"
                  name={"alter_mobile"}
                  rules={[
                    {
                      required: true,
                      message: "Please input your Alternate Number!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Alternate Number"
                    className="shadow focus:shadow border-none p-2 rounded"
                  />
                </Form.Item>
              </div>
              
            </div>
          </div>
        </Form>
      </div>
    </section>
  );
}
