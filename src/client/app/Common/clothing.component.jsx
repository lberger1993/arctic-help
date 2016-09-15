import React, { Component } from 'react';




class Clothing extends Component {
    render(){
    	const clothing_data = this.props.route.data;

        return (	<div> 
        			<h1> Clothing table goes here  </h1>
        			<button> Children  </button> 
        			<button> Adult 	</button>  
        			<li key = {clothing_data.name}></li>
        			</div>
        	);
    }
}

export default Clothing