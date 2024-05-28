import React, { useEffect,useLayoutEffect, useState } from 'react';
import EditButton from '../Usercomponents/EditButton copy';
import UserDropdown from '../Usercomponents/UserDropdown';
import UserImage from '../Usercomponents/UserImage copy';
import { useParams } from 'react-router-dom'
import Table from '../Usercomponents/Table';
import AttendanceModal from '../Usercomponents/AttendanceModal';


export default function ProfilePage() {
    const columns=[
        { title: 'Name', field: 'user.name' },
        { title: 'Department', field: 'user.department'},
        { title: 'date', field: 'date',type:'date/month/year' },
        { title: 'Day', field: 'day', },
        { title: 'Status', field: 'status' },
    
      
      ]
    const [data , setData] = useState([])
    const params = useParams();
    console.log("params",params.id)

    const {render, Att} = AttendanceModal();
    console.log("In profile page Att => ",Att)

   
    useEffect(() => {
    let response =fetch(`http://localhost:8000/api/users//GetUserById${params.id}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.image)

        setData(data)
    });
},[])
  return (
  
        <div className = 'Page'  >
{/* 
                <UserDropdown/> */}

<div  className='profileMajorDiv' >
          <h1  style={{textAlign : 'center' , color : 'darkblue'}} >Profile Page</h1>

          <br />



          <div style={{ backgroundColor : 'white' ,width : '100%' , display : 'flex' , height : '300px' , border : '1px solid black' , borderRadius : '20px' , boxShadow : '5px 10px 18px #888888'}} >

    
                <div style={{width : '300px' , marginLeft : '50px'}} >
                <UserImage image={data.image}/>
              
                <h3  style={{textAlign : 'center'}} >{data.name} </h3>
                </div>


                <div style={{marginTop : '30px' , marginLeft : '50px'}} >

                    <div style={{display : 'flex',width:'36vw'}} >
                        <div style={{display : 'flex'}} >
                            <h4 style={{fontWeight : '400'}} >Employee Id :</h4>
                             <h3 style={{marginLeft : '10px' ,fontWeight : '600', color : 'blue' }} > {data.id}</h3>
                        </div>
                        <div style={{display : 'flex' , marginLeft : '40px'}} >
                            <h4 style={{fontWeight : '400'}}>Name :</h4>
                             <h3 style={{marginLeft : '10px' ,fontWeight : '600', color : 'blue'}} > {data.name}</h3>
                        </div>
                        <div style={{display : 'flex', marginLeft: '51px'}} >
                            <h4 style={{fontWeight : '400'}}>Email :</h4>
                             <h3 style={{marginLeft : '10px' ,fontWeight : '600', color : 'blue'}} >{data.email}</h3>
                        </div>
                        
                        
                    </div>

                    <div style={{display : 'flex'}} >
                    <div style={{width: '9vw',display: 'flex'}} >
                            <h4 style={{fontWeight : '400'}}>Status :</h4>
                             <h3 style={{marginLeft : '10px' ,fontWeight : '600', color : 'blue'}} >{data.status}</h3>
                        </div>

                    <div style={{width: '20vw',display: 'flex',marginLeft: '28px'}} >
                            <h4 style={{fontWeight : '400'}}>Department :</h4>
                             <h3 style={{marginLeft : '10px' ,fontWeight : '600', color : 'blue'}} >{data.department}</h3>
                        </div>
                     
                    </div>



                    <div style={{display : 'flex'}} >
                    <div style={{display: 'flex'}} >
                            <h4 style={{fontWeight : '400',    width: '60px'}}>Gender :</h4>
                             <h3 style={{marginLeft : '10px' ,fontWeight : '600', color : 'blue'}} >{data.gender}</h3>
                        </div>
                    <div style={{display : 'flex',    marginLeft: '40px'}} >
                            <h4 style={{fontWeight : '400'}}>Ph :</h4>
                             <h3 style={{marginLeft : '10px' ,fontWeight : '600', color : 'blue'}} >{data.phone}</h3>
                        </div>



                        
                    <div style={{display : 'flex' , marginLeft : '40px'}} >
                            <h4 style={{fontWeight : '400'}}>Add : </h4>
                             <h3 style={{marginLeft : '10px' ,fontWeight : '600' , color : 'blue'}} >{data.address}</h3>
                        </div>


                    </div>

             
                </div>
     
             
          <EditButton/>
          </div>
       

          </div>

          {/* <AttendanceModal userid={params.id} style={{marginTop:'20px'}}/> */}
          {render }
          <Table columns={columns}  data={Att} />
<div className='mediaProfileMajorDiv' >

<img src="https://media-exp1.licdn.com/dms/image/C5603AQEyWoRxZFEEVA/profile-displayphoto-shrink_400_400/0/1637409004760?e=1648684800&v=beta&t=MeZKmPziaqtMzLu6HWWlledaKKMdUf_lhgG5J6fjq8E" style={{width : '280px' , height : '280px' , marginLeft: '15px' , marginTop : '10px' , borderRadius : '10px'}} alt="" />



<div className='profileItem' style={{display : 'flex' }} >
    <h3 >Name : </h3>
    <h4 className='profileContent' style={{fontWeight : '400'}} > Sahil Rohera </h4>
</div>

<div className='profileItem' style={{display : 'flex'}}>
    <h3>Role : </h3>
    <h4 className='profileContent' style={{fontWeight : '400'}}> Full Stack Developer </h4>
</div>

<div className='profileItem' style={{display : 'flex'}}>
    <h3>Department : </h3>
    <h4 className='profileContent' style={{fontWeight : '400'}}>Web Development</h4>
</div>

<div className='profileItem' style={{display : 'flex'}}>
    <h3>Job type : </h3>
    <h4 className='profileContent' style={{fontWeight : '400'}}> Internship </h4>
</div>

<div className='profileItem' style={{display : 'flex'}}>
    <h3> Gender : </h3>
    <h4 className='profileContent' style={{fontWeight : '400'}}> Male </h4>
</div>

<div className='profileItem' style={{display : 'flex'}}>
    <h3>D.O.B : </h3>
    <h4 className='profileContent' style={{fontWeight : '400'}}> 18th Sept 2003 </h4>
</div>

<div className='profileItem' style={{display : 'flex'}}>
    <h3> Ph : </h3>
    <h4 className='profileContent' style={{fontWeight : '400'}}> 7428727172 </h4>
</div>


<div className='profileItem' style={{display : 'flex'}}>
    <h3>Email : </h3>
    <h4 className='profileContent' style={{fontWeight : '400'}}> sahilrohera10@gmail.com </h4>
</div>

<div className='profileItem' style={{display : 'flex'}}>
    <h3> Address : </h3>
    <h4 className='profileContent' style={{fontWeight : '400'}}> Sant Nagar , Burari , Delhi </h4>
</div>

<EditButton/>

<br />

</div>



        </div>

    
    );
}



