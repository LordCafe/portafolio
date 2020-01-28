import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';


class Youtube extends Component {
    constructor(props) {
        super(props);
        this.thumbnails = [];
        this.state = { videos: [] };
    }

    componentDidMount() {
        window.addEventListener('Search', (e) => {
            this.makeList(e.detail);

        });
    }


    makeList(list) {

        let thumbnails = Array.from(list).map((data, index) => {
            return this.thumbnail(data.snippet);
        });
        this.setState((state, props) => {
            return { videos: thumbnails };
        });


    }

    messageError({ message }) {
        return (
            <div class="alert alert-danger" role="alert">
                <h4 class="alert-heading">Error</h4>
                <p>{message}</p>
                <p class="mb-0"></p>
            </div>

        );
    }

    thumbnail({ thumbnails, title, description }) {
        console.log( thumbnails );
        return (
            <li class="thumbnail-video">
            <div class="thumbnail">
                <div class="flex-video widescreen ">
                <img src={thumbnails.medium.url } class="img-thumbnail"  alt="Responsive image" />
                </div>
              <div class="caption">
                <h3>{ title }</h3>
                <p>{ description }</p>
                <p></p>
              </div>
            </div>
          </li>

        );
    }

    render() {
        return (
            <ul class="row list-search-youtube">
            { this.state.videos }
            </ul>
        )
    }
}

let container = document.getElementById('App');
let component = <Youtube />;
ReactDOM.render(component, container);