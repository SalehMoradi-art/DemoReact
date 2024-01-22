import React from 'react';

class Car extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            brand: "Ford", 
            model: "Mustang", 
            color: "Red", 
        }
        
    }
    changColor = () => {
        document.body.classList.toggle('dark');
    }
    render() {
        return(
            <div>
                <h2>i have {this.state.brand}</h2>
                <p>it is {this.state.model} model and {this.state.color}</p>
                <button type="button" onClick={this.changColor} >Change color</button>
            </div>
        );
    }
}
export default Car;
