const React=require('react');
const Author=require('../model/author');
const Comment=require('./comment.js');


const fetch=(topic)=>{
    return new Promise(function(resolve,reject){
        var rawComments = localStorage.getItem(topic) || '[]';
        resolve(JSON.parse(rawComments));
    });
};

const CommentList=React.createClass({
    getDefaultProps:function(){
        return {
            discussionURL:'',
            fetch:fetch,
        };
    },

    getInitialState:function(){
        return {
            comments:[
                {name:'',email:'',text:'',timestamp:''},
            ],
        };
    },

    componentDidMount:function(){
        fetch(this.props.discussionURL)
            .then(comments=>{
                this.setState({comments});
            })
    },

    render() {
        // todo:将来要分页
        var comments = this.state.comments.slice();
        return (<div>
            {comments.map(i=>{
                const author=new Author(i.name,i.email);
                return <Comment author={author} text={i.text} timestamp={i.timestamp} />;
            })}
        </div>);
    },

});


module.exports = CommentList;
