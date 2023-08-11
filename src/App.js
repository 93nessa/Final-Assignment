import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import  FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form  from 'react-bootstrap/Form';
import {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import './Components/buttons.css'
import './Components/style.css'
import HomePage from './Components/Home';
import Jobs from './Components/Jobs';
import SocialMedia from './Components/SocialMedia';
import Logo from './Components/Logo';
import Comments from './Components/Contact';

export default function WebPage (){
  return (
    <Container className='Main'>
      <Router>
          <div>
            <span>
              <Logo></Logo>
            <ButtonGroup>
              <Button className="button-27" role="button">
              <Link to="/">Home</Link>
              </Button>
              <Button className="button-27" role="button">
              <Link to="/jobs">Job Sites</Link>
              </Button>
              <Button className="button-27" role="button">
              <Link to="/contact">Contact Us</Link>
              </Button>
            </ButtonGroup>
            </span>
              <Switch>
                  <Route path="/jobs">
                      <JobSites></JobSites>
                  </Route>
                  <Route path="/contact">
                      <ContactUs></ContactUs>
                  </Route>
                  <Route path="/" >
                      <Home></Home>
                  </Route>
              </Switch>
          </div>
      </Router>
     </Container> 
  )
}

function Home(){
  return (
    <div>
      <h1>Home</h1>
   <HomePage></HomePage>
   </div>
  )
}   

function JobSites(){
  return (
    <Container>
      <div>
      <h1>Job Sites</h1>
      <Jobs></Jobs>
      </div>
      </Container>
  )
}  

function ContactUs() {
  return (
    <div>
      <h1>Contact Us</h1>
        <SocialMedia></SocialMedia>
        <Comments></Comments>
    </div>
  );
}
