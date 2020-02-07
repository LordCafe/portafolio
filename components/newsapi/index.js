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
            'CurrentNews': []
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
            let time = 500;
            return data.articles.map((data, index) => {
                data.click = () => {
                    this.setState((state, props) => {
                        return { 'showBigNews': true, CurrentNews: data };
                    });
                }
                time = time + 50;
                return  <CSSTransition key={index} timeout={time} classNames="item">
                            <News {...data} />
                        </CSSTransition>
                 
            });
        }).then((news) => {
            this.setState((state, props) => {
                return { News: news, controlButtons: !this.state.controlButtons };
            });
        });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.showBigNews, 'Show big ');
    }


    SetBigNews(status = false, callback = () => {}) {
        this.setState((state, props) => {
            return { 'showBigNews': status };
        }, callback);
    }
    
    Loading(){
     
        return( 
                <div class="spinner-grow customSpiner" role="status">
                        <span class="sr-only">Loading...</span>
                </div>
            );
    }
    buttonApi() { 
        let Buttons = (!this.state.controlButtons) ? 'Solicitar noticias': this.Loading();
        let controsl = this.ControlsStatusResquest.bind(this);
        return (
            <div className={'NewsApi-buttons'}>                   
                    <button 
                        type="button" 
                        class="btn"
                        style={{  color: "#61dafb",'border-color': "#61dafb"} } 
                        onClick={controsl}
                    >                  
                     {Buttons}
                    </button>

                    <button 
                        type="button" 
                        class="btn"
                        style={{  color: "#61dafb",'border-color': "#61dafb"} } 
                        onClick={()=>{
                            this.setState((state, props) => {
                                    return { News:[]};
                            });
                        }}
                    >                  
                    Clean 
                    </button>                               
                     <a target="_blanck" href="https://newsapi.org/" role="button">powered by NewsAPI.org</a>
                </div>
        );
    }
    render() {

        return (
            <div class="NewsApi">
                <div className={'region-buttons '}>
                    {this.buttonApi()}
                </div>
         
                <TransitionGroup className="todo-list  row">
                    {this.state.News}
                 </TransitionGroup>    
            
             <Page props={this} updater={this.SetBigNews.bind(this)}  />
            </div>
        )
    }
}

let container = document.getElementById('App');
let component = <NewsApi />;
ReactDOM.render(component, container);