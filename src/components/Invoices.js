import React from 'react'
// import AdminDropdown from './AdminDropdown'

import Billing from './Billing'
import InvoiceModal from './InvoiceModal'
import InvoiceHistory from './InvoiceHistory'
import RefreshButton from './RefreshButton'


export default function Invoices() {
    return (
        <>
        <div className='InvoiceMain' >

           {/* <AdminDropdown/>
           <br />
           <br /> */}

            <h1 className='InvoiceHead'  > Invoices  </h1>

        
         <InvoiceModal/>

<br />

<div  className='invoiceRefresh' >
<RefreshButton/>
</div>




         <InvoiceHistory/>
        
        <div>  
        {/* <Billing/> */}
        </div>
       
        </div>

        </>
    )
}
