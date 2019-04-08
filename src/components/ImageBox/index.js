import React, { Component } from "react";
import MemoryImages from "../../gameImages.json";
import "./style.css"

class ImageBox extends Component {

    state = {
        MemoryImages,
        clicked: 0 
    };

    handleClick = (event, array) => {
        let click = this.state.clicked + 1;
        
        // event.target.data-clicked + 1;

        this.setState({
            clicked: click
        });

        // ()=>image.image.clicked = image.image.clicked + 1)

        console.log(this.state.clicked);

    }

    randomize = function (array) {
        
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        
        console.log(array);
        this.setState({ MemoryImages: array });
    };
    // {this.randomize(this.state.MemoryImages)}
    

render() {
    
    return (
        <div>
            {this.state.MemoryImages.map(image => (
                <div 
                onClick={() => this.handleClick()}
                >
                <img
                    className="img-thumbnail rounded float-left col-6"
                    src={image.image}
                    alt=""
                    data-clicked={this.props.clicked}
                    onClick={()=>this.randomize(this.state.MemoryImages)}
                />
                </div>
            ))}
        </div>
    );
};
}



export default ImageBox;