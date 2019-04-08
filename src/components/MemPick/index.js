import React, { Component } from "react";
import ImageBox from "../ImageBox";
import MemoryImages from "../../gameImages.json";
import "./style.css"

class MemPick extends Component {

    state = {
        MemoryImages,
        clicked: 0
    }

    // handleClick = event => {
    //     let click = this.state.clicked + 1;
        
    //     // event.target.data-clicked + 1;

    //     this.setState({
    //         clicked: click
    //     });

    //     console.log(this.state.clicked);

    // }

    render() {
        return (
            <div>
                <div className="container">
                <div className="row">
                    <ImageBox 
                    // clicked={this.state.clicked}
                    // onClick={() => this.handleClick()}
                    />
                </div>
                </div>
            </div>
        );

    }
}

export default MemPick;