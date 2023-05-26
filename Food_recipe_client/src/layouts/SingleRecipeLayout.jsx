/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { FaMarker } from 'react-icons/fa';
import { Link, useLoaderData, useParams} from 'react-router-dom'

const SingleRecipeLayout = () => {
    const recipe=useLoaderData();
    const {id, name,chef_id, photo, method, rating, ingredients}=recipe;

    const [chefs,SetsChefs]=useState([]);
    useEffect(()=>{
        fetch('https://recipe-food-jabedweb.vercel.app/recipes/')
        .then(res=>res.json())
        .then(data=>{
            const recipesitem=data.recipes;
            const chefs_recipes=recipesitem.filter((re)=>re.chef_id==chef_id);
            console.log(chefs_recipes);
            SetsChefs(chefs_recipes);
        })
        .catch(err=>console.log(err))
     },[])


     const [recip, setRecip]=useState({});
     useEffect(()=>{
        fetch('https://recipe-food-jabedweb.vercel.app/chefs/')
        .then(res=>res.json())
        .then(data=>{
            const recipesItem=data.chefs;
            const recipeIt= recipesItem.find(rec=>rec.id==chef_id);

            console.log("okkkkkkkk",recipeIt);
            setRecip(recipeIt);
        })
        .catch(err=>console.log(err))
     },[])
     console.log("chefs",chefs);
     console.log("recip",recip);

  return (
    <Container>
        <Row>
            <Col md={8}>
            <h2 className='mt-4'>{name}</h2>
            <div className="recipe_image mb-2">
                    <img className='card-img' src={photo} alt="photo" />
                </div>
                <div  className="recipe_method pe-5">
                    <h2 className='my-2'>Method</h2>
                    {
                      method&&  method.split('\n').map((item,index)=>(
                        <p key={index}>{item}</p>
                    ))
                    }
                </div>
            <h2>Ingredients Item</h2>
            {
              ingredients&&  ingredients.map((ingredient,index)=>(
                    <p className='ingredients_item bg-dark text-warning p-2' key={id}><strong> <FaMarker></FaMarker> </strong> {ingredient}</p>
                ))
            }

            {/* about chef */}
            <h2 className='my-5'>About Chef</h2>
             {
                recip && <div>
                    <Row className='align-items-center'>
                        <Col md={8}>
                            <p><strong>About {recip.name}</strong> : {recip.description}</p>
                            <strong>Experience : {recip.yearsOfExperience} Years</strong>
                            </Col>
                        <Col md={4}> <img src={recip.photo}  alt="" /></Col>
                    </Row>
                </div>
             }
            </Col>
            <Col md={4}>
                <h2 className='my-4'>Chefs All Recipes</h2>
                {
                recip && <h4 className='my-2'>Chef Name : {recip.name}</h4>
                }
                <h5> Chef Recipe no : {(chefs.filter((re)=>re.chef_id==chef_id)).length}</h5>
                {
                    chefs && chefs.map((chef)=>(
                        <Card className='bg-dark text-light my-2' key={chef.id}>
                        <Card.Img className='img-img-fluid' variant="top" src={chef.photo} />
                        <Card.Body>
                        <Card.Title>{chef.name}</Card.Title>
                                        
                                        <Card.Text>
                                            {(chef.method).length > 160 ? (chef.method).substring(0, 160) + '...' : (chef.method)}
                                        </Card.Text>
                                        <Card.Body className='d-flex justify-content-between'>                                    
                                        <button className='btn btn-warning'><Link className='text-decoration-none text-dart' to={`/recipes/${chef.id}`}>View Recipe</Link></button>
                                        </Card.Body>
                        </Card.Body>
                      </Card>

               ))
 }
            </Col>
        </Row>
    </Container>
  )
}

export default SingleRecipeLayout