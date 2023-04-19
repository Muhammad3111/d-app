import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  DashboardOutlined,
  DropboxOutlined,
  CodeSandboxOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Space, Avatar } from "antd";
import Logo from "../assets/logo.png";
import { useNavigate, Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const Layouts: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          className="logo"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={Logo}
            alt="logo"
            style={{ objectFit: "cover", width: "100%" }}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/"]}
          onClick={({ key }) => navigate(key)}
          items={[
            {
              key: "/",
              icon: <DashboardOutlined />,
              label: "Dashboard",
            },
            {
              key: "/sold-products",
              icon: <DropboxOutlined />,
              label: "Sotilgan Mahsulotlar",
            },
            {
              key: "/products",
              icon: <CodeSandboxOutlined />,
              label: "Mahsulotlar",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Space
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 16px",
            }}
            size={16}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
            <Avatar
              size={40}
              icon={<UserOutlined />}
              onClick={() => navigate("/profile")}
            />
          </Space>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Layouts;
