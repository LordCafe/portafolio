import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';

var key ="62d5413f833d4aa7808879f311bfeff7";
class NewsApi extends Component {
    constructor(props) {
        super(props);
       
    }

    componentDidMount() {        
    }  

    componentDidUpdate() {
    
    }


    
    render() {
  
        return (
            <div class="NewsApi">
             <a class="btn btn-primary" target="_blanck" href="https://newsapi.org/" role="button">powered by NewsAPI.org</a>
            </div>
        )
    }
}

let container = document.getElementById('App');
let component = <NewsApi />;
ReactDOM.render(component, container);