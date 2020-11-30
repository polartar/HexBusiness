import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import '../App.css';
import './HexCredit.css';

function HexCredit() {

	return(
    <Row className="section bottom-shadow">
     <a name="hexcredit"></a>
    <Col>
  	  <Row >
        <Col>
          <Row className="justify-content-center">
            <Col md={2} xs={4}>
            <Image className="section-icon" src={require("../images/HEXCredit.png")} fluid />
            </Col>
          </Row>
          <p className="title"> <strong>hex.business</strong> decentralized credit platform </p>
          <Row className="justify-content-center">
           <Image className="credit-cards" src={require("../images/creditcards.png")} />
          </Row>
        </Col>
      </Row>
      {/*
      <Row className="section bottom-shadow">
      <Col>
      <Row>
        <Col md={3}>I want to provide</Col>
        <Col md={1}> 
          <Row><Button variant="light">HEX</Button></Row>
          <Row><Button variant="light">ETH</Button></Row>
        </Col>
        <Col md={2}> Enter Amount </Col>
        <Col md={1}> for </Col>
        <Col md={3}> 
          <Row>
            <Button variant="light">1</Button>
            <Button variant="light">2</Button>
            <Button variant="light">3</Button>
          </Row>
          <Row>
             <Button variant="light">4</Button>
            <Button variant="light">5</Button>
            <Button variant="light">6</Button>
          </Row>
        </Col>
        <Col md={1}> months</Col>
        <Col md={1}> Enter </Col>
         
      </Row>
      <Row>
      <Col md={1}></Col>
        <Col md={5}>
          <Row className="loans-title">Your HEX loans</Row>
          <Row className="loan-table">
            <Col className="loan-cell">Amount Loaned</Col>
            <Col className="loan-cell">0.0000</Col>
          </Row>
          <Row className="loan-table">
            <Col className="loan-cell">Expiry/Time left</Col>
            <Col className="loan-cell">111 Days</Col>
          </Row>
          <Button variant="light">withdraw HEX</Button>
        </Col>

        <Col md={5}>
          <Row className="loans-title">Your ETH loans</Row>
          <Row className="loan-table">
            <Col className="loan-cell">Amount Loaned</Col>
            <Col className="loan-cell">0.0000</Col>
          </Row>
          <Row className="loan-table">
            <Col className="loan-cell">Expiry/Time left</Col>
            <Col className="loan-cell">111 Days</Col>
          </Row>
           <Button variant="light">withdraw ETH</Button>
        </Col>
         <Col md={1}></Col>
      </Row>
     
        <p> Your wallet balance: 0 HEX </p>
       
        <Row >
              <Col className="table-cell" md={6}> TOTAL HEX STAKED </Col>
              <Col className="table-cell" md={6}> TOTAL ETH AVAILABLE </Col>
            </Row>
            <Row >
              <Col className="table-cell" md={6}> YOUR HEX STAKED </Col>
              <Col className="table-cell" md={6}> YOUR ETH PROVIDED </Col>
            </Row>
        </Col>
      </Row>
    */}
    </Col>
   </Row>
		);
      
}

export default HexCredit;