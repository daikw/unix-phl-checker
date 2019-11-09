import React from "react";
// import "./Page.css";
import { CardContainer } from "./components/CardContainer";
import { Layout } from "antd";

const { Content } = Layout;

interface Props {
  category: string;
}

class Page extends React.Component<Props, {}> {
  render() {
    const { category } = this.props;
    return (
      <Layout className="Page">
        <Content style={{ padding: "10px 50px" }}>
          <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <CardContainer category={category} />
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}

export default Page;
