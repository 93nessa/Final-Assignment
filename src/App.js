import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import  FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form  from 'react-bootstrap/Form';
import {useState} from 'react';
import Facebook from './Components/Facebook.png'
import instagram from './Components/instagram.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Corralitos from './Components/Corralitos.jpg'
import CrossRoads from './Components/CrossRoads.jpg'
import Apartments from './Components/Apartments.jpg'
import StoneAgePaving from './Components/StoneAgePaving.jpg'
import './Components/images.css'
import './Components/style.css'

export default function WebPage (){
  return (
    <Container>
      <Router>
          <div>
            <Row>
          <Image className='Logo' src= {StoneAgePaving} roundedCircle  width={200}></Image>
          </Row>
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
    <Alert variant='light'>
      <br></br>
      <Alert.Heading>El Paso's Most Reliable Family Owned Asphalt Company</Alert.Heading>
      <hr/>
    <p>With 20+ years of experince. We serve El Paso and surrounding areas</p>
    </Alert>

    <Stack gap={5}>
        <div className='p-2'>Horizon</div>
        <div className='p-2'>Socorro</div>
        <div className='p-2'>Sunland Park</div>
        <div className='p-2'>Vinton</div>
        <div className='p-2'>Las Cruces</div>
        </Stack>
    <h4>We Specialize in:</h4>
    <div className='p-2'>Crack Fill</div>
    <div className='p-2'>Seal Coating</div>
    <div className='p-2'>Parking Lot Striping</div>
    <div className='p-2'>Patching</div>
    </div>
  )
}   

function JobSites(){
  return (
    <Container>
      <div>
      <h2>Job Sites</h2>
      <br></br>
      <Card>
        <Card.Header>Cross Roads Animal Hospital</Card.Header>
        <Card.Img src={CrossRoads}></Card.Img>
      </Card>
      <Card>
        <Card.Header>Rio Apartments</Card.Header>
        <Card.Img src={Apartments}></Card.Img>
      </Card>
      <Card>
        <Card.Header>Corralitos Restaurant</Card.Header>
        <Card.Img src={Corralitos}></Card.Img>
      </Card>
      </div>
      </Container>
  )
}  

function ContactUs() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
            <a href="https://www.instagram.com/stoneagepaving_/"><Image src= {instagram} width={60}></Image></a>
            <a href="https://www.facebook.com/stoneagepaving00"><Image src= {Facebook} width={100}></Image></a>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          value={newComment}
          onChange={handleCommentChange}
        />
      </FloatingLabel>
      <Button className="button-27" role="button" onClick={handleSubmit}>
        Submit Comment
      </Button>
      <div>
        <h2>Comments:</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
