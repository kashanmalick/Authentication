import MenuAppBar from '../../components/AppBar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MyCard from '../../components/Card';
import BasicTextFields from '../../components/Input';
import BasicButtons from '../../components/Button'
import './css/style.css'
import { Link,useHistory } from 'react-router-dom'
import {React,useState} from 'react';
import swal from 'sweetalert';
function Login() {
   let allUsers = [];
   const history = useHistory();
   let users = localStorage.getItem('User');
   if(users !== null){
   allUsers = JSON.parse(users)
   }
   console.log(allUsers)
   const [email,setEmail] = useState("")
   const [pass,setPass] = useState("")
   function log(){
      let filterUser = allUsers.filter((data)=> data.email === email && data.password === pass);
    if(filterUser.length){
      swal("Good job!", "Logged IN Sucessfully", "success");
       history.push('/profile')
      }else{
         swal("Warning!", "Incorrect User Name Or Password", "error");
         setEmail("");
         setPass("")
    }
   }
   return (
      <div>
         <MenuAppBar title="Login" />
         ِ<Container>
            <Grid container justifyContent="center">
               <Grid item xs={12} lg={6} md={12}>
                  <MyCard>
                     <h1>Login</h1>
                     <div className="mt-20">
                        <BasicTextFields onChange={(e) => {setEmail(e.target.value)}} value={email} label="Email" type="email" />
                     </div>
                     <div className="mt-20">
                        <BasicTextFields onChange={(e) => {setPass(e.target.value)}} value={pass} label="Password" type="password" />
                     </div>
                     <div className="mt-20">
                        <BasicButtons onClick={log} title="LOGIN " />
                     </div>
                     <div className="mt-20" style={{textAlign: 'center'}}>
                        <Link to="/signup" className='link'>Register now</Link>
                     </div>
                  </MyCard>
               </Grid>
            </Grid>
         </Container>
      </div>
   )
}

export default Login;