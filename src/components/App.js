import React, { Component } from "react";
import Calendar from "react-calendar";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
        };
    }

    onDateChange(e) {
        console.log(e);
    }

    render() {
        return (
            <div>
                <Calendar
                    onChange={this.onDateChange}
                    value={this.state.date}
                />
            </div>
        );
    }
}

export default App;