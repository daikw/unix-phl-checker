import React from "react";
import { Layout, Menu, Radio, ConfigProvider, Icon } from "antd";

// locales
import { Locale } from "antd/es/locale-provider";
import enGB from "./custom_locale/en_GB";
import jaJP from "./custom_locale/ja_JP";

// events
import { RadioChangeEvent } from "antd/lib/radio";
import { ClickParam } from "antd/lib/menu";

// components
import Page from "./Page";

const { Header, Footer } = Layout;

interface State {
  locale: Locale;
  category: string;
}

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      locale: enGB,
      category: "main"
    };
  }

  changeLocale = (e: RadioChangeEvent) => {
    const localeValue = e.target.value;
    this.setState({ locale: localeValue });
  };

  handleToggleMenu = (e: ClickParam) => {
    this.setState({ category: e.key });
  };

  render() {
    const { locale, category } = this.state;

    return (
      <Layout className="App">
        <Header className="header">
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: "64px" }}
            onClick={this.handleToggleMenu}
            defaultSelectedKeys={["main"]}
          >
            <Menu.Item key="main">
              <Icon type="compass" />
              <span>Main principles</span>
            </Menu.Item>
            <Menu.Item key="sub">
              <Icon type="bulb" />
              <span>Sub principles</span>
            </Menu.Item>

            <Radio.Group
              className="change-locale"
              value={locale}
              onChange={this.changeLocale}
              style={{ float: "right" }}
            >
              <Radio.Button key="en" value={enGB}>
                English
              </Radio.Button>
              <Radio.Button key="jp" value={jaJP}>
                日本語
              </Radio.Button>
            </Radio.Group>
          </Menu>
        </Header>
        <ConfigProvider locale={locale}>
          <Page
            key={
              locale
                ? locale.locale
                : "en" /* Have to refresh for production environment */
            }
            category={category}
          />
        </ConfigProvider>
        <Footer style={{ textAlign: "center" }}>
          ©2019 Created by{" "}
          <a href="https://www.linkedin.com/in/daiki-watanabe-578761b6/">
            Daiki Watanabe
          </a>
          <div style={{ fontSize: 8 }}>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </Footer>
      </Layout>
    );
  }
}

export default App;
