import React from 'react';
import MaterialTable from 'material-table'

export default function Table(props)
 {
     
  return (
  <div>
       <MaterialTable
          
            data={props.data}
            
            columns={props.columns }
            options={{
              exportButton: true,
            }}

            title = {props.title}
          />
  </div>);
}
