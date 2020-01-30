import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';

var key = "62d5413f833d4aa7808879f311bfeff7";
class NewsApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            News: [],
            controlButtons: false,
        }
    }

    componentDidMount() {
       
    }

    componentDidUpdate() {

    }

    OneNews({ title, content, author, url, urlToImage }) {
        return (
            <div class='col-12 col-md-4 newsapi-card'>    
            
                <a href={ url } >

                <div class="card newsapiImage ">
                  <img class="card-img-top " src={urlToImage} alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title newsapi-title">{title}</h5>
                  </div>
                </div>
            </a>

        </div>

        );
    }

    allNews() {
        let demo = Array.from({ length: 6 }, () => this.OneNews());
        this.setState((state, props) => {
            return { News: demo };
        });
    }

    ControlsStatusResquest() {

        this.setState((state, props) => {
            return { controlButtons: !this.state.controlButtons };
        })


        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=62d5413f833d4aa7808879f311bfeff7").then((server) => {
            return server.json();

        }).then((data) => {
            return data.articles.map((data, index) => {
                return this.OneNews( data  );
            })

        }).then(( news )=>{

            this.setState((state, props) => {
                    return { News: news , controlButtons: !this.state.controlButtons   };
            });

        });

    }


    render() {
        let Loading = (this.state.controlButtons) ? 'block' : 'none';
        let Buttons = (!this.state.controlButtons) ? 'block' : 'none';
        let controsl = this.ControlsStatusResquest.bind(this);
        return (
            <div class="NewsApi">
            <div class=" NewsApi-buttons">
                <a class="btn btn-primary" target="_blanck" href="https://newsapi.org/" role="button">powered by NewsAPI.org</a>
                <button type="button" 
                class="btn btn-warning"
                style={{ display:  Buttons }} 
                onClick={controsl}
                >Solicitar noticías</button>


                <div class="spinner-grow" style={{width: "3rem", height: "3rem", display: Loading }} role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>   
                <div className={'row'}>
                    {this.state.News}
                </div>
             
            </div>
        )
    }
}

let container = document.getElementById('App');
let component = <NewsApi />;
ReactDOM.render(component, container);