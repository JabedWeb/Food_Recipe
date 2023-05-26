// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefsSingle = () => {
const [recip, setRecip]=useState({});
const [favourite, setFavourite]=useState([]);
const [loading, setLoading]=useState(false);
//export loading state;

 const recipesItem= useLoaderData();
 console.log(recipesItem);
 useEffect(()=>{
    fetch('https://recipe-food-jabedweb.vercel.app/recipes/')
    .then(res=>res.json())
    .then(data=>{
        const recipesitem=data.recipes;
        const matchItem=recipesitem.filter((item)=>item.chef_id==recipesItem.id);
        console.log(matchItem);
        setRecip(matchItem);
        setLoading(true);
    })
    .catch(err=>console.log(err))
 },[])
 const favourite_notify = (id) => {
    toast("The recipe is your favorite");
    setFavourite([...favourite, id]);
 };
  return (
    <Container>
      <Row>
        <div>
                    <Row className='align-items-center justify-content-between py-5'>
                        <Col md={8}>
                        <h2>{recipesItem.name}</h2>
                            <p><strong>About {recipesItem.name}</strong> : {recipesItem.description}</p>
                            <strong>Experience : {recipesItem.yearsOfExperience} Years</strong> <br></br>
                            <strong>No Of Likes : {recipesItem.likes} </strong> <br></br>
                            <strong>No Of Recipes : {recip.length} </strong> <br></br>
                            </Col>
                        <Col className='text-lg-end' md={4}> <img src={recipesItem.photo}  alt="" /></Col>
                    </Row>
                </div>
         
            <h2 className='text-center py-3'>View More Recipes <strong>{recipesItem.name}</strong></h2>
          {
            
         loading ? recip.map((recipe,index)=>(
            <Col  md={4} key={index} className='card-grid my-3'>
            <Card style={{borderRadius:"2px"}} className='bg-dark text-light'>
              <Card.Img className='img-img-fluid' variant="top" src={recipe.photo} />
              <Card.Body>
              <Card.Title>{recipe.name}</Card.Title>
                              
                              <Card.Text>
                                  {(recipe.method).length > 160 ? (recipe.method).substring(0, 130) + '...' : (recipe.method)}
                              </Card.Text>
                              <h5>Chef Name : {recipesItem.name}</h5>
                              <div className='d-flex justify-content-between flex-wrap'>
                              <strong >Experience : {recipesItem.yearsOfExperience} Years</strong>
                              <strong > Chef Recipe no : {recip.length}</strong>
                              
                              </div>
                              <div className='d-flex justify-content-between flex-wrap mt-2'>
                              <strong >Number of Likes : {recipesItem.likes}</strong>
                              <strong >Rating {recipesItem.rating}</strong>
                              </div>
                              <Card.Body className='d-flex flex-wrap justify-content-between'>
                             {
                              !favourite.includes(recipe.id) && <button className=' my-2 btn btn-warning text-dark' onClick={()=>favourite_notify(recipe.id)}>Add to Favourite</button>
                             }
                              <button className='btn btn-warning my-2'><Link className='text-decoration-none text-dark' to={`/recipes/${recipe.id}`}>View Recipe</Link></button>
                              </Card.Body>
              </Card.Body>
            </Card>
          </Col>
          )) :   <div className='d-flex justify-content-center'> <Spinner className='text-center' animation="border" variant="warning" /></div>
          }
      </Row>
      <ToastContainer></ToastContainer>
    </Container>
  )
}
export default ChefsSingle
