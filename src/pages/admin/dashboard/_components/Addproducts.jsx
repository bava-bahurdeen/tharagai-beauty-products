import {
  CloseOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  ConfigProvider,
  Form,
  Input,
  Select,
  Space,
  Upload,
} from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../../../store/axiosInstance";

const { Option } = Select;

export default function Addproducts() {
  const [fileList, setFileList] = useState([]);

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const token = useSelector((state) => state.users.token);

  const onFinish = async (values) => {

    const arr = {
      name: values["name"],
      productTitle: values["productTitle"],
      product_type_name: values["product_type_name"],
      description: values["description"],
      image: values["image"],
      variations: values["variations"],
      howtouse: values["howtouse"],
      ingredients: values["ingredients"],
      skintype: values["skintype"],
      benefit: values["benefit"],
    };

    try {
<<<<<<< HEAD
      const response = await axiosInstance.post("/products/add-product/", arr, {
=======
      const response = await axiosInstance.post("/products/product/", arr, {
>>>>>>> 22000fa94674e48ab7353d623f8e2a4e3416402c
        headers: {
          Authorization: `Token ${token}`,
        },
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <main className="p-6 bg-white  w-[80%] mt-10 rounded-2xl">
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          variations: [{}],
          howtouse: [{}],
          ingredients: [{}],
          skintype: [{}],
          benefit: [{}],
        }}
      >
        <h1 className="text-xl font-bold p-2 rounded-md w-1/2">
          Product Information
        </h1>

        <div className="flex flex-col xl:flex-row gap-10">
          <section className="xl:w-1/2 p-4 shadow rounded-lg h-fit border">
            <p className="font-semibold">Basic Information</p>

            <Form.Item
              className="mt-4"
              label="Product Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input Product Name!",
                },
              ]}
            >
              <Input
                className="shadow focus:shadow border-none p-2 rounded "
                placeholder="Product Name"
              />
            </Form.Item>

            <Form.Item
              className="mt-4"
              label="Product Title"
              name="productTitle"
              rules={[
                {
                  required: true,
                  message: "Please input product Title!",
                },
              ]}
            >
              <Input
                className="shadow focus:shadow border-none p-2 rounded "
                placeholder="Product Title"
              />
            </Form.Item>

            <Form.Item
              name="product_type_name"
              label="Product Type"
              rules={[
                {
                  required: true,
                  message: "Please input product type!",
                },
              ]}
            >
              <Select placeholder="Select a product type" allowClear>
                <Option value="Skin Care">Skin Care</Option>
                <Option value="Face Care">Face Care</Option>
                <Option value="Eye Care">Eye Care</Option>
              </Select>
            </Form.Item>

            <Form.Item
              className="mt-4"
              label="Product Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input Product Description!",
                },
              ]}
            >
              <Input.TextArea
                className="shadow focus:shadow border-none p-2 rounded "
                placeholder="Product Description"
              />
            </Form.Item>

            <Form.Item
              name="image"
              label="Product Image Upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              onChange={handleFileChange}
            >
              <Upload
                action="/upload"
                listType="picture-card"
                fileList={fileList}
                onChange={handleFileChange}
              >
                <button type="button">
                  <PlusOutlined />
                  <div>Upload</div>
                </button>
              </Upload>
            </Form.Item>
          </section>

          <section className="xl:w-1/2 ">
            <section className="p-4 shadow rounded-lg h-fit border">
              <p className="font-semibold mb-4">Product Variations</p>
              <Form.List name="variations">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space key={key}>
                        <Form.Item
                          label="Price"
                          {...restField}
                          name={[name, "price"]}
                          rules={[
                            {
                              required: true,
                              message: "Missing Price",
                            },
                          ]}
                        >
                          <Input
                            placeholder="Price"
                            className="shadow border-none p-2 rounded"
                          />
                        </Form.Item>

                        <Form.Item
                          label="Weight"
                          {...restField}
                          name={[name, "weight"]}
                          rules={[
                            {
                              required: true,
                              message: "Missing Weight",
                            },
                          ]}
                        >
                          <Input
                            placeholder="Weight"
                            className="shadow focus:shadow border-none p-2 rounded "
                          />
                        </Form.Item>
                        <MinusCircleOutlined
                          onClick={() => remove(name)}
                          className="mt-3"
                        />
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
            </section>

            <section className="p-4 shadow rounded-lg h-fit mt-5 border">
              <p className="font-semibold mb-4">Product Benefits</p>
              <Form.List name="benefit">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space key={key} className="w-full">
                        <Form.Item
                          className="w-96"
                          {...restField}
                          name={[name, "benefit"]}
                          rules={[
                            {
                              required: true,
                              message: "Missing Benefit",
                            },
                          ]}
                        >
                          <Input
                            placeholder="Benefit"
                            className="shadow focus:shadow border-none p-2 rounded w-full"
                          />
                        </Form.Item>

                        <MinusCircleOutlined
                          onClick={() => remove(name)}
                          className="mb-6"
                        />
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
            </section>

            <section className="p-4 shadow rounded-lg h-fit mt-5 border">
              <p className="font-semibold mb-4">Skin Type </p>
              <Form.List name="skintype">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space key={key} className="w-full">
                        <Form.Item
                          className="w-96"
                          {...restField}
                          name={[name, "skinType"]}
                          rules={[
                            {
                              required: true,
                              message: "Missing Skin Type",
                            },
                          ]}
                        >
                          <Input
                            placeholder="Skin Type"
                            className="shadow focus:shadow border-none p-2 rounded w-full"
                          />
                        </Form.Item>

                        <MinusCircleOutlined
                          onClick={() => remove(name)}
                          className="mb-6"
                        />
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
            </section>
          </section>
        </div>

        <div className="flex flex-col xl:flex-row gap-10">
          <section className="xl:w-1/2 p-4 shadow border-2 rounded-lg h-fit mt-5 ">
            <p className="font-semibold mb-4">How to Use </p>
            <Form.List name="howtouse">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space key={key} className="w-full">
                      <Form.Item
                        className="w-96"
                        {...restField}
                        name={[name, "howtoUse"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing How To Use",
                          },
                        ]}
                      >
                        <Input
                          placeholder="How To Use"
                          className="shadow focus:shadow border-none p-2 rounded w-full"
                        />
                      </Form.Item>

                      <MinusCircleOutlined
                        onClick={() => remove(name)}
                        className="mb-6"
                      />
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
          </section>

          <section className="xl:w-1/2 p-4 shadow rounded-lg h-fit mt-5 border">
            <p className="font-semibold mb-4">Key Ingredients</p>
            <Form.List name="ingredients">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space key={key} className="w-full">
                      <Form.Item
                        className="w-96"
                        {...restField}
                        name={[name, "keyIngredients"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing Key Ingredients",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Key Ingredients"
                          className="shadow focus:shadow border-none p-2 rounded w-full"
                        />
                      </Form.Item>

                      <MinusCircleOutlined
                        onClick={() => remove(name)}
                        className="mb-6"
                      />
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
          </section>
        </div>

        <div>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-secondary hover:bg-success mt-5 w-1/2"
            >
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </main>
  );
}
