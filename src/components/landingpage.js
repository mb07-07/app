import React, {Component} from 'react';
import { Cell, Grid } from 'react-mdl';
import Typical from 'react-typical';
import {motion} from 'framer-motion';

class Landingpage extends Component{
    render(){
        const variant ={
            hidden:{
              y:'-50vh',
              opacity : 0
            },
            visible:{
              y: 0,
              opacity: 1,
              transition:{
                  dealy:0.1,duration:0.5
              }
            }
          }
        return(
            <motion.div style={{width:'100%',height:'100%',margin:'auto'}}
            variants={variant}
      initial='hidden'
      animate='visible'
      
            >
                <Grid className="landing-grid">
                    <Cell col={12}></Cell>
                    <title></title>
                    <img
                      src="https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png"
                      alt="avatar"
                      className="avatar-img"
                    />
                    <div className="banner-text">
                        <h1>Hi....Its Bhanu</h1>
                        <p>I'm a {''}

                            <Typical
                            loop = {Infinity}
                            wrapper ="b"
                            steps={[
                                'developer',
                                1000,
                                'designer',
                                1000,
                                'sports enthusiast',
                                1000
                            ]}
                            />

                        </p>
                    <hr></hr>
                    <p>HTML/CSS | Javascript | React | python</p>

            </div>
                </Grid>
            </motion.div>
        )
    }
}
export default Landingpage;