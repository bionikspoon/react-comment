var TaskList = React.createClass({
    deleteTask: function (e) {
        console.log(e);
    },

    render: function () {
        var displayTask = (task, i) => <li onClick={this.deleteTask.bind(this,
            i)} key={i}>{task}</li>;

        return (
            <ul>
        {this.props.items.map(displayTask)}
            </ul>
        );
    }
});
