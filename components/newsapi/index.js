import React, { Component, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom';
import { News, NewsMayor, Page } from './News'

var key = "62d5413f833d4aa7808879f311bfeff7";
class NewsApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            News: [],
            controlButtons: false,
            'showBigNews': false,
            'CurrentNews':[]
        }

        this.democlick = 'DEMOCLICK';
    }

    ControlsStatusResquest() {
        let urlApiNewsApi = "https://newsapi.org/v2/top-headlines?country=us&apiKey=62d5413f833d4aa7808879f311bfeff7";
        this.setState((state, props) => {
            return { controlButtons: !this.state.controlButtons };
        })
        fetch(urlApiNewsApi).then((server) => {
            return server.json();
        }).then((data) => {
            return data.articles.map((data, index) => {
                data.click = () => {
                    this.setState((state, props) => {
                        return { 'showBigNews': true , currrentNews: data };
                    });
                }
                return <News {...data} />

            });
        }).then((news) => {
            this.setState((state, props) => {
                return { News: news, controlButtons: !this.state.controlButtons };
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
                    <button 
                        type="button" 
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
             <Page { ...this.state } />
            </div>
        )
    }
}

let container = document.getElementById('App');
let component = <NewsApi />;
ReactDOM.render(component, container);