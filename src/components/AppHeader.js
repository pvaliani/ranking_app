import React, { Component } from 'react'
import { Grid, Container, Header, Image } from 'semantic-ui-react'
import BBCLogo from '../assets/BBCLogo.png';







// -------------


class AppHeader extends Component {
    
   
  
    render() {
    
        
      return (
        <>
       
    
        <Header className="appHeader" textAlign="center"  as='h1'>
          <Image src={BBCLogo} className='logo' /> 
       
         
        </Header> 
     
        </>
      );
    }
  }
  
  export default AppHeader;
  