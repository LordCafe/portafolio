import React, { Component, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom';
import { NewsApiResquest, NewsArticle, ModalPop } from './News';

class NewsApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            News: [],
            CurrentNews: [],
            showModal: false,
           
        };
        this.range = 4;
        this.AllNews = [];
    }

    CreateNews(item, index ) {
        return <CSSTransition key={index} timeout={500} classNames="item">
                    <div className={` col-12 col-sm-${this.range }`}>
                        <NewsArticle {...item }  updater={this.UpdateCurrentNews.bind(this)}  />
                    </div>
                 </CSSTransition>
    }

    UpdateNews(news = []) {
        this.setState((state, props) => {
            return { News: news };
        });
    }
    UpdateCurrentNews(news, status) {
        this.setState((state, props) => {
            return { CurrentNews: news, showModal: status };
        });
    }

    ResquestApi(e) {
        NewsApiResquest().then((data) => {
            return data.articles;
        }).then((infoApi) => {
            this.AllNews = infoApi;
            return this.AllNews.map(this.CreateNews.bind(this));
        }).then(this.UpdateNews.bind(this))
    }

    componentDidUpdate(prevProps, prevState = {}, snapshot) {

    }

    updateRange(e){
        this.range = e.target.value;

        this.setState((state, props )=>{            
            return{ News : this.AllNews.map(this.CreateNews.bind(this))}
        })
       
    }


    render() {
        return (
            <div className={"NewsApi"}>
               <ModalPop Current={this.state.CurrentNews } showModal={this.state.showModal } control={this.UpdateCurrentNews.bind(this)} />
                <div className={'region-buttons'}>                
                    <button type="button" class="btn " onClick={ this.ResquestApi.bind(this)} >Resquest On Api News </button> 
                    <button type="button" class="btn " onClick={()=>{ this.UpdateNews([])}}>Clean all news</button>
                    <div class="slidecontainer">
                       <label className={"font-Quick"} for="myRange">Numeros de columnas : {  (12 / this.range).toFixed(2)  }</label>                
                       <input type="range" onChange={this.updateRange.bind(this)} min="1" max="12"  value={this.range } class="slider" id="myRange" />
                                  
                    </div>
                   
                             
                </div> 
                             
                <TransitionGroup className={"todo-list  row"}>
                    {this.state.News}
                </TransitionGroup>
            </div>
        )
    }
}

let container = document.getElementById('App');
let component = <NewsApi />;
ReactDOM.render(component, container);