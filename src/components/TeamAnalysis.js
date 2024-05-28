import React from 'react'
import TeamAnalysisMember from './TeamAnalysisMember';

export default function TeamAnalysis() {

        const myStyle = {
            display: "flex"  ,
            justifyContent:"space-around",
            
        };


    return (

        <>
        <div style={{backgroundColor : "lightblue" , marginLeft : "50px" , width : "800px" }} >
            <div  style={myStyle} >
                <h3>User Analytics</h3>
                <h3> Web / App Development Team </h3>
            </div>
           <hr/>
      
      <TeamAnalysisMember name = "Pankaj Rawat" work = "Full Stack Developer" improve ="80%+" />
          
      <TeamAnalysisMember name = "Harsh" work = "Flutter developer" improve ="80%+" />

      <TeamAnalysisMember name = "Ankit" work = "Android Developer" improve ="80%+" />

      <TeamAnalysisMember name = "Sahil" work = "Web Developer" improve ="80%+" />

      <TeamAnalysisMember name = "Ansh" work = "Web Developer" improve ="80%+" />
        </div>

<br/>


<br/>
</>


    )
}
