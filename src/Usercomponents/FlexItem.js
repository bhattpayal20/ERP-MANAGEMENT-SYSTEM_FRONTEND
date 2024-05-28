import React from 'react'

export default function FlexItem(props) {
    return (
        <div className="card">
  <div className="card-body">
    <h3 className="card-title">{props.title}</h3>

   <h1 className='num'> {props.numbers} </h1>
    

 
  </div>

</div>
    )
}
