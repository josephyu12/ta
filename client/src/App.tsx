import { Layout ,Divider} from 'antd';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { InitialState, RootDispatcher } from "./store/root-reducer";
import './App.less';

import OutpondFooter from "./components/OutpondFooter";
import Home from "./views/Home";
import Login from "./views/login";





const { Header, Content, Footer } = Layout;

interface StateProps {
  username: string;
}


const App = () => {
  const { username } = useSelector<InitialState, StateProps>((state: InitialState) => {
    return {
      username: state.username
    }
  });
  const dispatch = useDispatch();
  const rootDispatcher = new RootDispatcher(dispatch);

  return (
    <Layout >
      <Router basename={process.env.PUBLIC_URL}>
        <Header>
          <div className="header-row" >
            <div className="logo-container">
              <h1>Remote teaching assistant joseph</h1>
            </div>
            <div className="language-selection-zone">
              <Link className="language-selection-text" to={"/login"}  ><span>{username}</span></Link>
            </div>
          </div>
        </Header>

        <Content style={{ padding: '0 50px' }}>
          <div>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/Login">
                <Login />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Content>
       
        <Footer className="footer-box" >
            <OutpondFooter />
        </Footer>
      </Router>
    </Layout>

  );
}

export default App;


