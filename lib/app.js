const React=require('react');
const CommentList=require('./components/comment-list');
const Form=require('./components/form');
const Frame=require('./components/frame');

const App=React.createClass({
    render:function(){
        return(<div>
            <Frame>
                <div>
                    <Form />
                    <div>
                        <CommentList discussionURL="localhost/ss" />
                    </div>
                </div>
            </Frame>
        </div>);
    }
});


module.exports=App;