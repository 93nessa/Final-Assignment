import React from "react";
import Card from 'react-bootstrap/Card';
import Corralitos from './Corralitos.jpg'
import CrossRoads from './CrossRoads.jpg'
import Apartments from './Apartments.jpg'

export default class Jobs extends React.Component {
    render () {
        return (
    <div>
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
        )
    }
}
