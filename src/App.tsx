import React from "react";
import { Layout, Menu, Radio, ConfigProvider } from "antd";
import Page from "./Page";

// locales
import { Locale } from "antd/es/locale-provider";
import enGB from "./custom_locale/en_GB";
import jaJP from "./custom_locale/ja_JP";

const { Header, Footer } = Layout;

interface State {
  locale: Locale;
}

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      locale: enGB
    };
  }

  changeLocale = (e: any) => {
    const localeValue = e.target.value;
    this.setState({ locale: localeValue });
  };

  render() {
    const { locale } = this.state;

    return (
      <Layout className="App">
        <Header className="header">
          <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
            <Radio.Group
              className="change-locale"
              value={locale}
              onChange={this.changeLocale}
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
          />
        </ConfigProvider>
        <Footer style={{ textAlign: "center" }}>
          ©2019 Created by Daiki Watanabe
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
