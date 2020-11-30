import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import '../App.css';
import './HexMobile.css';

function HexMobile() {

	return(
	 <Row  className="section bottom-shadow">
    <a name="hexmobile"></a>
       <Col>
        <Row className="justify-content-center order-sm-1">
          <Col md={2} xs={4}>
            <Image className="section-icon" src={require("../images/HEXMobile.png")} fluid />
          </Col>
        </Row>
       <Row className="order-sm-2 justify-content-center ">
         <Col xs={10} >
           <p className="title"> click one of the <strong>links</strong> to download our app </p>
          </Col>
        </Row>

        <div  className="d-flex flex-wrap no-padding justify-content-center">
         
            <Col xs={12} sm={6} > <Image className="mobile-image" src={require("../images/hex-mobie-assetsl.png")}  /></Col>
        
            <Col xs={12} sm={4} className="download-buttons"> 
            
              <Row className="download">
              <a href="https://hexbusiness.net/APK/hexmobileAndroid.apk">
                <Image className="download-button" src={require("../images/apk.png")}  />
                </a>
                </Row>
                  <Row className="download">
                   <a href="https://play.google.com/store/apps/details?id=com.hexbusiness.hexmobile">
                <Image className="download-button" src={require("../images/googleplay.png")}  />
                </a>
                </Row>
                <Row className="download">
                <a href="https://testflight.apple.com/join/wTYlFffl">
                  <Image className="download-button" src={require("../images/ios.png")}  />
                  </a>
                </Row>
            </Col>
         
         </div>
       </Col>
      </Row>
		);
}

export default HexMobile;