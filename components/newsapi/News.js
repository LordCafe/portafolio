import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


let News = ({ title, content, author, url, urlToImage, click }) => {
    let action =(e)=>{
         e.preventDefault();
         click();
     };


    return (
        <div class='col-12 col-md-4 newscard '  style={{ display: 'inline-block'}} >                
                <a href={ url } onClick={  action }  >
                    <div >                      
                        <div class="wrapper-title card-body transparency colorBlack"></div>
                         <span class="card-title newsapi-title">{title}</span>                       
                    </div>
                </a>
        </div>

    );
}


let NewsMayor = ({ title, content, author, url, urlToImage }) => {
    return (
        <div class=' newsapi-card-mayor shadow-none '>               
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
let realContent =(author, disableBigNews )=>{
    return(
            <div className={'row nav-bignews'}>
                <div className={'col-10  author '}>{author}</div>
                <div className={'col-2 btn-group '}>
                    <button type="button" class="btn btn-warning"  data-closed={ true } onClick={disableBigNews} >X</button>
                </div>                                         
            </div>
    );
}

let BigNew = (props, setOverlay, updater) => {
    let { author, content, title, urlToImage, url, description } = props.state.CurrentNews;
    let disableBigNews = (event) => { 
        disableOverlay(event, setOverlay, updater);
    };
    return (
        <div id="overlay" class="container overlay ">
            <div className={'row big-news'}>
                    <div className={'col-12'} data-closed={ true } onClick={disableBigNews}>                 
                        <div class="bigNew">
                        {realContent(author, disableBigNews)}
                        <div class="img-figure">                                                              
                            <div class="card  ">
                                <img class="card-img-top bigNews-Img " src={urlToImage} alt="Card image cap"/>        
                            </div>
                        </div>

                        <div>
                            <div className={'title-article'}>{ title }</div>
                            <div className={"description"}><p>{ description }</p></div>
                        </div>
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

    let beginEffect = (e)=>{
         document.documentElement.style.overflow = 'hidden';
    }

    let removeEfectt = (e)=>{
        e.classList.toggle("effect-active");
         document.documentElement.style.overflow = 'auto'; 
    }
    return (
        <div  >
            <CSSTransition in={ StatusOverlay } 
                 timeout={ 350 }
                 classNames={ classEfect } 
                 data-status={ StatusOverlay }
                 onEntered={ beginEffect}
                 onExited={ removeEfectt }
             >
             {  BigNew( props, setOverlay, updater  ) }        
            </CSSTransition>     
        </div>
    );
}

export { News, NewsMayor, Page };