import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";

export default function Customers() {
  const onFinish = (values) => {
  };
  return (
    <Form
      name=""
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      autoComplete="off"
    >
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{
                  display: "flex",
                }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, "first"]}
                  rules={[
                    {
                      required: true,
                      message: "Missing first name",
                    },
                  ]}
                >
                  <Input placeholder="First Name" />
                </Form.Item>

                <Form.Item
                label="user"
                  {...restField}
                  name={[name, "last"]}
                  rules={[
                    {
                      required: true,
                      message: "Missing last name",
                    },
                  ]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

// if (Array.isArray(values[key])) {
//   values[key].forEach((item, index) => {
//     Object.keys(item).forEach((subKey) => {
//       formData.append(`${key}[${index}][${subKey}]`, item[subKey]);
//     });
//   });
// } else