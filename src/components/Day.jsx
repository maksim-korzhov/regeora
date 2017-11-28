import React, { Component } from "react";

class Day extends Component {
    _onClickHandler() {
        this.props.onDayClick(this.props.number);
    }

    render() {
        const { isActive, hasEvents, number } = this.props;

        return (
            <div
                className={`day ${isActive ? "day--active" : ""} ${hasEvents ? "day--has-events" : ""}`}
                onClick={this._onClickHandler.bind(this)}
            >
                {number}
            </div>
        );
    }
}

export default Day;