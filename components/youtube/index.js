import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';


class Youtube extends Component {
    constructor(props) {
        super(props);
        this.thumbnails = [];
        this.createAListEvent = false;
        this.state = { videos: [], currentId: false, datavideo: {} };
    }

    componentDidMount() {
        window.addEventListener('Search', (e) => {
            this.createAListEvent = true;
            this.makeList(e.detail);
        });
    }

    makeList(list) {
        let thumbnails = Array.from(list).map((data, index) => {
            return this.thumbnail(data, data.snippet);
        });
        this.setState((state, props) => {
            return { videos: thumbnails };
        });
    }

    thumbnail(data, { thumbnails, title, description }) {
        return (
            <li class="thumbnail-video">
            <div class="thumbnail row ">
                <div class="flex-video widescreen col-6 ">
                <img src={thumbnails.medium.url } class="img-thumbnail"  alt="Responsive image" onClick={()=>{              
                     this.setState((state, props) => {                    
                     return { currentId: data.id.videoId , datavideo : data  };
                  });
                }}/>
                </div>
              <div class="caption col-6 description-list ">
                <span className={'title-video-list'}>{ title }</span>               
              </div>
            </div>
          </li>

        );
    }

    iframevideo(id) {        
        return (<iframe id="video-embed" class="embed-responsive-item" src={`https://www.youtube.com/embed/${id}`}
            ></iframe>);
    }

    componentDidUpdate(){
        let iframeVideo = document.querySelector("#searchYoutube");
        let ListVideos = document.querySelector(".list-search-youtube");

        if( iframeVideo && this.createAListEvent === false){           
            iframeVideo.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        }

        if(ListVideos && this.createAListEvent === true ){
            ListVideos.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
            this.createAListEvent = false;
        }
        
    }


    PlayerYoutube(idVideo = false, { snippet = {} }) {
        let PlayerYoutube = (this.state.currentId) ? this.iframevideo(this.state.currentId, this.state.datavideo) : '';
        let { title = '' } = snippet;
        let status = (idVideo) ? 'block' : 'none';
        return (
            <div class="container" style={{ display: status }}>                                   
                    <div class="embed-responsive embed-responsive-16by9">
                        {PlayerYoutube}                       
                    </div>
                     <span className={'title-video'}>{snippet.title}</span>
            </div>
        );
    }

    render() {
        return (
            <div class=" AppYoutube">
              <div class="row">
                   
                    <div class=" col-12  col-md-8">
                         {this.PlayerYoutube(this.state.currentId, this.state.datavideo)}    
                    </div>
                     <div class=" col-12 col-md-4">
                         <ul class="list-search-youtube">
                            { this.state.videos }           
                          </ul>    
                    </div>  
              </div>
            </div>


        )
    }
}

let container = document.getElementById('App');
let component = <Youtube />;
ReactDOM.render(component, container);