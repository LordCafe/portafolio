import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';


class Youtube extends Component {


	componentDidMount(){

		window.addEventListener('SEarch');
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

    thumbnail({thumbnail, title , description }) {
        return (
            <li class="col-lg-3 col-sm-4 col-xs-6">
		<a href="#" title={title }>
			<img src={ thumbnail.default.url} alt="Barca" class="img-responsive"  />
			<h2>{title}</h2>
			<span class="glyphicon glyphicon-play-circle"></span>
			<span class="duration">03:15</span>
		</a>
	</li>

        );
    }

    render() {
        return (
            <ul class="list-unstyled video-list-thumbs row">
	
	
</ul>
        )
    }
}

let container = document.getElementById('App');
let component = <Youtube />;
ReactDOM.render(component, container);