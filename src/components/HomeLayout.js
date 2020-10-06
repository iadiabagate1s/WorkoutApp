import React,{useEffect} from 'react'
import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import Login from './Login'
import firebase from '../service/firebase'
import Logout from './Logout'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'
import { createBrowserHistory } from 'history';



export default function HomeLayout({prof, setProf, gID, setGId}) {
  const db = firebase.firestore()
   
  const history = createBrowserHistory()
    console.log('glob home',prof)
    



    return (
        <div>
            
            
            

           <div className='header' >
               <h1 className='title'><span className='yt'>TRUE</span><span className='yell'>TO</span><span className='yt'>THE</span><span className='yell'>GRIND</span></h1>
               <h3 className="call">IMPACT. INFLUENCE. INSPIRE</h3>
               <h6 className='name'> @COACHDEVINNE </h6>
               
               { !prof.is_Logged? 
               <div className='contlog'>
               <h4 className='welcome'> FREE 3 WEEK PLAN TODAY</h4>
               <Login className='log' setGId={setGId} gID={gID} setProf={setProf}/>
              </div> :
              <>
              <h4 className='welcome'> Welcome Back {prof.user.name}!!</h4>
                <div style={{display:'none'}}className='contlog'>
                
                <Logout className='log' setProf={setProf}/>

            </div>
            <div className='contlog'>
                {! prof.user.plan? <Link to='/plans'>
                <Button animated>
      <Button.Content visible>Select Free Plan</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
                    {/* <button style={{marginTop:'75px'}}>Select a Free plan</button>  */}
                    </Link>:  <Link to='/workout'>
                      
                    <Button animated>
      <Button.Content visible>Continue Workout</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
                        
     
                        
                        </Link>}
            </div>
            </>
                   }
               
               
           </div>
   
            
        </div>
    )
}
