(function () {
  'use strict';
  var Avatar = React.createClass({
    getDefaultProps: function () {
      return {
        path: 'http://i.imgur.com/QAP8raD.png'
      }
    },
    render: function () {
      return (
        <div>
          <img src={this.props.path} />
        </div>
      );
    }
  });
  React.render(<Avatar path="http://i.imgur.com/OKdBI0h.jpg" />, document.body);
})();