
import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import '../App.css';
import ReactPlayer from "react-player"

function HexPlay() {

	return(
		<Row  className="section bottom-shadow">
		 <a name="hexplay"></a>
			<Col>
			  <Row  className="justify-content-center">
			    <Col md={2} xs={4}>
			  	  <Image className="section-icon" src={require("../images/HEXPlay.png")} fluid />
			  	</Col>
			  </Row>
			  <Row>
		       	<p className="title"> about <strong>HEX</strong></p>
		      </Row>
		      <Row className="justify-content-center">
		      <Col xs={12} sm={8}>
		      	<ReactPlayer className="w-100" url="https://youtu.be/qFdVVCw1AW0" />
		      	</Col>
		      </Row>

	    	</Col>
    	</Row>
	);
}

export default HexPlay;

