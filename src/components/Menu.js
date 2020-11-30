import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import './Menu.css';
import '../App.css';


function Menu() {

	return(
		<div className="menu">
			 <Row><Image className="close-button" src={require("../images/close.png")} /></Row>
			<Row className="menu-title">hex</Row>
				<Row className="menu-item"><p><strong>hex</strong></p></Row>
				<Row className="menu-item"><strong>hex AA lobby </strong>(10% extra)</Row>
			<Row className="menu-title">our projects</Row>
				<Row className="menu-item">
					<a href="/hexmobile"><strong>hex mobdile</strong></a>
				</Row>
				<Row className="menu-item"><strong>hex credit</strong></Row>
				<Row className="menu-item"><strong>hex money</strong></Row>
				<Row className="menu-item"><strong>hex pool</strong></Row>
				<Row className="menu-item"><strong>hex stable</strong> (coming soon)</Row>
			<Row className="menu-title">entertainment</Row>
				<Row className="menu-item"><strong>hex lotto rocket</strong></Row>
				<Row className="menu-item"><strong>hex lotto stake</strong></Row>
				<Row className="menu-item"><strong>hex bet </strong>(coming soon)</Row>
				<Row className="menu-item"><strong>hex play </strong>(coming soon)</Row>
				<Row className="menu-item"><strong>hextra</strong></Row>
			<Row className="menu-title">stats</Row>
				<Row className="menu-item"><strong>hex.vision</strong></Row>
				<Row className="menu-item"><strong>uniswap.hex.vision</strong></Row>
      	</div>
	);
}

export default Menu;