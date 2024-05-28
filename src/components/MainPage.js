import React from 'react'
import FlexItem from './FlexItem'
import Chart from './pieChart'

// import AdminDropdown from './AdminDropdown'



export default function MainPage() {
    return (
        <main className='mainSection'>

            {/* <AdminDropdown/>
            <br />
            <br /> */}

        <div className='welcomeAdmin'  >

           <h2 style={{margin : '10px' , marginLeft : '20px' ,textAlign : 'center' , paddingTop : '15px' }} >Welcome Admin !</h2>
           <h4 style={{margin : '10px' , marginLeft : '20px' , textAlign : 'center'}} className ='welcomeSubHead' >Here you can manage all the activities of this app </h4>

        </div>

 


<div className='flexContainer'> 
 
<FlexItem  title = "Total Employees" numbers = "30+"/>

<FlexItem  title = "Full Time Employees" numbers = "20+"  />

<FlexItem  title = "Interns" numbers = "10+"  />

</div>
<br/>
<br/>


   <Chart/> 


</main>
    )
}
