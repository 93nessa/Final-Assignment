import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default class CallUs extends React.Component {
    render () {
        return (
            <div>
                <Button variant="success" size="lg" className="bi bi-telephone-outbound"> Call Us 915-123-1234</Button>
            </div>
        )
    }
}