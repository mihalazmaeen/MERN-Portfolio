import React from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { useSelector } from "react-redux";


function Admin() {
  const { portfolioData } = useSelector((state) => state.root);
  const onChange = (key) => {};
  const items = [
    {
      key: "1",
      label: "Intro",
      children: <AdminIntro />,
    },
    {
      key: "2",
      label: "About",
      children: <AdminAbout />,
    },
  ];
  return (
    <div>
      <Header />
      {portfolioData && (
        <div className="mt-5 p-5">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      )}
    </div>
  );
}

export default Admin;
