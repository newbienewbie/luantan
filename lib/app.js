const React=require('react');
const CommentList=require('./components/comment-list');
const Form=require('./components/form');

const App=React.createClass({
    render:function(){
        return(<div>
            <Form />
            <div>
                <CommentList discussionURL="localhost/ss" />
            </div>
        </div>);
    }
});


module.exports=App;