import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Button, Image, TouchableHighlight, Navbar, Nav, Modal } from 'react-bootstrap';
import './TopBar.css';

import Menu from './Menu';
import useOnClickOutside from "./UseOnClickOutside";

import {getWeb3, tokenInstance, moneyInstance, moneyAddress} from '../api/contractABI';
import Headroom from 'react-headroom';

function TopBar() {

	const [showModal, setShowModal] = useState(false);

 	const [showMenu, setShowMenu] = useState(false);

 	 const [amount, setAmount] = useState(0);

 	const ref = useRef();

  useOnClickOutside(ref, () => {
   setShowMenu(false);
  });


 const Menu = () => {
 	return(
 		

 		<div className="menu" ref={ref}>
			 <div onClick={()=>setShowMenu(!showMenu)}>
			 	<Image className="close-button" src={require("../images/close.png")} />
			 </div>
			<Row className="menu-title">hex</Row>
				<Row className="menu-item"><a href="https://hex.win">hex</a></Row>
				<Row className="menu-item">hex AA lobby (10% extra)</Row>
			<Row className="menu-title">our projects</Row>
				<Row className="menu-item">
					<a href="#hexmobile">hex mobile</a>
				</Row>
				<Row className="menu-item">
					<a href="#hexcredit">hex credit</a>
				</Row>
				<Row className="menu-item">
					<a href="#hexmoney">hex money</a>
				</Row>
				<Row className="menu-item">hex pool</Row>
				<Row className="menu-item">hex stable (coming soon)</Row>
			<Row className="menu-title">entertainment</Row>
				<Row className="menu-item">
					<a href="https://hexlotto.com">hex lotto rocket</a>
				</Row>
				<Row className="menu-item">hex lotto stake</Row>
				<Row className="menu-item">hex bet (coming soon)</Row>
				<Row className="menu-item">
					<a href="#hexplay"> hex play</a>
				</Row>
				<Row className="menu-item">
					<a href="https://hextra.win">hextra</a>
				</Row>
			<Row className="menu-title">stats</Row>
				<Row className="menu-item">
					<a href="https://hex.vision">hex.vision</a>
				</Row>
				<Row className="menu-item">
					<a href="https://uniswap.hex.vision">uniswap.hex.vision</a>
				</Row>
      	</div>
      );
 	}

 	const approve = () => {
 		getWeb3().eth.getAccounts().then(accounts =>
 			tokenInstance.methods.approve(moneyAddress, amount.toString() + '00000000').send({from:accounts[0]}).then(setShowModal(false)));
 	}

	return(
		<>
		{showMenu ? Menu() : ""}
		<Headroom>
		<Navbar className="App-header bottom-shadow">
		 <Navbar.Brand href="#"><Image className="top-image" src={require("../images/toplogo.png")}  />Beta</Navbar.Brand>

		 <ul className="navbar-nav ml-auto" >
		 	<li className="my-auto"><Image onClick={() => setShowModal(true)} className="metamask-button" src={require("../images/metamask.png")}   /></li>
		 	<li className="my-auto">
		 	<div onClick={() => setShowMenu(!showMenu)}>
		 	<Image className="menu-icon" src={require("../images/menuicon.png")}   /></div></li>
		 </ul>
			
      	</Navbar>
      </Headroom>
      	 <Modal show={showModal} onHide={()=>setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title><strong>Approve Tokens</strong></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/*	 <Row className="justify-content-center">
        	 	<Col md={4}><Image src={require("../images/HEXCredit.png")} fluid /></Col>
        	 	<Col md={6} className="my-auto">
        	 	<input className="enter-amount" placeholder="Enter amount" type="text" onChange={e => setAmount(e.target.value)} /></Col>
        	 	<Col md="auto" className="my-auto"><strong>HEX</strong></Col>

        	 </Row> */}
        	 <Row className="justify-content-center">
        	 	<Col md={4}><Image src={require("../images/HEXMoney.png")} fluid /></Col>
        	 	<Col md={6} className="my-auto">
        	 	<input className="enter-amount" placeholder="Enter amount" type="text" onChange={e => setAmount(e.target.value)} /></Col>
        		<Col md="auto" className="my-auto"><strong>HEX</strong></Col>
        
        	 </Row>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" className="action-button" onClick={() => approve()}>
            Approve
          </Button>
        </Modal.Footer>
      </Modal>
      	</>
	);
}

export default TopBar;