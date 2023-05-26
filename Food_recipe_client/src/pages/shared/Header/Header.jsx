/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { authContext } from '../../../providers/AuthProvider'
import './Header.css'
import ActiveLink from '../../../components/activeLink/ActiveLink'

const Header = () => {

  const navigate=useNavigate();
  const {user,SignOut}=useContext(authContext);
  const signOut=()=>{
    SignOut()
    .then(()=>
        {
          console.log('sign out success');
          navigate('/');
        }
    )
    .catch(error=>console.log(error))
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand ><Link className='text-decoration-none text-light' to={'/'}>Recipes Food</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navbar_custom">
            <ActiveLink className='text-decoration-none text-light bg-danger px-2' to={'/recipes'}>Recipes</ActiveLink>
            <ActiveLink className='text-decoration-none text-light' to={'/chefs'}>Chefs</ActiveLink>
           <ActiveLink className='text-decoration-none text-light' to={'/blog'}>Blog</ActiveLink>
          </Nav>
          <Nav className='align-items-center'>
            {
              user &&
                <Nav.Link className='text-light' onClick={signOut}>
              LogOut
            </Nav.Link>
              }
                {
              !user && <Nav className='me-auto navbar_custom'>
              <ActiveLink className='text-decoration-none text-light px-2' to={'/login'}>Login</ActiveLink>
            <ActiveLink className='text-decoration-none text-light' to={'/register'}>Register</ActiveLink>
            </Nav>
                }
           {user && <div className="profile">
           <img style={{width:"60px"}} className='img-img-fluid profile_img rounded-circle' src={user?.photoURL} alt="" />
            <Nav.Link className='profile_name'  href="#memes">
            {user?.displayName}
          </Nav.Link>
           </div>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header