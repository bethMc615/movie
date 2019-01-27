import React, { Component } from 'react';
import { Layout } from 'antd';
import HeaderContainer from './HeaderContainer';
import BreadcrumbContainer from './BreadcrumbContainer';
import MainContainer from './MainContainer';
import FooterContainer from './FooterContainer';
import './App.scss';

class App extends Component {
  render() {
    const { Header, Content, Footer } = Layout;
    return (
      <Layout className="layout">
        <Header>
          <HeaderContainer />
        </Header>
        <BreadcrumbContainer />
        <Content>
          <MainContainer />
        </Content>
        <Footer>
          <FooterContainer />
        </Footer>
      </Layout>
    );
  }
}

export default App;
