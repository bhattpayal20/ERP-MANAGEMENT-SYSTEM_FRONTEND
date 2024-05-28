import React from 'react';
import Button from '@mui/material/Button';

import InvoiceHistory from './InvoiceHistory'

import InvoiceModal from './InvoiceModal'

export default function Billing() {


  return(

    <>
   <div>

   <InvoiceModal/>

<br/>
<br/>
<br/>



{/* <h1>Invoice History</h1> */}
   <InvoiceHistory/>
   
   <br/>
<br/>
<br/>

    
   </div>


  

   </>
   )
 

 

  }