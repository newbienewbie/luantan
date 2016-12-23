const React=require('react');
const CommentList=require('./components/comment-list');

const App=React.createClass({
    render:function(){
        return(<div>
            <form> </form>
            <div>
                <CommentList />
            </div>
        </div>);
    }
});


module.exports=App;