import { Component } from "react";

function Display(props) {
    return (
        <div className="display">
            {props.state}
        </div>
    )
}

export default Display