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

    _showDays(currentDate, activeDate,  eventsList) {
        const acc = [];
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();

        const activeDay = activeDate ? activeDate.getDate() : null;

        const lastDay = this.getLastDayOfMonth(currentYear, currentMonth);
        let firstDayInWeek = new Date(currentYear, currentMonth, 1).getDay();
        firstDayInWeek = firstDayInWeek === 0 ? 7 : firstDayInWeek;
        const lastDayInWeek = new Date(currentYear, currentMonth, lastDay).getDay();

        // Show empty cells
        for( let i = 1; i < firstDayInWeek; i++ ) {
            acc.push(this._showEmptyDay(`empty_start_${currentYear}_${currentMonth}_${i}`));
        }

        // Show days
        for( let i = 1; i <= lastDay; i++) {
            const key = `${currentYear}_${currentMonth}_${i}`;
            const hasEvents = !!eventsList[key] && eventsList[key].length > 0;

            acc.push(
                <Day
                    key={i}
                    number={i}
                    hasEvents={hasEvents}
                    isActive={i === activeDay}
                    onDayClick={this.props.onDayClick}
                />
            );
        }

        console.log(lastDayInWeek);

        // Show empty cells
        if( lastDayInWeek > 0 ) {
            for (let i = lastDayInWeek; i < 7; i++) {
                acc.push(this._showEmptyDay(`empty_end_${currentYear}_${currentMonth}_${i}`));
            }
        }

        return acc;
    }

    render() {
        const { eventsList, currentDate, activeDate } = this.props;

        return (
            <div className="month">
                {this._showDays(currentDate, activeDate, eventsList).map( day => day )}
            </div>
        );
    }
}

export default Month;