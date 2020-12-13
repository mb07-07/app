import React from 'react';
import Landingpage from './landingpage';
import Resume from './resume';
import Aboutme from './aboutme';
import Projects from './projects';
import Contact from './contact';
import {Switch,Route} from 'react-router-dom';

const Main = () => (
    <switch>
        <Route exact path="/" component ={Landingpage}/>
        <Route path="/landingpage" component ={Landingpage}/>
        <Route path="/contact" component ={Contact}/>
        <Route path="/projects" component ={Projects}/>
        <Route path="/resume" component ={Resume}/>
    </switch>
)
export default Main;