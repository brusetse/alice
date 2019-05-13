import React, { Component } from 'react';
import logo from './logo.svg';
import {Button, Icon, Row, Col, Layout} from 'antd';
import './App.css';
import { BrowserRouter, HashRouter, Route, Link } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <BrowserRouter>
              <Link to={'/yep'}>fucking crazy</Link>
          </BrowserRouter>
          <Button type="primary"><Icon type="left" />Button</Button>
          <Button type="danger">Danger</Button>
          <br/>
          <Button type="primary" shape="circle" icon="search" />
          <Button type="primary" icon="search">Search</Button>
          <br/>
          <Icon type="apple" style={{ fontSize: 32, color: '#3c3f41' }} />
          <div>
              <Row>
                  <Col span={12}>col-12</Col>
                  <Col span={12}>col-12</Col>
              </Row>
              <Row>
                  <Col span={8}>col-8</Col>
                  <Col span={8}>col-8</Col>
                  <Col span={8}>col-8</Col>
              </Row>
              <Row>
                  <Col span={6}>col-6</Col>
                  <Col span={6}>col-6</Col>
                  <Col span={6}>col-6</Col>
                  <Col span={6}>col-6</Col>
              </Row>
          </div>
          <div>
              <Row>
                  <Col span={8}>col-8</Col>
                  <Col span={8} offset={8}>col-8 col-offset-8</Col>
              </Row>
              <Row>
                  <Col span={6} offset={6}>col-6 col-offset-6</Col>
                  <Col span={6} offset={6}>col-6 col-offset-6</Col>
              </Row>
              <Row>
                  <Col span={12} offset={6}>col-12 col-offset-6</Col>
              </Row>
          </div>
          <div>
              <Layout>
                  <Header>Header</Header>
                  <Content>Content</Content>
                  <Footer>Footer</Footer>
              </Layout>
          </div>
      </div>
    );
  }
}

export default App;
