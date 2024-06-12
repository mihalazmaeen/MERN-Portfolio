import { Modal } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Button, message } from "antd";
import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlice";
import axios from "axios";

function AdminProjects() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const [showAddEditModal, setShowAddEditModal] = React.useState(false);
  const [selectedItemorEdit, setSelectedItemorEdit] = React.useState(null);
  const { project } = portfolioData;
  const [type, setType] = React.useState("add");

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/delete-project", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;
      if (selectedItemorEdit) {
        response = await axios.post("/api/portfolio/update-project", {
          ...values,
          _id: selectedItemorEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-project", values);
      }

      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        setSelectedItemorEdit(null);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          className="bg-primary text-white px-5 py-2 mb-3"
          onClick={() => {
            setSelectedItemorEdit(null);
            setShowAddEditModal(true);
          }}
        >
          Add project
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {project.map((project, index) => (
          <div className="shadow border p-5 border-gray-400">
            <h1 className="text-primary text-xl font-bold mb-2">
              {project.title}
            </h1>
            <hr />
            <img
              src={`http://localhost:5000/uploads/${project.image}`}
              alt="mihal"
              className="h-40 w-60 text-center"
            />
            <h1 className="mb-2">Project Link: {project.link}</h1>
            <h1 className="mb-2">{project.description}</h1>
            <div className="mb-2">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-500 text-white px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-5 mt-3">
              <button
                className="bg-primary text-white px-5 py-2"
                onClick={() => {
                  setSelectedItemorEdit(project);
                  setShowAddEditModal(true);
                  setType("edit");
                }}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-5 py-2"
                onClick={() => onDelete(project)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {(type === "add" || selectedItemorEdit) && (
        <Modal
          open={showAddEditModal}
          title={selectedItemorEdit ? "Edit project" : "Add project"}
          footer={null}
          onCancel={() => {
            setShowAddEditModal(false);
            setSelectedItemorEdit(null);
          }}
        >
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={selectedItemorEdit}
          >
            <Form.Item name="link" label="Link">
              <Input placeholder="Link" />
            </Form.Item>
            <Form.Item name="title" label="Title">
              <Input placeholder="Title" />
            </Form.Item>
            <Form.Item name="technologies" label="Technologies">
              <Input.TextArea placeholder="Technologies" />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <Input.TextArea placeholder="Description" />
            </Form.Item>
            <div className="flex justify-end">
              <button
                className="border-primary text-primary px-5 py-2"
                onClick={() => setShowAddEditModal(false)}
              >
                Cancel
              </button>
              <button className="bg-primary text-white px-5 py-2">
                {selectedItemorEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default AdminProjects;
