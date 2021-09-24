import MenuAppBar from '../../components/AppBar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MyCard from '../../components/Card';
import BasicTextFields from '../../components/Input';
import BasicButtons from '../../components/Button'
import './css/style.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import swal from 'sweetalert';
import '../Login/css/style.css'

function Signup() {
    let allUsers = [];
    let users = localStorage.getItem('User');
    if(users !== null){
    allUsers = JSON.parse(users)
    
    }
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const register = () => {
        let obj={
            fullName,
            email,
            password
        }
        allUsers.push(obj)
        localStorage.setItem('User',JSON.stringify(allUsers))
        swal("Good job!", "You Registered Sucessfully", "success");
        // alert("Register Sucessfully")
        setFullName("")
        setEmail("")
        setPassword("")
    }
    return (
        <div>
            <MenuAppBar title="Signup" />
            ِ<Container>
                <Grid container justifyContent="center">
                    <Grid item xs={12} lg={6} md={12}>
                        <MyCard>
                            <h1>Signup</h1>
                            <div className="mt-20">
                                <BasicTextFields onChange={(e) => setFullName(e.target.value)} value={fullName} label="Full Name" type="text" />
                            </div>
                            <div className="mt-20">
                                <BasicTextFields onChange={(e) => setEmail(e.target.value)} value={email} label="Email" type="email" />
                            </div>
                            <div className="mt-20">
                                <BasicTextFields onChange={(e) => setPassword(e.target.value)} value={password} label="Password" type="password" />
                            </div>
                            <div className="mt-20">
                                <BasicButtons onClick={register} title="Sign Up " />
                            </div>
                            <div className="mt-20" style={{ textAlign: 'center' }}>
                                <Link to="/" className='link'>Go to Login</Link>
                            </div>
                        </MyCard>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Signup;