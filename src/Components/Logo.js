import React from "react";
import Image from "react-bootstrap/Image";
import StoneAgePaving from './image0.png'

export default class Logo extends React.Component {
    render() {
        return (
            <Image className='Logo' src= {StoneAgePaving} height={200} ></Image>
        )
    }
}