const md5 = require('md5');
const React=require('react');

const Comment=React.createClass({

    getDefaultProps:function(){
        return {
            author:{'name':'',email:'',gravatar:''},
            text:'',
            timestamp:new Date(),
        };
    },
    
    getInitialState:function(){
        return{
            errors:[],
        };
    },


    validate() {
        this.errors = this.author.validate();
        if (!this.text) {
            this.errors.push({
                field: 'text',
                message: 'Please enter text'
            });
        }
        return this.errors.length ? false : true;
    },

    _renderDate(timestamp) {
        const date = new Date(timestamp);
        return date.toDateString() + ' at ' + date.getHours() + ':' + date.getMinutes();
    },


    render() {
        return (<div className='lt-comment'>
            <div className='lt-comment__avatar'>
                <img src={this.props.author.gravatar}/>
            </div>
            <div className='lt-comment__body'>
                <h4 className=''>{this.props.author.name}
                    <small> on {this._renderDate(this.props.timestamp)} </small>
                </h4>
                <p className=''>{this.props.text}</p>
            </div>
        </div>);
    }

});


module.exports = Comment;
