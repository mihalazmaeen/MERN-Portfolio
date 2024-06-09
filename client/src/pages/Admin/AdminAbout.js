import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";

function AdminAbout() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const [imageFile, setImageFile] = useState(null);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      const requestData = {
        ...values,
        _id: portfolioData?.about?._id,
        image: imageFile, // Assign the image file directly
      };

      // Append image file to the request data if it exists
      if (imageFile) {
        requestData.image = imageFile;
      }

      const response = await axios.post(
        "/api/portfolio/update-about",
        requestData
      );

      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]); // Set the selected image file
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 1200 }}
        autoComplete="on"
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData?.about}
      >
        <Form.Item
          name="aboutIntro"
          label="Description"
          rules={[{ required: true, message: "Please input description!" }]}
        >
          <Input.TextArea placeholder="Description" />
        </Form.Item>
        <Form.Item
          name="skillTitle"
          label="Skill Title"
          rules={[{ required: true, message: "Please input Skill Title!" }]}
        >
          <Input placeholder="Skill Title" />
        </Form.Item>
        <Form.Item label="Upload Image">
          <input type="file" onChange={handleImageChange} accept="image/*" />
        </Form.Item>
        <div className="flex justify-end w-full">
          <Button type="primary" htmlType="submit">
            SAVE
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AdminAbout;
