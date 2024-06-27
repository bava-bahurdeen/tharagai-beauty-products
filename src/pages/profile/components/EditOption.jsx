import React, { useState } from "react";
import { Form, Input, Button, Select, DatePicker, message } from "antd";
import { GrClose } from "react-icons/gr";

export default function EditOption({ changeedit }) {
  const [componentSize, setComponentSize] = useState("deafult");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  // const form=Form.useForm()
  return (
    <div className="grid place-content-center p-10 ">
      <div className=" md:w-[600px] px-10 py-10 bg-white shadow-2 relative">
        <Button
          onClick={changeedit}
          className=" cursor-pointer right-3  absolute top-3 !border-none hover:!text-red-600 "
        >
          <GrClose />
        </Button>

        <Form
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 24 }}
          layout="vertical"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          style={{
            maxWidth: 600,
          }}
        >
         <div className="grid place-content-center">
         <Form.Item
              label={"Password"}
              name={"password"}
              rules={[{required:true,message:"please input your password" }]}
              className="w-full"
              hasFeedback
            >
              <Input
                placeholder="Enter a New Password"
                className="!w-[350px] !h-[45px]"
              />
            </Form.Item>

            <Form.Item
              label={"Confirm Password"}
              name={"confirm"}
              rules={[{ require: true,message:"please confirm your password" },  ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords do not match!'));
                },
              }),]}
              dependencies={["password"]}
              hasFeedback

            >
              <Input placeholder="Confirm New Password" className="!w-[350px] !h-[45px]" />
            </Form.Item>
         </div>
            
         
{/* 
          <div className="  flex flex-col  md:flex-row justify-around items-center gap-4 ">
            <Form.Item label={"Email"} name={"email"} rules={[{type:"email", require: true }]}>
              <Input placeholder="Email"  className="!w-[350px] !h-[45px]"/>
            </Form.Item>

            <Form.Item label={"Phone"}  name={"phone"}  rules={[{ type:"number", required: true }]}>
            <Input placeholder="Phone" type="text" className="!w-[350px] !h-[45px]"/>

            </Form.Item>
          </div> */}
          <div >
            <Button className="!w-1/3 !h-10 !bg-secondary hover:!bg-success hover:!border-none mt-5 ml-28 md:ml-[165px] !text-white !font-semibold">
              Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
