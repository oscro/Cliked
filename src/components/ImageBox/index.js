import React, { Component } from "react";
import MemoryImages from "../../gameImages.json";
import "./style.css"

class ImageBox extends Component {

    state = {
        MemoryImages
    };

    render() {
        return (
            <div className="row">
            {this.state.MemoryImages.map(image => (
                <img 
                className="img-thumbnail rounded float-left col-6" 
                src={image.image} 
                alt=""
                />
            ))}
            </div>
        );
    };
}

export default ImageBox;