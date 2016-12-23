const React=require('react');
const CommentList=require('./components/comment-list');

const App=React.createClass({
    render:function(){
        return(<div>
            <form> </form>
            <div>
                <CommentList discussionURL="localhost/ss" />
            </div>
        </div>);
    }
});


module.exports=App;