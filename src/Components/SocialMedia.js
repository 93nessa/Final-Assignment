import React from "react";
import Image from 'react-bootstrap/Image';
import Facebook from './Facebook.png';
import Instagram from './instagram.png';


export default class SocialMedia extends React.Component {
    render (){
        return (
            <div>
                <a href="https://www.instagram.com/stoneagepaving_/"><Image src= {Instagram} width={60}></Image></a>
                <a href="https://www.facebook.com/stoneagepaving00"><Image src= {Facebook} width={100}></Image></a>
            </div>
        )
    }
}