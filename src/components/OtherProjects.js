
import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import '../App.css';
import './OtherProjects.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function OtherProjects() {

	return(

		 <Row  className=" bottom-shadow">
		   <Col>
		     <Row className="justify-content-center">
             <Col xs={10}>
        	  <p className="project-title title"> Check out our other projects by <strong>hex.business</strong> </p>
              </Col>
         </Row>
         <div className="project-icons justify-content-center d-flex flex-wrap">
            <Col md={2} sm={2} xs={4}><Image className="project-image" src={require("../images/HEXRocket.png")} /></Col>
            <Col md={2} sm={2} xs={4}><Image className="project-image" src={require("../images/HEXStake.png")} /></Col>
            <Col md={2} sm={2} xs={4}><Image className="project-image" src={require("../images/HEXbet.png")} /></Col>
            <Col md={2} sm={2} xs={4}><Image className="project-image" src={require("../images/HEXStable.png")} /></Col>
            <Col md={2} sm={2} xs={4}><Image className="project-image" src={require("../images/HEXpool.png")} /></Col>
          </div>
    
      <Row>
        	<Carousel
             infiniteLoop
        centerMode
       >
       <div>
                    <Image src={require("../images/hex-credit-update.png")} fluid />
                </div>
                <div>
                    <Image src={require("../images/Hex-Mobile-update.png")} fluid />
                </div>
                <div>
                    <Image src={require("../images/Hex-money-updated.png")} fluid />
                </div>
                <div>
                    <Image src={require("../images/hexmoney promo41900x800 (1).jpg")} fluid />
                </div>
        		<div>
        			<Image src={require("../images/COMINGSOONgraphicFIN.jpg")} fluid />
        		</div>
        		<div>
        			<Image src={require("../images/1900x800HEXsplash-0001.jpg")} fluid />
        		</div>
        		<div>
        			<Image src={require("../images/3HEXBanner1900x800.jpg")} fluid />
        		</div>
        	
        
        	</Carousel>
        </Row>
      </Col>
    </Row>

      
	);
}

export default OtherProjects;

