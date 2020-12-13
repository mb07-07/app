import React, {Component} from 'react';
import { Cell, Grid,  } from 'react-mdl';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram,
    faGithub,
    faLinkedin,
    
  } from "@fortawesome/free-brands-svg-icons";
  import {motion} from 'framer-motion';

class Contact extends Component{
    render(){
      
        return(
            <motion.div className="contact-body"
            animate={{
                scale: [1, 0.6, 0.7, 0.8, 1],
                rotate: [0,0,270,270,0],
                
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.6, 1],
                loop: 0,
              }}
            >
                <Grid className="contact-grid"  scroll>
                    <Cell col={4}>
                        <h2>M BHANU PRASAD</h2>
                        <img className = "img-avatar"
                        src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-256.png"
                        alt="avatar"
                        />
                        <div className="banner">
                            <p>Want to connect with me?? <br></br>
                                Feel free to contact me on any of the social links
                            </p>
                            <p>email-Bhanu.punkz@gmail.com <br></br>
                                phone - 9100292117
                            </p>
                        </div>
                    </Cell>  
                    <div className="nn">
                    <Cell col={12}>
                        
                        <h2>CONTACT ME</h2>
                        <hr/>
                        <div className="phone">
                        <i className="fa fa-phone-square" aria-hidden="true"/>   9100292117
                       </div>
                       <div className="mail">
                        <i className="fa fa-envelope-square" aria-hidden="true"/>   bhanu.punkz@gmail.com
                       </div>
                        
                        
                        <div className="contact-links">
                        {/* linkedin */}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon  icon={faInstagram} size= "2x"/>
                        </a>

                         {/* github */}
                         <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} size= "2x"/>
                         </a>
                         {/* twitter */}
                         
                         <a href="http://google.com" rel="noopener noreferrer"    target="_blank">
                         <FontAwesomeIcon icon={faGithub} size= "2x"/>
                         </a>
                         <a href="http://google.com" rel="noopener noreferrer"    target="_blank">
                            <FontAwesomeIcon icon={faLinkedin } size= "2x"/>
                        </a>
                    </div>
                    

                        
                        
                    </Cell>
                    </div> 
                    
                </Grid>
            </motion.div>
        )
    }
}
export default Contact;