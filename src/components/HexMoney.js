
import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Button, Image, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import '../App.css';
import './HexMoney.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useQueryParam, StringParam } from 'use-query-params';


import {getWeb3, moneyInstance, moneyAddress, tokenInstance} from '../api/contractABI';
import {getAirdropStats, getTotalAirdropped} from '../api/etherscan';
import Web3 from 'web3';


function HexMoney({accountsProp, web3Prop}) {
 
  const [hxyVal, setHxyVal] = useState(0);
  const [freezeVal, setFreezeVal] = useState(0);

  const [accounts, setAccounts] = useState([]);
  const [totalSupply, setTotalSupply] = useState(0);
  const [interest, setInterest] = useState(0);
  const [freezeUnfreeze, setFreezeUnfreeze] = useState(false);
  const [maxSupply, setMaxSupply] = useState(0);
  const [balance, setBalance] = useState(0);
  const [copied, setCopied] = useState(false);
  const [frozenBalance, setFrozenBalance] = useState(0);
  const [totalFrozen, setTotalFrozen] = useState(0);
  const [lockedTokens, setLockedTokens] = useState(0);
  const [hxyTransformed, setHxyTransformed] = useState(0);
  const [heartsTransformed, setHeartsTransformed] = useState(0);
 const [ref, setRef] = useQueryParam('r', StringParam);
 const [totalAirdropped, setTotalAirdropped] = useState(0);
 const [airdropDivs, setAirdropDivs] = useState(0);
  
  const [approvedBalance, setApprovedBalance] = useState(0);

 
  useEffect(() =>{

    let web3 = new Web3(window.ethereum);

    if(window.ethereum){   
      window.ethereum.enable();
      console.log(ref);
    }

    console.log(web3.currentProvider);

    async function loadMetamask() {
 if(window.ethereum){
    const accounts = await web3.eth.getAccounts();
    setAccounts(accounts);
    
    console.log(accounts);
    var divs = await getAirdropStats(accounts);
     setAirdropDivs(divs  / 100000000);

     var total = await getTotalAirdropped();
     setTotalAirdropped(total / 100000000);


    moneyInstance.methods.totalSupply().call().then(supply => {
      setTotalSupply(Math.floor((supply / 100000000) ?? 0));
    });

    moneyInstance.methods._maxSupply().call().then(supply => {
      setMaxSupply(Math.floor((supply / 100000000) ?? 0));
    });

    moneyInstance.methods.balanceOf(accounts[0]).call().then(balance => {
      setBalance((balance / 100000000) ?? 0);
    }); 

    moneyInstance.methods.tokenFrozenBalances(accounts[0]).call().then(balance => {
      setFrozenBalance((balance / 100000000) ?? 0);
       moneyInstance.methods.calcFreezingRewards().call({from: accounts[0]}).then(rewards => {
      setInterest(balance == 0 ? 0 : (rewards / 100000000) ?? 0);
    });
     
      });
   

    moneyInstance.methods.lockedTokens().call().then(tokens => {
      setLockedTokens((tokens / 100000000) ?? 0);
    }); 

     moneyInstance.methods.totalHXYTransformed().call().then(tokens => {
      setHxyTransformed((tokens / 100000000) ?? 0);

    });

    moneyInstance.methods.totalHXYTransformed().call().then(tokens => {
      setHxyTransformed((tokens / 100000000) ?? 0);

    });

    moneyInstance.methods.totalHeartsTransformed().call().then(tokens => {
      setHeartsTransformed((tokens / 100000000) ?? 0);

    });

    moneyInstance.methods.totalFrozenTokenBalance().call().then(tokens => {
      setTotalFrozen((tokens / 100000000) ?? 0);

    });

    tokenInstance.methods.allowance(accounts[0], moneyAddress).call().then(all => {
      setApprovedBalance((all / 100000000) ?? 0 )});
    }


  }
  if(web3){
    loadMetamask();
  }
  }, []);

  const transform = (amount) => {
    console.log(amount);
    const refAddress = ref ?? "0x0000000000000000000000000000000000000000";
    console.log("REF@" + ref);
    moneyInstance.methods.transformHEX(amount, refAddress).send({from:accounts[0]});
  }

  const freezeOrUnfreeze = () => {
    console.log(freezeVal);
    if(freezeUnfreeze == false){
      freeze(freezeVal);
    } else {
      unfreeze(freezeVal);
    }
  }

  const freeze = (amount) => {
    console.log("freeze");
    moneyInstance.methods.FreezeTokens(amount).send({from:accounts[0]});
  }

  const unfreeze = (amount) => {
    console.log("unfreeze");
   moneyInstance.methods.UnfreezeTokens().send({from:accounts[0]});
  }
  
	return(
	<Row className="section bottom-shadow">
  <a name="hexmoney"></a>
     <Col>
         <Row className='justify-content-center'>
           <Col md={2} xs={4}> <Image className="section-icon" src={require("../images/HEXMoney.png")} fluid /></Col>
          </Row>
          <Row className='justify-content-center'>
            <Col xs={9}>
              <p className="title"> Transform <strong>HEX</strong> to <strong> hex money</strong> (HXY) </p>
             </Col>
           </Row>
           <Row className="justify-content-center">
           <Col xs={9}>
            <div className="justify-content-center mb-5 mt-5 d-flex flex-wrap">
              <Col xs={12} md="auto" className="my-auto money-col money-text"><strong>Send</strong></Col>
          
              <Col className="my-auto money-col">
                <input className="enter-amount" onChange={v => setHxyVal((parseInt(v.target.value || 0) / 1000) || 0)} placeholder="Enter amount" type="text" />
              </Col>
              <Col  className="my-auto money-text money-col"><strong>HEX</strong></Col>
              <Col sm="auto" className="my-auto money-col money-text"><strong>receive {hxyVal} HXY.</strong> </Col>
              <Col sm="auto" className="my-auto money-col"><Button onClick={() => transform(Math.floor(hxyVal * 100000000000), ref)} className="action-button" variant="light">Transform</Button></Col>
              
            </div>
            <div className="justify-content-center mb-5 d-flex flex-wrap">

              <Col xs={12} md="auto" className="my-auto money-text money-col">
                <strong>I want to</strong>
              </Col>

              <Col  className="my-auto money-col">
                <ToggleButtonGroup className="w-100" type="radio" name='freeze-unfreeze' defaultValue={0}>
                  <ToggleButton value={0} className="my-auto select-button" variant="light" onClick={() => setFreezeUnfreeze(false)}>freeze</ToggleButton>
                  <ToggleButton value={1} className="my-auto select-button" variant="light" onClick={() => setFreezeUnfreeze(true)}>unfreeze</ToggleButton>
                  </ToggleButtonGroup>
              </Col>
              <Col className="my-auto money-col">
              { freezeUnfreeze ? null :
                <input className="enter-amount" placeholder="Enter amount" type="text" onChange={v => setFreezeVal(parseInt(v.target.value * 100000000))} />
              } </Col>
              
              <Col  className="my-auto money-col money-text"><strong>HXY.</strong></Col>
              <Col className="my-auto money-col">
                <Button variant="light" className="action-button" onClick={() => freezeOrUnfreeze()}>Proceed</Button>
              </Col>
            </div>
            </Col>
          </Row>

          <Row>

           <p className="mb-5 title"> <strong>Your wallet balance: {balance} HXY </strong></p>
           </Row>
          
           <div className="d-flex flex-wrap stat-text no-padding">
           <Col xs={12} md={6} className="no-padding">
           
              <Row className="table-cell stat-text stat-cell"> 
                <Col xs={6}>TOTAL SUPPLY</Col>
                <Col xs={6}><strong>{totalSupply.toLocaleString('en-GB')} HXY</strong></Col>
            
              </Row>
              <Row className="table-cell stat-text stat-cell" > 
                <Col xs={6}>FROZEN HXY</Col>
                <Col xs={6}><strong>{totalFrozen.toLocaleString('en-GB')} HXY</strong></Col>
             
              </Row>
           
              <Row className="table-cell stat-text stat-cell" > 
                 <Col xs={6}>CIRCULATING SUPPLY</Col>
                <Col xs={6}><strong>{(totalSupply - totalFrozen - lockedTokens).toLocaleString('en-GB')} HXY</strong></Col>
              
              </Row>

              <Row className="table-cell stat-text stat-cell" > 
                 <Col xs={6}>APPROVED AMOUNT</Col>
                <Col xs={6}><strong>{approvedBalance.toLocaleString('en-GB')} HEX</strong></Col>
              
              </Row>
               <Row className="table-cell stat-text stat-cell" > 
                 <Col xs={6}>TOTAL AIRDROPPED</Col>
                <Col xs={6}><strong>{totalAirdropped.toLocaleString('en-GB')} HEX</strong></Col>
              
              </Row>
              <Row className="table-cell stat-text stat-cell" > 
                 <Col xs={6}>TOTAL HXY TRANSFORMED</Col>
                <Col xs={6}><strong>{hxyTransformed.toLocaleString('en-GB')} HEX</strong></Col>
              </Row>
            </Col>

           <Col xs={12} md={6} className="no-padding">
              <Row className="table-cell stat-text stat-cell" > 
                <Col xs={6}>LOCKED HXY</Col>
                <Col xs={6}><strong>{lockedTokens.toLocaleString('en-GB')} HXY</strong></Col>
          
              </Row>
      
              <Row className="table-cell stat-text stat-cell" > 
                <Col xs={6}>YOUR HXY INTEREST</Col>
                <Col xs={6}><strong>{interest.toLocaleString('en-GB')} HXY</strong></Col>
           
              </Row>
              <Row className="table-cell stat-text stat-cell" > 
              <Col xs={6}>YOUR FROZEN HXY</Col>
                <Col xs={6}><strong>{frozenBalance.toLocaleString('en-GB')} HXY</strong></Col>
                
                </Row>
                <Row className="table-cell stat-text stat-cell" > 
                 <Col xs={6}>MAX SUPPLY</Col>
                <Col xs={6}><strong>{maxSupply.toLocaleString('en-GB')} HXY</strong></Col>
             
              </Row>
               <Row className="table-cell stat-text stat-cell" > 
                 <Col xs={6}>YOUR AIRDROPPED DIVS </Col>
                <Col xs={6}><strong>{airdropDivs.toLocaleString('en-GB')} HEX</strong></Col>
              
              </Row>
               
               <Row className="table-cell stat-text stat-cell" > 
                 <Col xs={6}>TOTAL HEX TRANSFORMED</Col>
                <Col xs={6}><strong>{heartsTransformed.toLocaleString('en-GB')} HEX</strong></Col>
              </Row>
              </Col>
       
            </div>
             <p className='referral-text'>Your referral URL:
            <CopyToClipboard text={window.location.origin + "/?r=" + accounts[0]}
              onCopy={() => setCopied(true)}>
                <span> {window.location.origin}/?r={accounts[0]}</span>
            </CopyToClipboard> <br/>
              {copied ? <span style={{color: '#FADA00'}}>Referral URL copied to clipboard.</span> : null}
           </p>
        </Col>
      </Row>
		);
}

export default HexMoney;

