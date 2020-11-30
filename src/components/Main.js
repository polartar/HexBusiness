import React, { useState, useEffect } from "react";
import {Row, Col, Image } from 'react-bootstrap';
import './Main.css';
import '../App.css';


function Main() {

const [statsData, setStatsData] = useState([]);

const getStats = () => {
        fetch(
      `https://hexvisionbusinessapi.azurewebsites.net/api/extendedStats`,
      {
        method: "GET",
        mode:'cors',

  headers: {
       'Content-Type': 'application/json',

       'Access-Control-Allow-Origin': 'http://localhost:3000',
       'Access-Control-Allow-Origin': '*'
  }
      }
    )
      .then(res =>  res.json())
      .then(response => {
        console.log(response);
        setStatsData(response);
      })
      .catch(error => console.log("API ERROR:" + error));
  };

  useEffect(() => {
    getStats();

    setInterval(()=> getStats(), 20000);
    
  },[]);

  const getStatTextClass = (val) =>{
    if(val >= 0)
      return "percent-text-up";
    else 
      return "percent-text-down";
  };

  const getStatArrow = (val) =>{
    if(val >= 0)
      return require('../images/UpArrow.png');
    else
      return require('../images/DownArrow.png')
  };

	return (
		<Row className="section main-section bottom-shadow">
      <Col className="no-padding">
	 		  <Row className="d-none d-md-block">
         <Col>
           <Row>
       	    <Col md={6} className="lets-talk">  <p > let's talk <strong>hex.business </strong></p></Col>
       	    <Col md={6}> <Image className="top-phone" src={require("../images/mobile.png")} fluid  /></Col>
           </Row>
         </Col>
     		</Row>
      
         <div className="d-none d-md-block">
         <Row className="ticker-row">
            <Col xs={1} className="no-padding" >
              <Image className="hex-business-text" src={require('../images/hexbusinesstext.png')} fluid />
            </Col>
            <Col md={11}>
              <Row className="table-cell stat-text">
                 <Col md={4} >
                   <Row className="top-cell">
                     <Col className="col-4"> <strong>HEX</strong>/USD </Col>
                      <Col className="col-5 text-right"><strong>{(statsData.hexUsd * 1).toFixed(8)}</strong></Col>
                      <Col className="col-1 no-padding"><Image className="arrow" src={getStatArrow(statsData.hexUsd24Change)}  /></Col>
                      <Col className={getStatTextClass(statsData.hexUsd24Change) + " col-2"}>{statsData.hexUsd24Change}%</Col>
                    </Row>
                  </Col>
                  <Col md={4} >
                   <Row className="top-cell">
                    <Col className="col-4"><strong>HEX</strong>/BTC </Col>
                    <Col className="col-5 text-right"><strong>{(statsData.hexBtc * 100000000).toFixed(2)} sats </strong></Col>
                     <Col className="col-1 no-padding"><Image className="arrow" src={getStatArrow(statsData.hexBtc24Change)}   /></Col>
                    <Col className={getStatTextClass(statsData.hexBtc24Change) + " col-2"}>{statsData.hexBtc24Change}%</Col>
                    </Row>
                  </Col>
                  <Col md={4} >
                   <Row className="top-cell">
                     <Col className="col-4"><strong>HEX</strong>/ETH </Col>
                      <Col className="col-5 text-right"><strong>{(statsData.hexEth * 10000000).toFixed(2)} gwei</strong></Col>
                       <Col className="col-1 no-padding"><Image className="arrow" src={getStatArrow(statsData.hexEth24Change)} /></Col>
                      <Col className={getStatTextClass(statsData.hexEth24Change) + " col-2"}>{statsData.hexEth24Change}%</Col>
                    </Row>
                  </Col>
              </Row>
              <Row className="table-cell stat-text">
                <Col md={4} >
                  <Row className="top-cell">
                     <Col className="col-4"><strong>BTC</strong>/USD </Col>
                    <Col className="col-5 text-right"><strong>${(statsData.btcUsd / 1000).toFixed(4)}k </strong></Col>
                     <Col className="col-1 no-padding"><Image className="arrow" src={getStatArrow(statsData.btcUsd24Change)}  /></Col>
                    <Col className={getStatTextClass(statsData.btcUsd24Change) + " col-2"}>{statsData.btcUsd24Change}%</Col>
                  </Row>
                  </Col>
                  <Col md={4} >
                  <Row className="top-cell">
                    <Col className="col-4"><strong>ETH</strong>/USD </Col>
                    <Col className="col-5 text-right"><strong>${(statsData.ethUsd * 1).toFixed(2)}</strong></Col>
                     <Col className="col-1 no-padding"><Image className="arrow" src={getStatArrow(statsData.ethUsd24Change)} /></Col>
                    <Col className={getStatTextClass(statsData.ethUsd24Change) + " col-2"}>{statsData.ethUsd24Change}%</Col>
                  </Row>
                </Col>
              </Row> 
            </Col>
           
          </Row>
          </div>


         <Row className="d-md-none">
          <Col className="col-3 no-padding " style={{padding:0}}>
            <Image className="hex-business-text w-75" src={require('../images/hexbusinesstext.png')}  />
          </Col>
        </Row>

      	<Row className="table-cell mobile-stat-margin d-md-none">
          <Col className="col-4"> <strong>HEX</strong>/USD </Col>
          <Col className="col-5 text-right"><strong>{(statsData.hexUsd * 1).toFixed(8)}</strong></Col>
          <Col className="col-1 no-padding"><Image className="arrow" src={getStatArrow(statsData.hexUsd24Change)}  /></Col>
          <Col className={getStatTextClass(statsData.hexUsd24Change) + " col-2 my-auto"}>{statsData.hexUsd24Change}%</Col>
        </Row>
        <Row className="table-cell mobile-stat-margin d-md-none">
          <Col className="col-4"><strong>HEX</strong>/BTC </Col>
          <Col className="col-5 text-right"><strong>{(statsData.hexBtc * 100000000).toFixed(2)} sats </strong></Col>
           <Col className="col-1 no-padding"><Image className="arrow" src={getStatArrow(statsData.hexBtc24Change)}  /></Col>
          <Col className={getStatTextClass(statsData.hexBtc24Change) + " col-2 my-auto"}>{statsData.hexBtc24Change}%</Col>
        </Row>
        <Row className="table-cell mobile-stat-margin d-md-none">
          <Col className="col-4"><strong>HEX</strong>/ETH </Col>
          <Col className="col-5 text-right"><strong>{(statsData.hexEth * 1000000000).toFixed(2)}</strong></Col>
           <Col className="col-1 no-padding"><Image className="arrow" src={getStatArrow(statsData.hexEth24Change)}  /></Col>
          <Col className={getStatTextClass(statsData.hexEth24Change) + " col-2 my-auto"}>{statsData.hexEth24Change}%</Col>
        </Row>
      	<Row className="table-cell  mobile-stat-margin d-md-none">
          <Col className="col-4"><strong>BTC</strong>/USD </Col>
          <Col className="col-5 text-right"><strong>${(statsData.btcUsd / 1000).toFixed(4)}k </strong></Col>
           <Col className="col-1 no-padding"><Image className="arrow" src={getStatArrow(statsData.btcUsd24Change)}  /></Col>
          <Col className={getStatTextClass(statsData.btcUsd24Change) + " col-2 my-auto"}>{statsData.btcUsd24Change}%</Col>
        </Row>
        <Row className="table-cell mobile-stat-margin d-md-none">
          <Col className="col-4"><strong>ETH</strong>/USD </Col>
          <Col className="col-5 text-right"><strong>${(statsData.ethUsd * 1).toFixed(2)}</strong></Col>
           <Col className="col-1 no-padding"><Image className="arrow" src={getStatArrow(statsData.ethUsd24Change)}   /></Col>
          <Col className={getStatTextClass(statsData.btcUsd24Change) + " col-2 my-auto"}>{statsData.ethUsd24Change}%</Col>
        </Row>

    <div className="d-flex flex-wrap">
      <Col xs={12} md={6} >
        <Row className="table-title stat-text table-margin">
          <strong>OVERVIEW </strong>
        </Row>
        <Row className="table-cell stat-text table-margin">
          <Col className="stat-cell" xs={4}>TOTAL SUPPLY </Col>
          <Col className="stat-cell" xs={3}><strong>{(statsData.hexTotalSupply / 1000000000).toFixed(3)}B</strong></Col>
          <Col className="stat-cell" xs={3}> ${(statsData.hexTotalSupply * statsData.hexUsd / 1000).toFixed(2)}k </Col>
          <Col className="stat-cell" xs={1}> <Image className="arrow-small" src={getStatArrow(statsData.hexTotalSupply24Change)}  /></Col>
          <Col className={getStatTextClass(statsData.hexTotalSupply24Change) + " stat-cell my-auto"} xs={1}>
            <div className="small-percent">
              {statsData.hexTotalSupply24Change}%
            </div>
          </Col>
        </Row>
        <Row className="table-cell stat-text table-margin">
          <Col className="stat-cell" xs={4}>LOCKED </Col>
          <Col className="stat-cell" xs={3}><strong>{(statsData.hexLockedSupply / 1000000000).toFixed(3)}B</strong> </Col>
          <Col className="stat-cell" xs={3}>${(statsData.hexLockedSupply * statsData.hexUsd / 1000).toFixed(2)}k  </Col>
          <Col className="stat-cell" xs={1}> <Image className="arrow-small" src={getStatArrow(statsData.hexLockedSupply24Change)}  /></Col>
          <Col className={getStatTextClass(statsData.hexLockedSupply24Change) + " stat-cell my-auto"} xs={1}> 
            <div className=" small-percent">
              {statsData.hexLockedSupply24Change}%
            </div>
          </Col>
        </Row>
        <Row className="table-cell stat-text table-margin">
          <Col className="stat-cell" xs={4}>CIRCULATING </Col>
          <Col className="stat-cell" xs={3}><strong>{(statsData.hexCirculatingSupply / 1000000000).toFixed(3)}B</strong> </Col>
          <Col className="stat-cell" xs={3}>${(statsData.hexCirculatingSupply * statsData.hexUsd / 1000).toFixed(2)}k  </Col>
          <Col className="stat-cell" xs={1}> <Image className="arrow-small" src={getStatArrow(statsData.hexCirculatingSupply24Change)}  /></Col>
          <Col className={getStatTextClass(statsData.hexCirculatingSupply24Change)+ " stat-cell my-auto"} xs={1}> 
            <div className=" small-percent">
              {statsData.hexCirculatingSupply24Change}%
            </div>
          </Col>
        </Row>
      </Col>

      <Col xs={12} md={6} >
        <Row className="table-title stat-text">  
          <strong>ADOPTION AMPLIFIER </strong>
        </Row>
        <Row className="table-cell stat-text">
          <Col className="stat-cell" xs={4}>AA POOL val </Col>
          <Col className="stat-cell" xs={6}><strong>{(statsData.adoptionAmplifierCurrentEth / 1000).toFixed(3)}k ETH </strong></Col>
          <Col className="stat-cell" xs={1}> <Image className="arrow-small" src={getStatArrow(statsData.adoptionAmplifierCurrentEth24Change)}  /></Col>
          <Col className={getStatTextClass(statsData.adoptionAmplifierCurrentEth24Change) + " stat-cell my-auto"} xs={1}> 
            <div className=" small-percent">{statsData.adoptionAmplifierCurrentEth24Change}%
            </div>
          </Col>
        </Row>
        <Row className="table-cell stat-text">
          <Col className="stat-cell" xs={4}> AA POOL cost </Col>
          <Col className="stat-cell" xs={6}><strong>{(statsData.adoptionAmplifierCurrentHexEth / 1000).toFixed(3)}k H/E </strong> </Col>
          <Col className="stat-cell" xs={1}> <Image className="arrow-small" src={getStatArrow(statsData.adoptionAmplifierCurrentHexEth24Change)} /></Col>
          <Col className={getStatTextClass(statsData.adoptionAmplifierCurrentHexEth24Change) + " stat-cell my-auto"} xs={1}> 
          <div className="small-percent">{statsData.adoptionAmplifierCurrentHexEth24Change}%</div></Col>
        </Row>
        <Row className="table-cell stat-text">
          <Col className="stat-cell" xs={4}> UNISWAP cost  </Col>
          <Col className="stat-cell" xs={6}><strong>{(statsData.uniswapHexEth / 1000).toFixed(3)}k H/E </strong></Col>
 
          <Col className="stat-cell" xs={1}> <Image className="arrow-small" src={getStatArrow(statsData.uniswapHexEth24Change)} /></Col>
          <Col className={getStatTextClass(statsData.uniswapHexEth24Change) + " stat-cell my-auto"} xs={1}> 
          <div className="small-percent">{statsData.uniswapHexEth24Change}%</div></Col>
        </Row>
      </Col>
     </div>

     </Col>
    </Row>
     
		);
}

export default Main;