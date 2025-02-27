var React = require('react');

/*var Comment = React.createClass({
  render: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
        <hr />
      </div>
    );
  }
});*/
class Comment extends React.Component {
   render() {
       var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
          return (
            <div className="comment">
              <h2 className="commentAuthor">
                {this.props.author}
              </h2>
              <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
              <hr />
            </div>
          );
   }
}

module.exports = Comment;
