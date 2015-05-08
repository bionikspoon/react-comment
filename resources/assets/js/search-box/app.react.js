import React from 'react';

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 5};
        this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount() {
        this.setState({
            count: this.state.count + 1
        });
    }

;

    render() {

        return (
            <div>
                <h1>Hello, {this.props.name}!</h1>

                <p>Count: {this.state.count}</p>
                <button onClick={this.incrementCount}>Increment</button>
            </div>

        );

    }
}
Hello.defaultProps = {name: "Mandy"};
Hello.propTypes = {name: React.PropTypes.string};


class FilteredList extends React.Component {
    constructor(props) {
        super(props);
        this.filterList = this.filterList.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.state = {
            initialItems: [
                "Apples",
                "Broccoli",
                "Chicken",
                "Duck",
                "Eggs",
                "Fish",
                "Granola",
                "Hash Browns"
            ],
            items:        []
        }
    }
    componentWillMount() {
        this.setState({items: this.state.initialItems});
    }

    filterList(e) {
        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function (item) {
            return item.toLowerCase().search(e.target.value.toLowerCase())
                !== -1;
        });
        this.setState({items: updatedList});

    }

    render() {
        return (
            <div className='filtered-list'>
                <input type="text"
                       placeholder="Search"
                       onChange={this.filterList} />
                <List items={this.state.items} />
            </div>
        );
    }
}


class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {
                    this.props.items.map(function (item) {
                        return (
                            <li key={item}>{item}</li>
                        );
                    })
                }
            </ul>
        );
    }
}
List.defaultProps = {};
List.propTypes = {};


React.render(<Hello />, document.getElementById('hello'));
React.render(<FilteredList />, document.getElementById('filtered-list'));