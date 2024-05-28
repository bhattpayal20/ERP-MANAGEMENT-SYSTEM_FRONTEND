import React from 'react'
// import { Link } from 'react-router-dom'

export default function TeamCard(props) {
    return (
      
            <div className='team'  >
         <h3  style={{textAlign : 'center'}}  > {props.ActivityName} </h3> 
         <h2 style={{textAlign : 'center'}}  >   {props.values}     </h2>
            </div>
           
      
    )
}
