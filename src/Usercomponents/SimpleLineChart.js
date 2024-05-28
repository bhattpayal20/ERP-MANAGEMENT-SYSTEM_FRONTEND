import { style } from '@mui/system';
import React from 'react'
import {ResponsiveContainer , LineChart , Line , XAxis , YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

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
  <div style={{textAlign: "center" , width : '900px' , marginLeft : '-80px' }} >
{/* <div  style={{display : "flex"}} > */}
        <ResponsiveContainer width="105%" aspect={3}  >
        <LineChart data={pdata} width={600} height={300} margin={{ top: 30, right: 300, left: 80, bottom: 5 }}>
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
   </div>


      </>
    )
}
