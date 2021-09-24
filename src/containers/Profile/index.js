import MenuAppBar from '../../components/AppBar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MyCard from '../../components/Card';
import './css/style.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Profile() {
    return (
        <div>
            <MenuAppBar title="Profile" />
            ِ<Container>
                <Grid container justifyContent="center">
                    <Grid item xs={12} lg={6} md={12}>
                        <MyCard box justifyContent="center">
                            <h1 className='mt-20'>Profile</h1>
                            <span>
                               <strong>Name : </strong> Name : 
                               </span> <span>Muhammad Kashan Zafar</span><br />
                            <span><strong> Email : </strong></span> <span>kashanzafar360@gmail.com</span>
                            <h3>About My Self</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, cum recusandae. 
                                Animi quod itaque quo doloribus saepe nam voluptatibus quae natus tempore, placeat aspernatur ad magni. 
                                Enim ex aliquid veritatis delectus, alias ullam, laborum deleniti itaque, suscipit nulla vel. Voluptatibus 
                                quaerat omnis velit quibusdam? Dicta sequi optio iure nihil et.</p>
                                <div className="btn">
                                    <button className='btn-danger'><Link to='/' className='Link'>Logout</Link></button>
                                </div>
                        </MyCard>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Profile;