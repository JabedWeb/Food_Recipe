/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { authContext } from '../../providers/AuthProvider'
import {Link, useLocation, useNavigate } from 'react-router-dom'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { toast } from 'react-toastify'

const Login = () => {
  const navigate=useNavigate();
  const location =useLocation();
  const from=location.state?.from?.pathname || '/';


  const [success,setSuccess]=useState('')
  const {user,signIn,signInGoogle,signInGithub}=useContext(authContext)
  const handleLogin=(e)=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    signIn(email,password)
    .then(result=>{
      setSuccess('Login Successfull');
      toast('Login SuccessFully')
      navigate(from)
    })
    .catch(error=>{
      toast('Put Your Valid Credentials')
      setSuccess('Put Your Valid Credentials');
      console.log(error);
    }
    )
  }

  const signInWithGoggle=()=>{
    signInGoogle()
    .then(result=>{
      const user=result.user;
      console.log(user);
      navigate(from)
    }
    )
    .catch(error=>{
      console.log(error);
    }
    )
  }
  const signInWithGithub=()=>{
    signInGithub()
    .then(result=>{
      const user=result.user;
      console.log(user);
      navigate(from)
    }
    )
    .catch(error=>{
      console.log(error);
    }
    )
  }

  return (
    <Container>
    <Row className='justify-content-center'>
      <Col className='justify-content-center bg-dark text-light p-5 my-5' md={5}>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label  className="form-label">Email address</label>
          <input name="email" type="email" className="form-control"/>
          <div id="emailHelp" className="form-text">Well never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label  className="form-label">Password</label>
          <input name='password' type="password" className="form-control"/>
        </div>
        <button type="submit"  className="btn btn-light mb-3">login</button>
     </form>
     {
        success ? <strong className='text-center mt-2 text-success'>{success}</strong> : ''
      }
     <div className="social_login d-flex justify-content-center flex-wrap">
          <div className="google_sign">
             <button style={{borderRadius:"4px"}} onClick={signInWithGoggle}  className='btn d-flex align-items-center fw-bold px-3 my-2 py-2 btn-warning text-dark me-2'> <FaGoogle className='me-1'></FaGoogle> Google LogIn</button>
          </div>
          <div className="google_sign">
             <button style={{borderRadius:"4px"}} onClick={signInWithGithub}  className='btn fw-bold px-3 my-2 py-2 btn-warning text-dark me-2'> <FaGithub className='me-1'></FaGithub> Github LogIn</button>
          </div>
       </div>
       <h5 className='text-center mt-2'>Are you new Chef ? <Link className='text-warning text-decoration-none' to={'/register'}> Register</Link></h5>

      </Col>
    </Row>
  </Container>
  )
}

export default Login