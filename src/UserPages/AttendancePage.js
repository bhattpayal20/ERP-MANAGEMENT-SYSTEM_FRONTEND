import React,{useState,useEffect} from 'react';
import UserDropdown from '../Usercomponents/UserDropdown';
import AttendanceModal from '../Usercomponents/AttendanceModal'
import RefreshButton from '../Usercomponents/RefreshButton'
import Table from '../Usercomponents/Table';
import UserAttendenceDateFilter from '../Usercomponents/UserAttendenceDateFilter';


export default function AttendancePage(props) {
  // console.log("in Attendence page => ", props.data.id)
  const [data, setData] = useState([])

  const {render, userAttendence,obj} = UserAttendenceDateFilter(props.data.id);
  // const {render} = 
  console.log("attendence page useAttendence => ",userAttendence,obj)


  const columns=[
    { title: 'Date', field: 'date', type: 'date' },
    { title: 'Day', field: 'day' },
    { title: 'Status', field: 'status'},

  
  ]

  // useEffect(() => {
  //   fetch('')
  //     .then(resp => resp.json())
  //     .then(resp => {
  //       console.log("resp", resp) 
  //       setData(resp)
  //     })
  // }, [])
  return (
  
  <div className='Page' >
           <h1 style={{textAlign : 'center' , color : 'darkblue'}} >Attendance</h1>
           {render}
           <br />
           <div className='AttendanceRefresh' >
           <RefreshButton/>
           </div>

  
            {/* <AttendanceTable/> */}
            <Table title = "Your Attendance" columns={columns}  data={userAttendence} />



  </div>
  
  
  );
}
