import React from 'react';
import MaterialTable from 'material-table';

import Button from '@mui/material/Button';



export default function ApplicationDataTable() {
  const { useState,useEffect } = React;
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3800/getData')
      .then(resp => resp.json())
      .then(resp => {
        console.log("resp", resp) 
        setData(resp)
      })
  }, [])

    return (
        <div className='tables'>
          <MaterialTable
            columns={[
              { title: 'Invoice Number', field: 'invoice_number'},
              { title: 'Date', field: 'date'  },
              { title: 'Name', field: 'name' },
              { title: 'Address', field: 'address'},
              { title: 'Item', field: 'item'},
              { title: 'Description', field: 'discrip'},
              { title: 'Gst', field: 'gst' },
              { title: 'Total', field: 'gTotal'}
            
            ]}
   data = {data.data}

     


            title="Invoice History"
          />
        </div>
      )
}
