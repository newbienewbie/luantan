const React=require('react');
const CommentList=require('./comment-list');
const Form=require('./form');

const Index=React.createClass({
    getDefaultProps:function(){
        return {
            discussionURL:'localhost/ss',
        };
    },
    render:function(){
        return(<div>
            <Form />
            <div>
                <CommentList discussionURL={this.props.discussionURL} />
            </div>
        </div>);
    }
});


module.exports=Index;