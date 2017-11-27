import React, { Component } from "react";
import Month from "./Month";

class Calendar extends Component {
    constructor(props) {
        super(props);

        const currentDate = new Date();

        this.state = {
            currentDate: currentDate,
        };
    }

    _addMonth(numberOfMonth) {
        const newDate = new Date(this.state.currentDate);
        newDate.setMonth(this.state.currentDate.getMonth() + numberOfMonth);
        newDate.setDate(1);

        this.setState({
            currentDate: newDate
        });
    }

    _getCurrentMonthName() {
        const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
        ];
        const monthNumber = this.state.currentDate.getMonth();

        return monthNames[monthNumber];
    }

    _setCurrentDay(day) {
        const newDate = new Date(this.state.currentDate);
        newDate.setDate(day);

        this.setState({
            currentDate: newDate
        });
    }

    render() {
        return (
            <div>
                Calendar
                <div className="calendar">
                    <div className="calendar__nav">
                        <div className="calendar__arr calendar__arr--prev" onClick={this._addMonth.bind(this, -1)}>prev</div>
                        <div className="calendar__current">{this._getCurrentMonthName()}</div>
                        <div className="calendar__arr calendar__arr--next" onClick={this._addMonth.bind(this, 1)}>next</div>
                    </div>
                    <Month
                        currentDate={this.state.currentDate}
                        onDayClick={this._setCurrentDay.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

export default Calendar;