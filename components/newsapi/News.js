import React, { useState } from 'react';

let News = ({ title, content, author, url, urlToImage }) => {
    return (
        <div class='col-12 col-md-4 newsapi-card'>                
                <a href={ url } onClick={(e)=>{ 
                	e.preventDefault(); // Let's stop this event.
                	console.log(e)

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





export { News , NewsMayor };