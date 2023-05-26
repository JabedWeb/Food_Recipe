/* eslint-disable no-unused-vars */
import React, { createRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import jsPDF from 'jspdf';
const Blog = () => {

  const createPDF = async () => {
    const pdf = new jsPDF("l", "pt", "a4");
    const data = await document.querySelector("#pdf");
    pdf.html(data).then(() => {
      pdf.save("Blog.pdf");
    });
  };

  return (
    
    <Container id='pdf' className='py-5'>

     
      <Row className='justify-content-center' >

  <Col md={2}>
  <button className='text-center btn btn-warning my-5' onClick={createPDF} type="button">PDF Download</button>
    <div id="list-example" className="list-group">
      <a className="list-group-item list-group-item-action" href="#list-item-1">Question-1</a>
      <a className="list-group-item list-group-item-action" href="#list-item-2">Question-2</a>
      <a className="list-group-item list-group-item-action" href="#list-item-3">Question-3</a>
      <a className="list-group-item list-group-item-action" href="#list-item-4">Question-4</a>
    </div>
  </Col>
  <Col md={6}>
  <div style={{ height: "300px", overflow: "hidden" }}>
  <div style={{ height: "100%", overflowY: "scroll" }}>
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0">
      <h4 id="list-item-1"> Q1-Differences between uncontrolled and controlled components:</h4>
      <p>Uncontrolled components are components that manage their own state internally, without relying on Reacts state management. Any user input that affects the state of an uncontrolled component is handled by the component itself.</p>
<p>Controlled components, on the other hand, rely on Reacts state management to manage their state. They receive their current state and a function to update their state as props from a parent component. Any user input that affects the state of a controlled component is handled by the parent component through the state update function.</p>

<h4 id="list-item-2">Q2-How to validate React props using PropTypes:</h4>
<p>React provides a utility called <code>PropTypes</code> that allows developers to specify the types and shapes of the props that their components expect. PropTypes can be used to catch errors early and provide more helpful error messages to other developers who use the components.</p>
<p>To use PropTypes, developers can import the utility from the <code>prop-types</code> package and use the various PropTypes functions to specify the type of each prop in a components <code>propTypes</code> object. For example, to specify that a prop named <code>name</code> is a string, a developer can write:</p>



<h4 id="list-item-3">Q3-Difference between Node.js and Express.js:</h4>
<p>Node.js is a JavaScript runtime built on the V8 engine, which allows developers to run JavaScript code outside of a web browser. It provides a number of built-in modules for common tasks such as file system access and networking, as well as a vast ecosystem of third-party packages.</p>
<p>Express.js is a web framework built on top of Node.js that provides a set of features and utilities for building web applications. It includes features such as routing, middleware, and template engines, and can be extended with third-party packages for additional functionality.</p>


<h4 id="list-item-4">Q4-What is a custom hook, and why will you create a custom hook?</h4>


<p>A custom hook is a reusable piece of logic that can be shared across multiple React components. It is a JavaScript function that uses the built-in React hooks such as <code>useState</code> and <code>useEffect</code> to encapsulate complex behavior into a single function that can be easily reused.</p>
<p>Developers create custom hooks to abstract away common functionality, making it easier to reuse and reason about. For example, a developer might create a custom hook to handle form validation logic, or to manage the state of a complex component. Custom hooks can be shared across multiple components, reducing duplication and improving code organization.</p>
    </div>
    </div>
    </div>
  </Col>
        </Row>
    </Container>
  )
}

export default Blog