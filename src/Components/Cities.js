import React from "react";
import ListGroup  from "react-bootstrap/ListGroup";


export default class Cities extends React.Component {
    render () {
        return (
            <ListGroup>
                <ListGroup.Item variant="dark">Horizon</ListGroup.Item>
                <ListGroup.Item variant="dark">Socorro</ListGroup.Item>
                <ListGroup.Item variant="dark">Sunland Park</ListGroup.Item>
                <ListGroup.Item variant="dark">Vinton</ListGroup.Item>
                <ListGroup.Item variant="dark">Las Cruces</ListGroup.Item>
            </ListGroup>
        )
    }
}