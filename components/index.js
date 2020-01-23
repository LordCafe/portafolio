import React, {Component} from 'react';
import ReactDOM from  'react-dom';


var CustomBuild = new Event('build');
document.addEventListener("DOMContentLoaded", function(event) {
 	document.dispatchEvent(CustomBuild);
});
// Escucha para el evento.
document.addEventListener('build', function (e) {
  console.log("here my custom build ");
}, false);


class Root extends Component {
	render(){
		return (
			<h1> hola mundo desde react </h1>
		);
	}
}

let container = document.getElementById('app');
let component = <Root />;
ReactDOM.render(component, container);