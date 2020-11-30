
import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import '../App.css';
import './Social.css';

function Social() {

	return(
    <>
      <Row className="section bottom-shadow">
        <Col>
        	<Row>
            <p className="title"> <strong>subscribe</strong> to hear from us</p>
          </Row>
          <div className="justify-content-center mb-5 mt-3 d-flex flex-wrap">
            <Col sm={5} xs={10}><input className="email-input w-100" type="text" placeholder="email" /></Col>
            <Col sm={2} xs={4}><Button className="sign-up" variant="light"><strong>SIGN UP</strong></Button></Col>
          </div>
          <Row className="justify-content-center"> 
            <Col md={1} sm={2} xs={4}>
            <a href="https://t.me/hexmobileapp"><Image className="w-75" src={require("../images/telegram.png")}  /></a></Col>
            <Col md={1} sm={2} xs={4}> 
            <a href="https://twitter.com/hexbusiness" ><Image className="w-75" src={require("../images/twitter.png")}  /></a></Col>
           </Row>
        </Col>
      </Row>
      <Row className="section bottom-shadow ">
        <Col>
          <Row className="justify-content-center">
            <p> Donations are welcome: 0x1EF0Bab01329a6CE39e92eA6B88828430B1Cd91f </p> 
          </Row>
          <Row className="justify-content-center">
            <Col md={2} sm={5} xs={6}>
      		    <Image src={require("../images/hexbusinessqrcode.jpg")} fluid />
            </Col>
           </Row>
          
         </Col>
       </Row>
       <p> Please be aware that this site is in beta. Use at your own risk.</p>
      </>
	);
}

export default Social;

