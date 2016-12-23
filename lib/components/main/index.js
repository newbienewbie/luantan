const React=require('react');
const CommentList=require('./comment-list');
const Form=require('./form');

const Index=React.createClass({
    render:function(){
        return(<div>
            <Form />
            <div>
                <CommentList discussionURL="localhost/ss" />
            </div>
        </div>);
    }
});


module.exports=Index;