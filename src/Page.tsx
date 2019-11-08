import React from "react";
import "./Page.css";
import { CardContainer } from "./components/CardContainer";
import { Layout, Menu, Icon } from "antd";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

class Page extends React.Component {
  render() {
    return (
      <Layout className="Page">
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
              <CardContainer />
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}

export default Page;
