const React=require('react');
const Author=require('../../model/author');
const Comment=require('./comment');


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
            {comments.map((c,idx)=>{
                const author=new Author(c.name,c.email);
                return <Comment key={idx} author={author} text={c.text} timestamp={c.timestamp} />;
            })}
        </div>);
    },

});


module.exports = CommentList;
