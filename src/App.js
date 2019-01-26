import React, { Component } from 'react';
import { Layout } from 'antd';
import HeaderContent from './HeaderContent';
import BreadcrumbContent from './BreadcrumbContent';
import MainContent from './MainContent';
import FooterContent from './FooterContent';
import './App.css';

class App extends Component {
  render() {
    const { Header, Content, Footer } = Layout;
    return (
      <Layout className="layout">
        <Header>
          <HeaderContent />
        </Header>
        <BreadcrumbContent />
        <Content style={{ padding: '0 0px' }}>
          <MainContent />
        </Content>
        <Footer>
          <FooterContent />
        </Footer>
      </Layout>
    );
  }
}

export default App;
