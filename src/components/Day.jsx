import React, { Component } from "react";

class Day extends Component {
    _onClickHandler() {
        this.props.onDayClick(this.props.number);
    }

    render() {
        const { isActive, number } = this.props;

        return (
            <div className={`day ${isActive ? "day--active" : ""}`}>
                <span onClick={this._onClickHandler.bind(this)}>{number}</span>
            </div>
        );
    }
}

export default Day;