import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


let News = ({ title, content, author, url, urlToImage, click }) => {
    return (
        <div class='col-12 col-md-4 newsapi-card'>                
                <a href={ url } onClick={(e)=>{ 
                    e.preventDefault();
                    click();                    

                }} >
                    <div class="card newsapiImage ">
                      <img class="card-img-top " src={urlToImage} alt="Card image cap"/>
                          <div class="wrapper-title card-body transparency colorBlack"></div>
                          <h5 class="card-title newsapi-title">{title}</h5>
                    </div>
                </a>
        </div>

    );
}


let NewsMayor = ({ title, content, author, url, urlToImage }) => {
    return (
        <div class=' newsapi-card-mayor'>               
            <div class="card newsapiImage ">
                <img class="card-img-top " src={urlToImage} alt="Card image cap"/>                          
                <div class="wrapper-title card-body transparency colorBlack"></div>
                 <h5 class="card-title newsapi-title">{title}</h5>
            </div>
                
        </div>
    );
}


let disableOverlay = (event, setOverlay, updater) => {
    let { target: { dataset: { closed = false } } } = event;

    if (closed !== false) {
        updater(false, () => {
            console.log("update");
            setOverlay(false);
        });
    }else{
        console.log("No update", event.target );
    }
}


let BigNew = (props, setOverlay, updater) => {
    let { author, content, title, urlToImage, url, description } = props.state.CurrentNews;
    let disableBigNews = (event) => { 
        disableOverlay(event, setOverlay, updater);
    };
    return (
        <div id="overlay" class="container overlay ">
            <div class="row ">
                    <div class="col-12" align="center" data-closed={ true } onClick={disableBigNews}>                 
                        <div class="bigNew">                   
                        <div className={'row nav-bignews'}>                           
                            <div className={'col-8  btn-group author '}>
                                {author}
                            </div>

                            <div className={'col-2 btn-group '}>
                             
                            </div>

                            <div className={'col-1 btn-group '}>
                               <button type="button" class="btn btn-warning">X</button>
                            </div>
                         </div>                            
                            <div class="img-figure">                                                              
                                <div class="card  ">
                                    <img class="card-img-top bigNews-Img " src={urlToImage} alt="Card image cap"/>        
                                </div>
                            </div>

                            <div class="title">
                                <h1>{ title }</h1>
                            </div>
                            <p class="description">{ description }</p>
                            <div className={'col-8'}>{author}</div>
                            <p class="more">
                                <a href={ url }>read more</a><i class="fa fa-angle-right" aria-hidden="true"></i>
                               
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    );
}


function Page({ props, updater }) {
    const [StatusOverlay, setOverlay] = useState(false);
    let classEfect = 'effect-active dialog';
    if (props.state.showBigNews && StatusOverlay === false) {
        setOverlay(true);
    }
    return (
        <div  >
            <CSSTransition in={ StatusOverlay } 
                 timeout={ 350 }
                 classNames={ classEfect } 
                 data-status={ StatusOverlay }
                 onExited={(e) => e.classList.toggle("effect-active")}
             >
             {  BigNew( props, setOverlay, updater  ) }        
            </CSSTransition>     
        </div>
    );
}

export { News, NewsMayor, Page };