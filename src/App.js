import React,{useState, useEffect} from 'react';
import './App.css';

import firebase from "./service/firebase"
import {useDispatch, useSelector} from 'react-redux'
import HomeLayout from './components/HomeLayout'
import WorkoutHome from './components/WorkoutHome'
import {BrowserRouter, Route} from 'react-router-dom'
import PlansHome from './components/PlansHome'
import NavB from './components/NavB'
function App() {

  const db = firebase.firestore()

  const INI = {user : null,
    is_Logged: false}

const [prof, setProf]= useState(INI)
const [gID, setGId]= useState(0)



  return (
    <div className="App">
      <BrowserRouter>
    
    <NavB prof ={prof} setProf={setProf} gId={gID} setGId={setGId}/>
     <Route exact path='/workout'>
      <WorkoutHome prof={prof} setProf={setProf} gId={gID} setGId={setGId}/>
      </Route>

     <Route exact path='/plans'>
      <PlansHome prof={prof} setProf={setProf} gId={gID} setGId={setGId}/>
      </Route>


     <Route exact path='/'>
      <HomeLayout prof={prof} setProf={setProf} gId={gID} setGId={setGId}/>
      </Route>

      

      </BrowserRouter>
    
    </div>
  );
}

export default App;
