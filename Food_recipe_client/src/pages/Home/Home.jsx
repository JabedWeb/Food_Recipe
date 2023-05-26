// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import {Container, Row } from 'react-bootstrap';
import Recipes from '../recipes/Recipes';
import './Home.css'
import { Link } from 'react-router-dom';
import Chefs from '../chefs/Chefs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

  const [chefs,setChefs]=useState([]);

  useEffect(()=>{
    fetch('https://recipe-food-jabedweb.vercel.app/chefs/')
    .then(res=>res.json())
    .then(data=>{
        const recipesitem=data.chefs;
        console.log("our all chef",recipesitem);
        setChefs(recipesitem);
    })
    .catch(err=>console.log(err))
 },[])
  return (
    <div className='home'>
          <section className="bg-dark py-5 text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start" id="home">
        <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between">
                <div>
                    <h1>Become a <span className="text-warning">Chef</span></h1>
                    <p className="lead my-4 ">
                      if you wanna to be chef then please sign up our site and start to show your charismatic
 
                    </p>

                    <Link to={'/register'} ><button 
                        className="btn btn-light text-dark btn-lg" 
                    >
                        Register Now
                    </button></Link>

                </div>

                <a href='https://svgshare.com/s/gH0' ><img className="img-fluid pb-5  d-none d-sm-block" src='http://www.themeenergy.com/themes/html/social-chef/images/img2.jpg' title='' /></a>

            </div>
        </div>
    </section>
    <section className="bg-dark bg-opacity-75 text-light p-5">
        <div className="container">
            <div className="d-md-flex justify-content-between align-items-center">
                <h3 className="mb-3 mb-md-0">Sign up for Newsletter</h3>

                <div className="input-group news-input">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter E-mail"
                    />
                    <button 
                        className="btn btn-dark btn-lg" 
                        type="button"
                    >Button
                    </button>
                </div>
            </div>
        </div>
    </section>
      <Container>
      <Row>
        <Chefs></Chefs>
      <section className="p-5" id="services">
        <div className="container">
        <h2 className='text-center py-3'> Our Services</h2>
            <div className="row text-center g-4">
                <div className="col-md">
                    <div className="card bg-dark text-light">
                        <div className="card-body text-center">
                            <div className="h1 mb-3">
                                <i className="bi bi-laptop"></i>
                            </div>
                            <h3 className="card-title mb-3">
                            On-Time Delivery Recipes
                            </h3>
                            <p className="card-text">
                            Our On-Time Delivery Recipes are perfect for busy weeknights or when you need a quick and easy meal. These recipes are designed to be prepared and cooked within a certain timeframe, ensuring that your meal is delivered on time
                            </p>
                            <Link to={'/register'} ><button 
                        className="btn btn-warning text-dark btn-lg" 
                    >
                        Register Now
                    </button></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card bg-warning text-dark">
                        <div className="card-body text-center">
                            <div className="h1 mb-3">
                                <i className="bi bi-person-square"></i>
                            </div>
                            <h3 className="card-title mb-3">
                            Meal Prep Recipes
                            </h3>
                            <p className="card-text">
                            Our Meal Prep Recipes are ideal for those who want to save time and have healthy meals ready to go throughout the week. These recipes can be prepared in advance and stored in the fridge or freezer, making it easy to eat nutritious meals
                            </p>
                            <Link to={'/register'} ><button 
                        className="btn btn-dark text-light btn-lg" 
                    >
                        Register Now
                    </button></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card bg-dark text-light">
                        <div className="card-body text-center">
                            <div className="h1 mb-3">
                                <i className="bi bi-people"></i>
                            </div>
                            <h3 className="card-title mb-3">
                            One-Pot Recipes
                            </h3>
                            <p className="card-text">
                            Our One-Pot Recipes are perfect for those who want to minimize cleanup and simplify their cooking process. These recipes are designed to be cooked in a single pot or pan, quick and easy to prepare while still packing plenty of flavor
                            </p>
                            <Link to={'/register'} ><button 
                        className="btn btn-warning text-dark btn-lg" 
                    >
                        Register Now
                    </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <h2 className='py-5 text-center text-opacity-75'>Our Recipes</h2>
      <Recipes></Recipes>
    <section className="py-5 bg-dark my-5">
        <div className="container">
            <h2 className="text-center text-white">Client Testimonial</h2>
            <p className="lead text-center text-white mb-5">
               Our Client are very happy to get our service and they are very satisfied with our service, they are very happy to get our service and they are very satisfied with our service
            </p>

            <div className="row g-4 justify-content-center">

                {
                  chefs && chefs.slice(0,3).map((chef, index) => (
                    <div key={index} className="col-md-6 col-lg-4">
                    <div className="card bg-warning">
                        <div className="card-body text-center">
                            <img src={chef.photo} style={{width:"150px"}} className="rounded-circle mb-3"/>
                            <h3 className="card-title mb-3">{chef.name}</h3>
                            <p className="card-text">
                                { (chef.description).length > 100 ? ((chef.description).substring(0,80))+"..." : chef.description }
                            </p>
                            <div className="testimonial-rating">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
                        </div>
                    </div>
                </div>
                  ))
                }
            </div>
        </div>
    </section>
      </Row>
    </Container>
    </div>
  )
}

export default Home