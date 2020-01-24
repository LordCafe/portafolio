import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { DemoMessage , MessageChannel  } from './messageChat';




class Root extends Component {
    constructor(props) {
        super(props);
        this.chats = [];
        this.limit = 1;
        this.state = {
            chats: []
        }
    }

    componentDidMount() {
        this.OneChatDemo();
        let OneChat = this.OneChatDemo.bind(this);
        let self = this;
        window.addEventListener("chatDemo", function(e) {
            self.limit++;
            OneChat();
        });

    }

    OneChatDemo() {
        if (this.chats.length <= this.limit) {
            let status = ((this.chats.length % 2) == 0) ? 'in' : 'out';
            let MoreChat = this.OneChatDemo.bind(this);
            DemoMessage(status, MoreChat).then((demoChat) => {
                this.chats.push(demoChat);
                this.setState({ chats: this.chats });
            });
        }
    }


    componentDidUpdate(prevProps, prevState) {
          var messageBody = document.querySelector('#chat-demo-beacon')
    	.scrollTo(0, 1000);
    }

    render() {
        return (
            <ul id='chat-demo-beacon' class="chat-list chat-box-ul" >
            	{ this.state.chats }            		            
            </ul>
        );
    }
}

let container = document.getElementById('app');
let component = <Root />;
ReactDOM.render(component, container);