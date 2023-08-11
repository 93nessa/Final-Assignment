import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default class Specialize extends React.Component {
    render () {
        return (
        <ListGroup>
            <ListGroup.Item variant="warning">Crack Fill</ListGroup.Item>
            <ListGroup.Item variant="warning">Seal Coating</ListGroup.Item>
            <ListGroup.Item variant="warning">Parking Lot Striping</ListGroup.Item>
            <ListGroup.Item variant="warning">Patching</ListGroup.Item>
            </ListGroup>
        )
    }
}