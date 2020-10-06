import React,{useState,useEffect} from 'react'
import firebase from '../service/firebase'
import 'semantic-ui-css/semantic.min.css'
import {createBrowserHistory} from 'history';
// import { Button, Icon } from 'semantic-ui-react'
import Button from 'react-bootstrap/Button'
export default function WorkoutHome({prof, setProf, gID, setGId}) {

    // if user is logged out and no user data is detected 
    // user history object to push/ redirect to index and reload page
    const history = createBrowserHistory()
    console.log('prof before all', prof)
    const db = firebase.firestore()
    if (prof.is_Logged == false){
       
        history.push({
            pathname:'/',
            state: {reload :true}
        })
        window.location.reload()
    }
    let day
const [userdata , setUserData] = useState({})
const [workout, setWorkout] = useState({})

    const [count, setCount] = useState(prof.user.day)




console.log('userdata---', userdata)
console.log('counting ---', count,'--------')

//get workout information from database
async function work(){
  let dt = await db.collection("Workouts").get()
  
    let wk = dt.docs.filter(re => {
       
        if (re.id.slice(0,5) == prof.user.plan){ 
            console.log('re inide4444444',  re.data())
            let ress = re.data()
            setWorkout(ress)
            return ress
        }else{ console.log('nothing')}})
}

console.log('wk------', workout)
  
    
//get profile information from database
async function getprof(prof){
    try{
      let res = await db.collection("User").doc(`${prof.user.googleId}`).get()
      console.log("Current data: ",prof.user.googleId ,res.data());
        
        let newnew = {
            is_Logged :true,
            user : res.data()
        }
        setProf(newnew)
        setUserData(res.data())
    }catch(err){
        console.log(err)
    }
    }


// update profile information.. which day after increment 
async function updateData(dday){
    let ret = await db.collection("User").doc(`${prof.user.googleId}`).set({
      ...prof.user,
      day : dday, 
   })
   
console.log("Plan updated successfully", dday, ret);

}

function handleClick(){
    day = day+1 
    setCount(count => count+ 1)
   
   
}

useEffect(() => {
    updateData(count)
    getprof(prof)
    work()
    
    
    
}, [count])



if(workout.Days){
    if (!workout.Days[count]){
        return(
            <div className='contwk'>
                <div className='ctwk'>
                <h1 style={{textAlign:'center', fontSize:'2rem', color:'gold'}}>Workout Plan Completed</h1>
            <h4 style={{textAlign:'center', fontSize:'2rem', color:'blue'}}>Stay tuned. Full Platform available soon</h4>

                </div>
            


            </div>
        )
    }
   
    return (
        <>
        <div className='contwk'> 
        <div className='ctwk'>
            <h2 style={{color:'blue'}}>TODAYS GRIND</h2>
            <h3 style={{color:'blue'}}>Day {count + 1}</h3>
            
            {/* <h1>{workout.Days[userdata.day]}</h1> */}
            <div>
            { Object.entries(workout.Days[count][`Day ${count+1}`]).map((t,k) => <h3 className='wk'> {t[0]} : {t[1]} </h3>) }  
            </div>
            <Button style={{textAlign:'center', margin : '1.9rem auto'}} onClick={handleClick}  variant="primary">Next Day</Button>{' '}
    {/* <Button style={{textAlign:'center', margin : '1.9rem auto'}} onClick={handleClick} animated='fade'>
      <Button.Content visible>Complete</Button.Content>
      <Button.Content hidden>Next Day</Button.Content>
    </Button> */}
            
        </div>
        
        </div>
        
        </>
    )}
 
        if( !workout['days']|| !workout.Days){

            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            )}
        else{
        return (

            <div className='contwk'>

            <h1 style={{textAlign:'center', fontSize:'2rem'}}>Workout Plan Completed</h1>
            <h4 style={{textAlign:'center', fontSize:'2rem'}}>Stay tuned. Full Platform available soon</h4>


            </div>
        
        
        
        )
    }





}
