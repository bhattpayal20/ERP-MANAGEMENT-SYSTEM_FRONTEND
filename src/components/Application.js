import React from 'react'
// import AdminDropdown from './AdminDropdown'
import ApplicationDataTable from './ApplicationDataTable'
import RefreshButton from './RefreshButton'

export default function Application() {
    return (
        <div className='ApplicationPage' >


            <h1 className='ApplicationHead' >Applications</h1>

      

            <div className='applicationRefresh'>
           <RefreshButton/>
           </div>
          <br />
          <br />
          <br />
          
           <ApplicationDataTable/>

            
        

        </div>
    )
}
