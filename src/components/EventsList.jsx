import React, { Component } from "react";

class EventsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ""
        };
    }

    _renderEvent(event, i) {
        return <li key={i} className="events-list__item">{event} <span className="remove" onClick={this._onDeleteHandler.bind(this, i)}>[X]</span></li>;
    }

    _renderAllEvents(eventsList) {
        if( Object.keys(eventsList).length === 0 ) {
            return <div className="no-events">Событий нет</div>;
        }

        return (
            <ol className="events-list__items">
                {eventsList.map( (event, i) => this._renderEvent(event, i) )}
            </ol>
        );
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

    _onDeleteHandler(e, i) {
        this.props.removeEvent(i)
    }

    render() {
        const { eventsList } = this.props;

        return (
            <div className="events-list">
                <strong>Список событий</strong>
                <hr/>
                 {this._renderAllEvents(eventsList)}

                <form className="events-list__form" onSubmit={this._onSubmitHandler.bind(this)}>
                    <input className="events-list__add" value={this.state.input} onChange={this._onChangeHandler.bind(this)} />
                    <button>Добавить</button>
                </form>
            </div>
        );
    }
}

export default EventsList;