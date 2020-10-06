import React,{useState, useEffect } from 'react'
import {GoogleLogout} from 'react-google-login'
import clientid from '../logininfo'


import {Link} from 'react-router-dom'

export default function Logout({setProf}) {




    const onSuccess = () => {
        setProf({user:null, is_Logged : false})
        alert('Log out successful')
    }

    const onFailure = (res) => {
        console.oog('Failed log in', res)
    }

    return (
        <div>
            <Link to='/'><GoogleLogout 
                clientId={clientid}
                buttonText ='Logout'
                onLogoutSuccess={onSuccess}
                onFailure={onFailure}
                /></Link>
            
        </div>
    )
}
