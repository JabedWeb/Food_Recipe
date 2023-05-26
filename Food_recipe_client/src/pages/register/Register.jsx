/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { authContext } from '../../providers/AuthProvider'
import { Button } from 'bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { updateProfile } from 'firebase/auth'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { toast } from 'react-toastify'

const Register = () => {
  const [error ,setError]=useState(null);
  console.log(error);
  const {loginUser}=useContext(authContext)
  
  const navigate=useNavigate();
  
  const handleRegister=(e)=>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    const photo=form.photo.value;
    console.log(name,email,password,photo);
    //validate the password 
    if(!email || !password || !name || !photo){
      setError('please fill up all the field');
      return;
    }
    else if (password.length<6){
      setError('');
      setError('password must be at least 6 character');
     return
    }
    else {
      loginUser(email,password)
      .then(result=>{
        const user=result.user;
        updateNameAndPhoto(user,name,photo)
        form.reset();
      })
      .catch(error=>{
        console.log(error);
      }
      )
    }

  }

  // update name and photo
  const updateNameAndPhoto=(user,name,photo)=>{
    updateProfile(user,{
      displayName:name,
      photoURL:photo
    })
    .then(result=>{
      toast('successfully registered');
      navigate('/');
    }
    )
    .catch(error=>{
      toast('Try it Again');
      console.log(error);
    }
    )
  }
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col className='justify-content-center bg-dark text-light p-5 my-5' md={5}>
        <form onSubmit={handleRegister}>
          <h3 className='text-center'>Register</h3>
        <div className="mb-3">
            <label  className="form-label">Name</label>
            <input name='name' type="text" className="form-control"/>
          </div>
          <div className="mb-3">
            <label  className="form-label">Email address</label>
            <input name="email" type="email" className="form-control"/>
            <div id="emailHelp" className="form-text">Well never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label  className="form-label">Password</label>
            <input name='password' type="password" className="form-control"/>
          </div>
          <div className="mb-3">
            <label  className="form-label">Photo</label>
            <input name='photo' type="text" className="form-control"/>
          </div>
          <button type="submit" className="btn btn-light mb-3 ">Register</button>
       </form>
       <strong className='text-danger'>{error?error : ''}</strong>
       {/* <div className="social_login d-flex justify-content-center flex-wrap">
          <div className="google_sign">
             <button style={{borderRadius:"4px"}} onClick={signInWithGoggle}  className='btn d-flex align-items-center fw-bold px-3 my-2 py-2 btn-warning text-dark me-2'> <FaGoogle className='me-1'></FaGoogle> Google SignUp</button>
          </div>
          <div className="google_sign">
             <button style={{borderRadius:"4px"}} onClick={signInWithGithub}  className='btn fw-bold px-3 my-2 py-2 btn-warning text-dark me-2'> <FaGithub className='me-1'></FaGithub> Github SignUp</button>
          </div>
       </div> */}
       <h5 className='text-center mt-2'>I have already account ? <Link className='text-warning text-decoration-none' to={'/login'}> Login</Link></h5>
        </Col>
      </Row>
    </Container>
  )
}

export default Register