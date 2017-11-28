import React, { Component } from "react";

class Day extends Component {
    _onClickHandler() {
        this.props.onDayClick(this.props.number);
    }

    render() {
        const { isActive, hasEvents, number } = this.props;

        console.log(number, hasEvents);

        return (
            <div className={`day ${isActive ? "day--active" : ""} ${hasEvents ? "day--has-events" : ""}`}>
                <span onClick={this._onClickHandler.bind(this)}>{number}</span>
            </div>
        );
    }
}

export default Day;