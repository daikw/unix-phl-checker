import React from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";
import { Layout, Menu, Icon } from "antd";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const titles = ["Small is beautiful."];
const descriptions = [
  "Small things have tremendous advantages over their larger counterparts. Among these is the ability to combine with other small things in the unique and useful ways."
];

const App: React.FC = () => {
  return (
    <Layout className="App">
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "10px 50px" }}>
        <Layout style={{ padding: "24px 0", background: "#fff" }}>
          <Sider width={200} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="compass" />
                    Main principles
                  </span>
                }
              ></SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="bulb" />
                    Sub principles
                  </span>
                }
              ></SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <CardContainer
              titles={titles}
              descriptions={descriptions}
            ></CardContainer>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        ©2019 Created by Daiki Watanabe
      </Footer>
    </Layout>
  );
};

export default App;
