import React, { Component } from "react";

class EventsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ""
        };
    }

    _renderEvent(event, i) {
        return <li key={i} className="events-list__item">{event} <span className="remove" >X</span></li>;
    }

    _renderAllEvents(eventsList) {
        if( Object.keys(eventsList).length === 0 ) {
            return <div className="events-list">Событий нет</div>;
        }

        return eventsList.map( (event, i) => this._renderEvent(event, i) );
    }

    _onChangeHandler(e) {
        this.setState({
            input: e.target.value
        });
    }

    _onSubmitHandler(e) {
        e.preventDefault();

        if( this.state.input ) {
            this.props.addNewEvent(this.state.input);
        }

        this.setState({
            input: ""
        });
    }

    render() {
        const { eventsList } = this.props;

        return (
            <div className="events-list">
                <ul className="events-list__items">
                    {this._renderAllEvents(eventsList)}
                </ul>
                <form className="events-list__form" onSubmit={this._onSubmitHandler.bind(this)}>
                    <input className="events-list__add" value={this.state.input} onChange={this._onChangeHandler.bind(this)} />
                    <button>Добавить</button>
                </form>
            </div>
        );
    }
}

export default EventsList;