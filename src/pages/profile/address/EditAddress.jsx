import React from 'react'
import { Input, Button, Form, Checkbox, Select } from "antd";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from 'react-router-dom';
export default function EditAddress() {
  return (
    <div className="container mx-auto h-full mt-10 mb-5">
      <div className="flex gap-x-2  justify-center md:justify-start">
      <h2 className="text-xl !font-semibold mb-5">New Delivery Address</h2>
<TbTruckDelivery className="text-2xl mt-1  text-center"/>
      </div>
      <Form layout="vertical" wrapperCol={24}>
        <div className="flex flex-col md:flex-row md:gap-10">
          <Form.Item
            name="fname"
            rules={[{ required: true, message: "enter the name" }]}
          >
            <Input
              placeholder="First Name*"
              className="!p-2 md:!w-72 lg:!w-96"
            />
          </Form.Item>

          <Form.Item name="lname">
            <Input
              placeholder="Last Name*"
              className="!p-2  md:!w-72 lg:!w-96"
            />
          </Form.Item>
        </div>

        <div className="flex flex-col md:flex-row md:gap-10">
          <Form.Item
            name="email"
            rules={[{ type: "email", message: "Please input mail" ,required:true}]}
          >
            <Input
              placeholder="Email id*"
              className="!p-2  md:!w-72 lg:!w-96"
            />
          </Form.Item>

          <Form.Item name="phone">
            <Input placeholder="Phone*"
             className="!p-2  md:!w-72 lg:!w-96" 
             rules={[{ message: "Enter a  Phone Number" ,required:true}]}
             />
          </Form.Item>
        </div>

        <div className="flex flex-col md:flex-row md:gap-5 ">
          <Form.Item name="pincode" rules={[{ required: true }]}>
            <Input
              placeholder="Pin Code*"
              className="!p-2 md:!w-48 lg:!w-64 "
            />
          </Form.Item>

          <Form.Item name="city" rules={[{ required: true }]}>
            <Input placeholder="City*" className="!p-2  md:!w-48 lg:!w-64" />
          </Form.Item>

          <Form.Item name="state" rules={[{ required: true }]}>
            <Input placeholder="State*" className="!p-2  md:!w-48 lg:!w-64" />
          </Form.Item>
        </div>

        <div>
          <Form.Item name="Adresss" rules={[{ required: true}]}>
            <Input.TextArea 
              placeholder="Adress ,House No,Building,Street*"
              className="md:!w-[38.5rem] lg:!w-[51rem]"
            />
          </Form.Item>
        </div>

        <div>
          <Form.Item name="addresstype" label="Select the type of Address">
            <Select className="!w-full md:!w-60" defaultValue="Home">
              <Select.Option>Home</Select.Option>
              <Select.Option >Work</Select.Option>
              <Select.Option >Other</Select.Option>
            </Select>
          </Form.Item>
        </div>

        <div>
          <Checkbox> Make this is my default Address</Checkbox>
        </div>

        <div className="sm:ml-5 md:ml-0 flex flex-col md:flex-row gap-4 md:gap-6 mt-5">
          <Button className="!w-60 !h-10 !font-semibold !bg-secondary !text-white hover:!bg-success !border-none ">
            Save
          </Button>
          <Link to='/address'>
          <Button className="!w-60 !h-10 !font-semibold">Cancel</Button>
          </Link>
        </div>
      </Form>
    </div>
  )
}
