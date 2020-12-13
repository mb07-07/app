import React,{Component} from 'react';
import './App.css';
import {Layout,Navigation,Header,Drawer,Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render(){
    
    return(
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="#Bhanu" scroll>
         
            <Navigation >
                <Link className="nav" to="/resume">Resume</Link>
                <Link className="nav" to="/landingpage">home</Link>
                <Link className="nav" to="/projects">Projects</Link>
                <Link  className="nav"to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer className="drawer-color" >
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">Aboutme</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
   </ div>
    );
  }
}

export default App;

