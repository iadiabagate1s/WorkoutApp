import React,{useState} from 'react'
import firebase from '../service/firebase'
import {Link} from 'react-router-dom'
export default function PlansHome({prof, setProf}) {
    const db = firebase.firestore()

    const [selectedOption, setSelectedOptions] = useState('planA')

      const handleOptionChange= (e) =>{
          setSelectedOptions(e.target.value)
      }
      //update database with plan selected
      const handleClick = ()=>{
          let newplan = {...prof.user,
              plan : selectedOption,
              day : 0
          }
          console.log('plan added$$$$$$$', newplan)
          setProf(newplan)
          db.collection("User").doc(`${prof.user.googleId}`).set({
            ...newplan,
            
         })
         .then(function() {
             setProf(newplan)
             console.log("Plan updated successfully written!");
         })
         .catch(function(error) {
             console.error("Error writing document: ", error);
         });
      }
    
    return (
        <div style={{textAlign:'center'}}>
            <h1>Select A plan </h1>
            <div className='plancont'>

                <div  value='planA' id='planA' className='plan'> <h2 className='lab'>15 DAY SUPER CHALLENGE</h2>
                
                <div className='in'><label><input checked={selectedOption === 'planA'} onChange={handleOptionChange} type='radio' value='planA'/>Plan A</label></div>
                
                </div>
                
                <div  value='planB' id='PlanB' className='plan'><h2 className='lab'>10 DAY FULL BODY WORKOUT</h2>
                
                <div className='in'><label><input checked={selectedOption === 'planB'} onChange={handleOptionChange} type='radio' value='planB'/>Plan B</label></div>
                
                </div>
                
                <div  value='PlanC' id='PlanC' className='plan'> <h2 className='lab'>15 DAY FLAT STOMACH CHALLENGE</h2>
                
                <div className='in'><label><input checked={selectedOption === 'PlanC'} onChange={handleOptionChange} type='radio' value='PlanC'/>Plan C</label></div>
                
                </div>
               

                




            </div>
            <Link to='/'><button onClick={handleClick} className='start'>Start</button></Link>
            
        </div>
    )
}
