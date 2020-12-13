import React, {Component} from 'react';
import { Cell, Grid } from 'react-mdl';
import Education from './education';
import Skills from './skills';
import {motion} from 'framer-motion'

class Resume extends Component{
    render(){
      const variant ={
        hidden:{
          x:'-30vh',
          opacity : 0
        },
        visible:{
          x: 0,
          opacity: 1,
          transition:{
              dealy:0.2,duration:0.5
          }
        }
      }
        return(
            <motion.div
            variants={variant}
      initial='hidden'
      animate='visible'
            >
              
                <Grid>
                    <Cell col={4}> 
                    <div style ={{textAlign:'center'}}>
                        <img
                        src="https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png"
                        alt= "avatar"
                        style={{height:'200px'}}
                        />
                    
                    </div>
                    <h2 style={{paddingTop:'2em'}}>Bhanu</h2>
                    <h4 style ={{color:'grey'}}>programmer</h4>
                    <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make</p>
                     <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                     <h5>Address</h5>
                     <p>hyderabad,Telangana</p>
                     <h5>phone</h5>
                     <p>9100292117</p>
                     <h5>e-mail</h5>
                     <p>bhanu.punkz@gmail.com</p>
                     <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>

                    </Cell> 
                    <Cell className="resume-right-col"col={8}>
                        
                        <h2>Education</h2>
                        <Education
                        startYear={2016}
                        endYear={2020}
                        schoolName="IIT HYDERABAD"
                        schoolDescription="(I did my B.Tech in mechanical engineering from IITH.)"
                        />
                         <Education
                        startYear={2014}
                        endYear={2016}
                        schoolName="Sri chaitanya junior college"
                         />
                         <Education
                        endYear={2014}
                        schoolName="Vivekananda kendra vidyalaya"
                        />
                        <hr style ={{borderTop:'3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills
                          skill="Javascript"
                          progress={80}
                        />
                        <Skills
                          skill="HTML/CSS"
                          progress={90}
                        />
                        <Skills
                          skill="React"
                          progress={80}
                        />
                        <Skills
                          skill="python"
                          progress={80}
                        />
                        <Skills
                          skill="C++"
                          progress={70}
                        />
                    
                    </Cell>

                </Grid>
               
            </motion.div>
            
        )
    }
}
export default Resume;