import React from 'react'
import TeamCard from '../TeamCard'
import EditButton from './EditButton'
import Rate from './Rate'
import UserImage from './UserImage'

export default function UserProfile() {
  return (  

<div>

    <div style={{display: 'flex' , justifyContent:'center' , marginRight : '220px' , width : '700px'}}>
        <div style={{marginRight : '20px' ,marginTop: '10px'}} >
            <UserImage/>
        </div>

        <div   >
                <div style={{display: 'flex' , justifyContent:'center'}} >
                    <h1  style={{marginTop : '100px' , width : '200px'}} >Sahil Rohera </h1>
            
                    <EditButton/>
                </div>


                <h4  style={{margin : '10px' , marginLeft : '0px'}} > Full Stack Web Developer</h4>
                <h5 style={{margin : '0px'}} >Techs - HTML , CSS , JS , React , Node ,</h5>
                <h5  style={{margin : '0px'}} >  Express , Mysql , Sequelize </h5>
                {/* <Rate/> */}
        
                </div>
        
            </div>
            <br />
       

        <div  style={{display: 'flex' , justifyContent : 'center'  }} >
            <TeamCard  ActivityName = "Projects Done" values = "5+" />
            <TeamCard  ActivityName = "Coins Earned" values = "200" />
            <TeamCard  ActivityName = "Progress Rate" values = "80% inc." />

        </div>
        <br />

        <h2> Projects Posts </h2>

        <div style={{display : 'flex'  , justifyContent : 'center' , flexWrap : 'wrap'} } >
         <img src="https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/anatomy-of-a-blog-post-deconstructed-open-graph.jpg" alt="img" style={{heigth : '300px' , width : '330px' , margin : '10px'}} />

         <img src="https://media.sproutsocial.com/uploads/2017/01/Instagram-Post-Ideas.png" alt="img" style={{heigth : '300px' , width : '330px' , margin : '10px'}} />
            
          <img src="https://smashballoon.com/wp-content/uploads/2020/04/types-of-instagram-posts.jpg" alt="img" style={{heigth : '300px' , width : '330px' , margin : '10px'}} />


        </div>
        <br />
        <br />

        <h2>Personal Info</h2>
            <div style={{display : 'flex' , marginLeft : '20px'}} >
                    <h3>Email Id : </h3>
                    <h4 style={{marginLeft : '10px'}} >sahilrohera10@gmail.com</h4>
            </div>
            <div style={{display : 'flex' ,  marginLeft : '20px'}} >
                    <h3>Phone No. : </h3>
                    <h4 style={{marginLeft : '10px'}} >7428727172</h4>
            </div>
            <div style={{display : 'flex' ,  marginLeft : '20px'}} >
                    <h3>Address : </h3>
                    <h4 style={{marginLeft : '10px'}} >Sant Nagar</h4>
            </div>




    </div>
  )
}

