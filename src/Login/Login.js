import React,{useState} from 'react'
import Snackbar from '@mui/material/Snackbar';
import './login.css';
import Alert from '@mui/material/Alert';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {Navigate } from 'react-router-dom'
import UserApp from '../UserApp';


import ls from 'localstorage-slim';





export default function Login() {


    const navigate = useNavigate();

    // ls.set('ROLE', 'default', { encrypt: true }); // with optional encryption

    // const [data,setData]=useState({
    //    email:'',
    //    password:''

    // })
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState("");
    let msg
    const [loginRes,setRes]=useState("");
    const [loginMsg , setLoginMsg] = useState();
    const [forgotpass ,setForgotpass] = useState(false)
    const [getUserEmail,setgetUserEmail]=useState("")

    const [EmailNotExist,setEmailNotExist] = useState(false)
    const [ changePassword, setChangePassword] = useState(false)
    const [revert , setRevert] = useState(true)
    const [ OTP , setOTP] = useState()
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    password: password,
                  }),
            };
       let resp = await fetch('http://localhost:8000/api/users', requestOptions);
       resp.json()
       .then(d=>{
           console.log(d)
           if(resp.status===400){
            setRes(false)
            setLoginMsg(d.message)
            msg=d.message
            console.log("msssg",loginMsg)
        }
        else{
        localStorage.setItem("token",d.token)
        if(d.role==='admin'){
        setRes(true)
        ls.set('role', d.role, { encrypt: true }); // with optional encryption
        localStorage.setItem("isAuthenticated",true)
            localStorage.setItem("isAuthenticated",true)
        // window.authenticated = true
        navigate("/admin");
        }
        else{
            setRes(true)
            // const isAuthenticated = true
            ls.set('role', d.role, { encrypt: true }); // with optional encryption

            localStorage.setItem("isAuthenticated",true)
        navigate("/user");
        }
    }

    });

    }
        catch (err) {
          console.log(err);
        }
      };

      const handleGetUserbyEmail= async (e)=>{
          e.preventDefault();
          console.log("In get user by email ",getUserEmail)
          try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: getUserEmail,
                  }),
            };
       let resp = await fetch('http://localhost:8000/api/users/getUserbyEmail', requestOptions);
    //    let resp = await fetch('http://localhost:5000/api/otp/forgotpassword', requestOptions);

        resp.json().then(resp => {
            console.log("Get user email response",resp)
            if(resp==='Email Exist'){

                // setotp()
                setEmailNotExist(false)
                setOpen(true)
                setChangePassword(true)
                document.getElementById('getEmail').style.display='none'
                document.getElementById('otp').style.display='block'

            }
            else
            setEmailNotExist(true)
        },[]);
       
      }
      catch(error){

      }
    }

    const handleCheckOTP = (event)=>{
        event.preventDefault();
        console.log("In handle Check OTP => ", OTP)
    }

    const auth = localStorage.getItem("isAuthenticated")
    var role = ls.get('role', { decrypt: true });
    if(role==='employee')
    role='user';
    if(auth){
      console.log("In login redirect ")
      return   <Navigate to={`/${role}`} />
    }
    return (
        <>
        <div className='Login'>
        <img className="waves"
          src="https://i2.wp.com/ineptstudio.com/wp-content/uploads/2021/07/waves.png?resize=1536%2C382&ssl=1" alt=""/>
    
    
    <div className='ErpWelcome'>
        <h1 className='auto'>Welcome to Inept Studio</h1>
        <h2>Erp Portal</h2>
        </div>




    <div className="main">
    <section className="box" id="slide" style={{border:"none"}}>
        <div className="design">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        {forgotpass==false ? 
        <div className="form">

            <h2>User Login</h2>
            
            {loginRes===false?
                            //   <Alert sx={{width:"25vw"}} >Success  — {loginRes}!</Alert>:""
                  <Alert severity="error" sx={{width:"25vw"}}>{loginMsg}!</Alert> : ""
                  }
            {loginRes===true ?
                  <Alert sx={{width:"25vw"}} >Success  — {loginRes}!</Alert>:""
                  }
            <form action="/" method="POST" onSubmit={handleSubmit}>
                <input type="email" name="email"id='email' required="true"  onChange={(e) => setEmail(e.target.value)} value={email} className="input-field" placeholder="Username" />
                <input type="password" name="password" id='password' required='true' onChange={(e) => setPassword(e.target.value)}  value={password} className="input-field" placeholder="Password" />
                <input type="submit" className="btn" value="LOGIN" />
            </form>
            <div className="already_user">
                <a onClick={()=>{setForgotpass(true)}} >Forgot Password</a>
            </div>


        </div>

        :    <>
        <div  id='getEmail' className='form'>
        <h2>Forgot Password</h2>
        {EmailNotExist ?<Alert severity="error" sx={{width:"25vw"}}>Invalid Email !</Alert>:""
        }
        <form   onSubmit={handleGetUserbyEmail} >
        <input type="email" name="email"id='email' required="true"  onChange={(e) => setgetUserEmail(e.target.value)} value={getUserEmail} className="input-field" placeholder="Username" />
        <input type="submit" className="btn" value="Submit" />
        <div className="already_user">
                <a onClick={()=>{setForgotpass(false)}} >Back To Login</a>
            </div>
    </form>
    </div>
    </> }
{ changePassword ?
    <form id='otp' onSubmit={handleCheckOTP} >
        <input type="number" name="otp"id='email' required="true"  onChange={(e) => setOTP(e.target.value)} value={OTP} className="input-field" placeholder="Enter OTP" />
        <input type="submit" className="btn" value="Submit" />
        <div className="already_user">
                <a onClick={()=>{
                {setForgotpass(false)}
                {document.getElementById('otp').style.display='none'}
                }
            } >Back To Login</a>
            </div>
            </form>

 : ""}
    <Snackbar open={open} autoHideDuration={6000}  onClose={() => setOpen(false)}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
     }}
     >
  <Alert  severity="success" sx={{ width: '100%' }} onClose={() => setOpen(false)}>
    This is a success message!
  </Alert>
</Snackbar>



    </section>
    </div>
    </div>
    </>
    )
}
