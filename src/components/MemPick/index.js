import React, { Component } from "react";
import ImageBox from "../ImageBox";
import MemoryImages from "../../gameImages.json";
import "./style.css"


class MemPick extends Component {

    state = {
        // An array of keys
        keys: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    }

    // createIds = (MemoryImages) => {
    //     let arry = [];
    //     for (let i = 0; i < MemoryImages.length; i++) {
    //         arry.push(MemoryImages[i].id);
    //     }
    //     return arry;
    // }

    randomize = function (items) {
        // this.state.keys.sort(function (a, b) {
        //     return (0.5 - Math.random());
        // });
        return items[Math.floor(Math.random() * items.length)];
    }

    // iterator = function (arry) {

    //     for(let i = 0; i < arry.length; i ++) {
    //         {this.displayImage(MemoryImages, this.randomize(this.state.keys))}
    //     }

    // }

    displayImage = function (arry, key) { 
        return (
            <ImageBox
                src={arry[key].image}
            // clicked={this.state.clicked}
            // onClick={() => this.handleClick()}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                    {this.state.keys.map(keys => (
                    this.displayImage(MemoryImages, this.randomize(this.state.keys))
                    ))}
                    </div>
                </div>
            </div>
        );

    }
}

export default MemPick;