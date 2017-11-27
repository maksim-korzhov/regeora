import React, { Component } from "react";
import Day from "./Day";

class Month extends Component {
    getLastDayOfMonth(year, month) {
        const date = new Date(year, month + 1, 0);
        return date.getDate();
    }

    _showEmptyDay(i) {
        return <div className="day" key={i}>&nbsp;</div>;
    }

    _showDays(currentDate) {
        const acc = [];
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        const currentDay= currentDate.getDate();

        const lastDay = this.getLastDayOfMonth(currentYear, currentMonth);
        const firstDayInWeek = new Date(currentYear, currentMonth, 1).getDay();
        const lastDayInWeek = new Date(currentYear, currentMonth, lastDay).getDay();

        // Show empty cells
        for( let i = 1; i < firstDayInWeek; i++ ) {
            acc.push(this._showEmptyDay(`empty_start_${currentYear}_${currentMonth}_${i}`));
        }

        console.log(currentDay);

        // Show days
        for( let i = 1; i <= lastDay; i++) {
            acc.push(
                <Day
                    key={i}
                    number={i}
                    isActive={i === currentDay}
                />
            );
        }

        // Show empty cells
        for( let i = lastDayInWeek; i < 7; i++ ) {
            acc.push(this._showEmptyDay(`empty_end_${currentYear}_${currentMonth}_${i}`));
        }

        return acc;
    }

    render() {
        const { currentDate } = this.props;

        return (
            <div className="month">
                {this._showDays(currentDate).map( day => day )}
            </div>
        );
    }
}

export default Month;