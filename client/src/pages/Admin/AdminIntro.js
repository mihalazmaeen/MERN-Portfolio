import React from "react";
import { Form, Input, Row, Col } from "antd";
import { useSelector } from "react-redux";


function AdminIntro() {
    const {portfolioData} = useSelector((state) => state.root);
    const onFinish=(values)=>{
        console.log(values)
    }
  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 24,
        }}
        style={{
          maxWidth: 1200,
        }}
      
        autoComplete="on"
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData?.intro}
      >
        <Form.Item
          name="welcomeText"
          label="Welcome Text"
          rules={[
            {
              required: true,
              message: "Please input Welcome Text!",
            },
          ]}
        >
          <Input placeholder="Welcome Text" />
        </Form.Item>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[
                {
                  required: true,
                  message: "Please input First Name!",
                },
              ]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="middleName" label="Middle Name">
              <Input placeholder="Middle Name" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[
                {
                  required: true,
                  message: "Please input Last Name!",
                },
              ]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="designation"
          label="Designation"
          rules={[
            {
              required: true,
              message: "Please input designation!",
            },
          ]}
        >
          <Input placeholder="Designation" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please input description!",
            },
          ]}
        >
          <Input.TextArea placeholder="Description" />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className="px-5 py-2 bg-primary text-white" type="submit">SAVE</button>
        </div>
      </Form>
    </div>
  );
}

export default AdminIntro;
