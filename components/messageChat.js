import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Container, Button, Alert } from 'react-bootstrap';

let imgIn = "https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
let imgOut = "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light";

function GetBaccon() {
    return fetch('https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1').then((response) => {
        return response.json();
    });
}

function scroll() {

    var messageBody = document.querySelector('#chat-demo-beacon')
    .scrollTo(0, 1000);
    //messageBody.scrollTop = messageBody.scrollHeight;

}

let MessageChannel = ({ status = 'in', demo, message }) => {
    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    let imgAvatar = (status == 'in') ? imgIn : imgOut;
    let nameUser = (status == 'in') ? 'Jimmy Williams' : 'Jenny anna';
    let position = (status == 'in') ? 'float-left' : 'float-right';   
    setTimeout(() => {
        setShowMessage(true);
    }, 1500);
    return (
        <Container style={{ paddingTop: '2rem' }}>
      {showButton && ( 
         <div className={ position }  >
          <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
     </div>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onEntered ={()=>{
          demo();
          scroll();
        }}
        onExited={() =>{
          setShowButton(true); 
        }}
      >
        <li className={ status }  >
        <div  onClick={ ()=>{ setShowMessage( false ); }} >                  
              <div class="chat-img">              
                  <img alt="Avtar" src={ imgAvatar } />
               </div>
                    
              <div className="chat-body">
                  <div className="chat-message">
                      <h5>{nameUser}</h5>
                      <p>{message}</p>
                  </div>
              </div>
              </div>
           </li>        
      </CSSTransition>
    </Container>
    );
}


let DemoMessage = ((status = 'in', demo) => {
    return GetBaccon().then((message) => {
        return <MessageChannel  status ={status} demo={ demo } message={ message  } />
    });
});


export { DemoMessage , MessageChannel  };