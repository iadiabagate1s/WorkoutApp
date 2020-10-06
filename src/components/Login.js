import React,{useState, useEffect} from 'react'
import {GoogleLogin, GoogleLogout} from 'react-google-login'
import clientid from '../logininfo'
import firebase from '../service/firebase'


export default function Login({setProf}) {

  const [user, setUser] = useState({})
  const [exists, setExists] = useState(true)
  const db = firebase.firestore()

  async function isRegistered (prof) {
    try{
      let res = await db.collection("User").doc(`${prof.googleId}`).get()
      
      if(res.data()){
        let newdata = res.data()
        console.log('there is data--------', res.data())
        setExists(() => true)
        setUser(user => ({...user, newdata}))
        setProf({user : newdata, is_Logged : true})
      return true
      }else{
        console.log('no data')
        setExists(false)
        return false
      }
      
      
    }catch(err){
      return err
    }
      
  } 
    

    

    async function createUser (prof) {
      
      await db.collection("User").doc(`${prof.googleId}`).set({
        googleId : prof.googleId,
        name: prof.name,
        imageUrl: prof.imageUrl,
        email: prof.email,
        plan : null

    })

    console.log("Document successfully written!");
    let data ={user:{googleId: prof.googleId,
      name: prof.name,
      imageUrl: prof.imageUrl,
      email: prof.email,
      plan : null},
    is_Logged :true}
    setProf(data)
    setUser(data)
    setExists(true)

    }

  
    async function onSuccessLogin(res) {
        console.log('success log in', res.profileObj)

        let eh = await isRegistered(res.profileObj)
        console.log('this is ehhh ', eh)
        if(eh){

        console.log('account exists')
      }else{
        console.log('creating new account---')
        createUser(res.profileObj)
       

      }
      console.log('Log in Done')  
      }

        
      
      
    

    const onFailureLogin = (res) => {
        console.log('Failed log in', res)
    }

    return (
        <div>

                <GoogleLogin 
                clientId={clientid}
                buttonText ='Log in/ Sign Up'
                onSuccess={onSuccessLogin}
                onFailure = {onFailureLogin}
                style={{marginTop : '100px'}}
                isSignedIn={true}
                />
                
              
               
                
               
          
            
        </div>
    )
}
