import React from "react";
import Alert from 'react-bootstrap/Alert';
import Cities from "./Cities";
import Specialize from "./Specialize";
import CallUs from "./Call";


export default class HomePage extends React.Component {
    render () {
        return (
            <div>
            <Alert variant="dark">
              <Alert.Heading>El Paso's Most Reliable Family Owned Asphalt Company</Alert.Heading>
              <hr/>
            <p>With 20+ years of experince. We serve El Paso and surrounding areas</p>
            </Alert>
            <CallUs></CallUs>
                <Cities></Cities>
            <br></br>
            <Alert variant="warning">We Specialize in:</Alert>
                <Specialize></Specialize>
            </div>
            
        )
    }
}