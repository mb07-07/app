import React, {Component} from 'react';
import { Tab, Tabs, Grid,Cell,Card,CardTitle,CardText,  CardActions,Button,CardMenu,IconButton } from 'react-mdl';
import {motion} from 'framer-motion';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state ={activeTab:0};
    }
    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="body">
                <div className="project-grid">
                <Card shadow={0} style={{minWidth: '450', margin: 'auto',borderRadius:'20%'}}>
                <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://static.production.thenounproject.com/img/nounproject_logo.60e860f212a5.png)  center/ cover'}}>Welcome</CardTitle>
                <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Codepen</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>
                <br></br>

                

                <Card shadow={0} style={{minWidth: '450', margin: 'auto',borderRadius:'20%'}}>
                <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2yyUWLufNgpMV3vNW50se4m1dn2EMkAvdlw&usqp=CAU)  center/ cover' }}>Welcome</CardTitle>
                <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Codepen</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>
                <br></br>
                

                

                <Card shadow={0} style={{minWidth: '450', margin: 'auto',borderRadius:'20%'}}>
                <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGNniaHei45nI3__SfEbJfwKuHpZpcT-wD4g&usqp=CAU)  center/ cover',color:'black  '}}>Welcome</CardTitle>
                <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                <Button  colored>Github</Button>
                <Button colored>Codepen</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>
              </div>
              </div>

                
                
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div><h1>2nd page</h1></div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div><h1>3rd page</h1></div>
            )
        }
    }
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
            <motion.div className="main"
            variants={variant}
      initial='hidden'
      animate='visible'
            >
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} riple>
                <Tab>HTML/CSS/Javascript</Tab>
                <Tab>react</Tab>
                <Tab>Mechanical</Tab>
            </Tabs>
            <Grid>
                <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                </Cell>
            </Grid>
            </motion.div>
            
        )
    }
}
export default Projects;