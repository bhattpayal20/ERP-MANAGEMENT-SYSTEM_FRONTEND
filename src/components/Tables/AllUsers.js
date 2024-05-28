import React, { useState, useEffect,useLayoutEffect,useParams } from 'react';
import MaterialTable from 'material-table'
import Checkbox from '@mui/material/Checkbox';
import { red } from '@mui/material/colors';
import UserProfile from '../Users/UserProfile';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

export default function AllUsers() {
  // const params = useParams();
  // const url= '/users/'


    const [data, setData] = useState([])
    const columns = [
      { title: "ID", field: "id" },
      {
        title: "Avatar",
        field: "avatar",
        render: (rowData) => (
          <>
          {/* <img
            style={{ width:"53px" ,height: 56, borderRadius: "50%" }}
            src={`https://drive.google.com/thumbnail?id=${rowData.image_fileid}`}
          /> */}
          <Link to={`/admin/users/${rowData.id}` } 
          onClick={console.log("rowData link",rowData.image)}><Avatar alt="" src={`https://drive.google.com/thumbnail?id=${rowData.image}`} /></Link>
          </>
        )
      },
      { title: "Name", field: "name" },
      {title:"Gender",field:"gender"},
      { title: "Email", field: "email" },
      { title: "Department", field: "department" },
      { title: "Phone ", field: 'phone' },
      {title: "Address",field:"address"},
      
    ]

    useLayoutEffect(() => {
      fetch("http://localhost:8000/api/users/AllUsersForAdmin")
        .then(resp => resp.json())
        .then(resp => {
            console.log("get all users for Admin => ",resp)
            console.log("state => ",data)

            setData(resp)
          })
    }, [])
  
    return (
      <div  
        >
        <MaterialTable
          title="Employee Data"
          data={data}
          columns={columns}
          onRowClick={(event, rowData) => {
            // url=url+rowData.id
            // console.log("url",url)
            console.log(rowData);
            // window.open(            
              //   );
              // <UserProfile/>
              event.preventDefault();
              // event.stopImmediatePropagation();

              // window.location.href = "http://localhost:3000/users";
            // <Link to="http://localhost:3000/users"></Link>
            // event.stopPropagation();
          }}
          options={{
            exportButton:true,
          }}
          
        />
      </div>
    );
  }
