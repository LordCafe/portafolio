import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
let News = ({ title, content, author, url, urlToImage, click  }) => {
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



let BigNew= ({author,content,title,urlToImage, url, description }) => {

    return (
        <div class="container">
			<div class="row">
				    <div class="col-sm-4">
						<div class="news">
							<div class="img-figure">
								<div class="cat">{author}</div>
								<div class="card  ">
						                <img class="card-img-top " src={urlToImage} alt="Card image cap"/>                    
					
            					</div>
							</div>	

							<div class="title">
								<h1>{ title }</h1>
							</div>
							<p class="description">
							 		{ description }
							</p>

							<p class="more">
								<a href={ url }>read more</a><i class="fa fa-angle-right" aria-hidden="true"></i>
							</p>
						</div>


					</div>
			</div>
		</div>
    );
}


function Page( {showBigNews, currrentNews = {}} ) {
    const [inProp, setInProp] = useState(false);
    let classEfect =  'pageSliderLeft';
    return (
        <div className={'demo-position'}>
      <CSSTransition in={inProp} timeout={200} classNames={ classEfect }>
			{BigNew(currrentNews)}        
      </CSSTransition>
      <button type="button" onClick={() => setInProp(!inProp)}>
        Click to Enter
      </button>
    </div>
    );
}

export { News, NewsMayor, Page };