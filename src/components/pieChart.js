import React from 'react'
import {ResponsiveContainer , LineChart , Line , XAxis , YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, BarChart, Bar} from 'recharts'

const pdata = [
    {
      name: 'Python',
      student: 13,
      fees: 10
    },
    {
      name: 'Javascript',
      student: 15,
      fees: 12
    },
    {
      name: 'PHP',
      student: 5,
      fees: 10
    },
    {
      name: 'Java',
      student: 10,
      fees: 5
    },
    {
      name: 'C#',
      student: 9,
      fees: 4
    },
    {
      name: 'C++',
      student: 10,
      fees: 8
    },
  ];



export default function SimpleLineChart() {

    return (
      <>
  <div className='mainChartsDiv'  >
{/* <div  style={{display : "flex"}} > */}
        <ResponsiveContainer width={'100%'} aspect={3}  >
        <LineChart data={pdata} width={500} height={300}      margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }} >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value) => value + " Programming"} />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: 'grey' }} />
          <Legend />
          <Line type="monotone" dataKey="student" stroke="red" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="fees" stroke="green" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

      <br/>
<br/>
<br/>
<br/>


      <ResponsiveContainer className='chart2' aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={pdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="student" fill="#8884d8" />
          <Bar dataKey="fees" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>


      {/* </div> */}
      
<br/>
<br/>
<br/>
<br/>


      <ResponsiveContainer className='chart3' aspect={3}>
        <AreaChart
          width={500}
          height={300}
          data={pdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="student" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>

      </div>

      <br/>
      <br/>
      <br/>
      <br/>


      </>
    )
}




// import React from 'react'
// import { Pie } from 'react-chartjs-2'

// // defaults.global.tooltips.enabled = false
// // defaults.global.legend.position = 'bottom'

// const BarChart = () => {
//   return (
//     <div>
//       <Pie
//         data={{
//           labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//           datasets: [
//             {
//               label: '# of votes',
//               data: [12, 19, 3, 5, 2, 3],
//               backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//               ],
//               borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)',
//               ],
//               borderWidth: 1,
//             },
//             // {
//             //   label: 'Quantity',
//             //   data: [47, 52, 67, 58, 9, 50],
//             //   backgroundColor: 'orange',
//             //   borderColor: 'red',
//             // },
//           ],
//         }}
//         height={400}
//         width={600}
//         options={{
//           maintainAspectRatio: false,
//           scales: {
//             yAxes: [
//               {
//                 ticks: {
//                   beginAtZero: true,
//                 },
//               },
//             ],
//           },
//           legend: {
//             labels: {
//               fontSize: 25,
//             },
//           },
//         }}
//       />
//     </div>
//   )
// }

// export default BarChart

// import React from "react";
// import { Line } from "react-chartjs-2";
// import { MDBContainer } from "mdbreact";

// class ChartsPage extends React.Component {
//   state = {
//     dataLine: {
//       labels: ["January", "February", "March", "April", "May", "June", "July"],
//       datasets: [
//         {
//           label: "My First dataset",
//           fill: true,
//           lineTension: 0.3,
//           backgroundColor: "rgba(225, 204,230, .3)",
//           borderColor: "rgb(205, 130, 158)",
//           borderCapStyle: "butt",
//           borderDash: [],
//           borderDashOffset: 0.0,
//           borderJoinStyle: "miter",
//           pointBorderColor: "rgb(205, 130,1 58)",
//           pointBackgroundColor: "rgb(255, 255, 255)",
//           pointBorderWidth: 10,
//           pointHoverRadius: 5,
//           pointHoverBackgroundColor: "rgb(0, 0, 0)",
//           pointHoverBorderColor: "rgba(220, 220, 220,1)",
//           pointHoverBorderWidth: 2,
//           pointRadius: 1,
//           pointHitRadius: 10,
//           data: [65, 59, 80, 81, 56, 55, 40]
//         },
//         {
//           label: "My Second dataset",
//           fill: true,
//           lineTension: 0.3,
//           backgroundColor: "rgba(184, 185, 210, .3)",
//           borderColor: "rgb(35, 26, 136)",
//           borderCapStyle: "butt",
//           borderDash: [],
//           borderDashOffset: 0.0,
//           borderJoinStyle: "miter",
//           pointBorderColor: "rgb(35, 26, 136)",
//           pointBackgroundColor: "rgb(255, 255, 255)",
//           pointBorderWidth: 10,
//           pointHoverRadius: 5,
//           pointHoverBackgroundColor: "rgb(0, 0, 0)",
//           pointHoverBorderColor: "rgba(220, 220, 220, 1)",
//           pointHoverBorderWidth: 2,
//           pointRadius: 1,
//           pointHitRadius: 10,
//           data: [28, 48, 40, 19, 86, 27, 90]
//         }
//       ]
//     }
//   };

//   render() {
//     return (
//       <MDBContainer>
//         <h3 className="mt-5">Line chart</h3>
//         <Line data={this.state.dataLine} options={{ responsive: true }} />
//       </MDBContainer>
//     );
//   }
// }

// export default ChartsPage;


// import React, {Component} from 'react';
// import {Bar, Line, Pie} from 'react-chartjs-2';

// class Chart extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       chartData:props.chartData
//     }
//   }

//   static defaultProps = {
//     displayTitle:true,
//     displayLegend: true,
//     legendPosition:'right',
//     location:'City'
//   }

//   render(){
//     return (
//       <div className="chart">
//         <Bar
//           data={this.state.chartData}
//           options={{
//             title:{
//               display:this.props.displayTitle,
//               text:'Largest Cities In '+this.props.location,
//               fontSize:25
//             },
//             legend:{
//               display:this.props.displayLegend,
//               position:this.props.legendPosition
//             }
//           }}
//         />

//         <Line
//           data={this.state.chartData}
//           options={{
//             title:{
//               display:this.props.displayTitle,
//               text:'Largest Cities In '+this.props.location,
//               fontSize:25
//             },
//             legend:{
//               display:this.props.displayLegend,
//               position:this.props.legendPosition
//             }
//           }}
//         />

//         <Pie
//           data={this.state.chartData}
//           options={{
//             title:{
//               display:this.props.displayTitle,
//               text:'Largest Cities In '+this.props.location,
//               fontSize:25
//             },
//             legend:{
//               display:this.props.displayLegend,
//               position:this.props.legendPosition
//             }
//           }}
//         />
//       </div>
//     )
//   }
// }

// export default Chart;