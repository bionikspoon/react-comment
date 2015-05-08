var Footer = require('./Footer.react.js');
var Header = require('./Header.react.js');
var MainSection = require('./MainSection.react.js');
import React from'react';
var TodoStore = require('../stores/TodoStore');

function getTodoState() {
    return {
        allTodos:       TodoStore.getAll(),
        areAllComplete: TodoStore.areAllComplete()
    };
}

export default React.createClass({

    getInitialState() {
        return getTodoState();
    },

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        TodoStore.removeChangeListener(this._onChange);
    },

    render() {
        return (
            <div>
                <Header />
                <MainSection
                    allTodos={this.state.allTodos}
                    areAllComplete={this.state.areAllComplete}
                />
                <Footer allTodos={this.state.allTodos} />
            </div>
        );
    },

    _onChange() {
        this.setState(getTodoState());
    }

});