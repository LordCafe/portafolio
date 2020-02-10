import React, { useState, useEffect  } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {Modal , Button } from 'react-bootstrap'

let NewsApiResquest = ()=>{
    let urlApiNewsApi = "https://newsapi.org/v2/top-headlines?country=us&apiKey=62d5413f833d4aa7808879f311bfeff7";
    return fetch(urlApiNewsApi).then((response)=>{
        return response.json()
    });
}

let NewsArticle =( props )=>{
    let {title, description, url, urlToImage , updater = ()=>{}} = props;
    let [ show , StatusShow ]  = useState(false );
    return(
        <div class="card" style={{ color: "black"}}>
            <img class="card-img-top" src={urlToImage} alt="Card image cap" onClick={ ()=> updater(props, true) } />
            <div class="card-body">
                <h5  style={{'font-size': '15px'}} class="card-title font-Quick ">{title}</h5>
                <p style={{ display: (show=== true )?'block': 'none'}} class="card-text font-Quick ">{ description }</p>
                <a href={ url } class="btn btn-primary">read more </a>
                 <a  class="btn btn-primary" onClick={()=>{ StatusShow( !show   ); }}>see </a>
            </div>              
        </div>    
    );
}

function ModalPop( {Current = false , showModal = false, control   } ) {  
  const [show, setShow] = useState( showModal );
  const handleClose = () => { setShow(false); control([], false )}
  const handleShow = () =>{ setShow(true); }
  useEffect((  )=>{
    if(showModal){
      handleShow();  
    }
    
  },[showModal])  

  return (
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title className={'title-modal-show font-Quick'} >{Current.title }</Modal.Title>
        </Modal.Header>
        <Modal.Body>            
           {NewsArticle( Current )} 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
     );
}

export { NewsApiResquest, NewsArticle , ModalPop  };