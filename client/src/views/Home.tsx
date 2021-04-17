import { Col, Layout, Row } from 'antd';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import ContentPlaceHolder from "../components/ContentPlaceHolder";


const { Header, Content, Footer, Sider } = Layout;

interface Props {
}
interface StateProps {
  language: string;
}

const Home = () => {

  return (


    <Content>
      <Row justify="center">
        <ContentPlaceHolder title="home" />
      </Row>

    </Content>

  );

}

export default Home;

