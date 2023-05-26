// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Chefs = () => {
const [recip, setRecip]=useState({});
const [favourite, setFavourite]=useState([]);
const [loading, setLoading]=useState(false);
//export loading state;

 const recipesItem= useLoaderData();

 useEffect(()=>{
    fetch('https://recipe-food-jabedweb.vercel.app/chefs/')
    .then(res=>res.json())
    .then(data=>{
        const recipesitem=data.chefs;
        setRecip(recipesitem);
        setLoading(true);
    })
    .catch(err=>console.log(err))
 },[])
 const favourite_notify = (id) => {
    toast("The chef is your favorite");
    setFavourite([...favourite, id]);
 };
  return (
    <Container>
      <Row>
        <h2 className='text-center py-3'>Our Chefs</h2>
          {
         loading ? recip.map((recipe,index)=>(
            <Col  md={4} key={index} className='card-grid my-3'>
            <Card style={{borderRadius:"2px"}} className='bg-dark text-light'>
              <Card.Img style={{height:"300px",objectFit: "cover"}} className='img-img-fluid' variant="top" src={recipe.photo} />
              <Card.Body>
              <Card.Title>{recipe.name}</Card.Title>
                              
                              <Card.Text>
                                  {(recipe.description).length > 160 ? (recipe.description).substring(0, 130) + '...' : (recipe.description)}
                              </Card.Text>
                              <h5></h5>
                              <div className='d-flex justify-content-between flex-wrap'>
                              <strong > Experience : {recipe.yearsOfExperience} Years</strong>
                             
                                    <strong > No Of Recipes: {(recipesItem.recipes.filter(it=>it.chef_id==recipe.id)).length}</strong>
                             
                              </div>
                              <div className='d-flex justify-content-between flex-wrap mt-2'>
                              <strong >Number of Likes : {recipe.likes}</strong>
                              <strong >Rating {recipe.rating}</strong>
                              </div>
                              <Card.Body className='d-flex flex-wrap justify-content-between'>
                             {
                              !favourite.includes(recipe.id) && <button className=' my-2 btn btn-warning text-dark' onClick={()=>favourite_notify(recipe.id)}>Add to Favourite</button>
                             }
                              <button className='btn btn-warning my-2'><Link className='text-decoration-none text-dark' to={`/chefs/${recipe.id}`}>View Recipe</Link></button>
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
export default Chefs
