/* eslint-disable no-unused-vars */
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './ErrorDefault.css'

const ErrorDefault = () => {
  return (
    <Container className='text-center page_404'>
      <Row>
        <Col>

		<div className=" text-center">
		<div className="four_zero_four_bg">
			<h1 className="text-center ">404</h1>
		</div>
		
		<div className="contant_box_404">
      <h3 className="h2">Look like you arre lost</h3>
      <p>The page you are looking for not available!</p>
      <button className='btn btn-warning text-dark'><a href="/" className="font-bold text-decoration-none">Go to Home</a></button>
	</div>
		</div>


        </Col>
      </Row>
    </Container>
  )
}

export default ErrorDefault