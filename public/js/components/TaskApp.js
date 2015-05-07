var TaskApp = React.createClass({
    getInitialState: function () {
        return {
            items: [
                'Go to store',
                'Hello'
            ],
            task:  ""
        };
    },

    onChange: function (e) {
        var task = e.target.value;
        this.setState({task});
    },

    addTask: function (e) {
        var items = this.state.items.concat([this.state.task]);
        var task = "";
        this.setState({
            items,
            task
        });
        e.preventDefault();

    },

    deleteTask: function (e) {
        alert(e);
    },


    render: function () {
        return (
            <div>
                <h1>My Tasks</h1>
                <TaskList items={this.state.items} />
                <form onSubmit={this.addTask}>
                    <input onChange={this.onChange} value={this.state.task} />
                    <button>Add Task</button>

                </form>
            </div>
        );
    }
});
React.render(<TaskApp />, document.body);