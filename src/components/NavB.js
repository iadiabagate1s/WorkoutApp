import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
import Logout from './Logout'
import Login from './Login'

export default function NavB({prof,setProf,gID, setGId}) {
    return (
        
            <>
  
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src='https://react.semantic-ui.com/logo.png' 
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      T2G
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Link to='/'><Nav.Link style={{backgroundColor:'white', color:'grey', margin:'auto', marginTop:'8px', height:'40px', width:'90px', textAlign:'center'}} href="#home">Home</Nav.Link></Link>

      { prof.is_Logged? 
               <Nav.Link
               name='sign-in'
             >
              <Logout prof={prof} setProf={setProf} gId={gID} setGId={setGId}/>
             </Nav.Link>
              :
              <Nav.Link
              name='sign-in'
           
             
            >
             <Login prof={prof} setProf={setProf} gId={gID} setGId={setGId}/>
            </Nav.Link>
               
        }
     
    </Nav>
  </Navbar>
</>
            
        
    )
}
