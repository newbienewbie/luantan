const React=require('react');
const Author=require('../../model/author');


const Form=React.createClass({
    getDefaultProps:function(){
        return {
            topicId:'',
            nonce:'',
        };
    },

    getInitialState:function(){
        return {
            parentId:'',
            message:'',
            authorName:'',
            authorEmail:'',
        };
    },

    handleChange:function(key,e){
        return (e)=>{
            const s={};
            s[key]=e.target.value;
            this.setState(s);
        };
    },

    render() {
        return (<div className='lt-form-wrapper'>
            <h2 className='lt-heading--2' ></h2>
            <form className='lt-form' onSubmit={e=>{
                e.preventDefault();
                console.log(this.state);
            }}>
                <input type="hidden" name="topicId" value={this.props.topicId} />
                <input type="hidden" name="nonce" value={this.props.nonce} />
                <input type="hidden" name="parentId" value={this.state.parentId} />
                <div className='lt-form__field' >
                    <textarea className='' 
                        name='message' placeholder='Your comment...' 
                        onChange={e=>{this.handleChange('message',e)(e);}}
                    />
                </div>
                <div className='lt-form__fields'>
                    <div className='lt-form__field' >
                        <input className='' type='text' name='name' placeholder='Name' onChange={e=>{this.handleChange('authorName',e)(e);}} />
                    </div>
                    <div className='lt-form__field'>
                        <input className='' type='email' name='email' placeholder='Email'onChange={e=>{this.handleChange('authorEmail',e)(e);}}/>
                    </div>
                    <div className=''>
                        <input className='button' type='submit' value='Submit comment'/>
                    </div>
                </div>
            </form>
        </div>);
    },

});


module.exports =Form;
