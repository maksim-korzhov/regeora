import React, { Component } from "react";

class Day extends Component {
    render() {
        const { isActive } = this.props;

        return (
            <div className={`day ${isActive ? "day--active" : ""}`}>
                <span>{this.props.number}</span>
            </div>
        );
    }
}

export default Day;