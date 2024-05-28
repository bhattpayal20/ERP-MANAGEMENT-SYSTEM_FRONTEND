import React from 'react'

export default function TeamAnalysisMember(props) {

    const myStyle = {
        display: "flex"  ,
        justifyContent:"space-around",
        
    };



    return (
        <div   style={myStyle}>

                    <div>
                    <h3> {props.name} </h3>
                    <h5> {props.work} </h5>
                    </div>

                <div  style={myStyle } >
                    <h4  style={{marginRight : "20px"}} >{props.improve}</h4>
                            <div className='view' style={{color : "blue" , width : "60px" , height : "40px" ,margin : "20px" , cursor : 'pointer'}} >
                                View
                            </div>
                </div>

       </div>
       
    )
}
