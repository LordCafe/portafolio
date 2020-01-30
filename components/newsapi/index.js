import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';

var key = "62d5413f833d4aa7808879f311bfeff7";
class NewsApi extends Component {
    constructor(props) {
        super(props);
        this.state ={
            News: []
        }

    }

    componentDidMount() {
        this.allNews();
    }

    componentDidUpdate() {

    }

    OneNews() {
        return (
            <div class="card">
                <img class="card-img-top" src="https://images.pexels.com/photos/3363331/pexels-photo-3363331.jpeg?cs=srgb&dl=light-house-on-hill-3363331.jpg&fm=jpg" alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
        </div>

        );
    }

    allNews(){

          let demo =   Array.from({length: 5}, () => this.OneNews());         
           this.setState((state, props) => {
                return { News: demo  };
            });
    }



    render() {

        return (
            <div class="NewsApi">
            <div className={'row'}>
                {this.state.News}
            </div>
             <a class="btn btn-primary" target="_blanck" href="https://newsapi.org/" role="button">powered by NewsAPI.org</a>
            </div>
        )
    }
}

let container = document.getElementById('App');
let component = <NewsApi />;
ReactDOM.render(component, container);