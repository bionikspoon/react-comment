import Footer from './Footer.react.js';
import Header from './Header.react.js';
import MainSection from './MainSection.react.js';
import React from'react';
import TodoStore from '../stores/TodoStore';

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
                <MainSection allTodos={this.state.allTodos}
                             areAllComplete={this.state.areAllComplete} />
                <Footer allTodos={this.state.allTodos} />
            </div>
        );
    },

    _onChange() {
        this.setState(getTodoState());
    }

});