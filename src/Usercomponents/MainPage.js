import React from 'react'
import CurrentTask from './CurrentTask'
import FlexItem from './FlexItem'
import SimpleLineChart from './SimpleLineChart'
import UserDropdown from './UserDropdown'





export default function MainPage(props) {
    return (
        <main className='mainSection'>

            {/* <UserDropdown/> */}

          

        <div className='welcomeAdmin'  >

        

           <h2 style={{margin : '10px' , marginLeft : '20px' ,textAlign : 'center' , paddingTop: '15px' }} >Welcome {props.data.name} !</h2>
           <h4 style={{margin : '10px' , marginLeft : '20px' , textAlign : 'center' , paddingBottom : '15px'}}  >Here you can manage all the activities of this app </h4>

        </div>


   <div className='flexContainer'> 
 
        <FlexItem  title = "Attendance" numbers = "24"/>

        <FlexItem  title = "Tasks" numbers = "10+"  />

        <FlexItem  title = "Leaves Taken" numbers = "2"  />

   </div> 
<br/>
<br/>

<div>

<CurrentTask/>

</div>

</main>
    )
}
