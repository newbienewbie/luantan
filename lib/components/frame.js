const React = require('react');
const ReactDOM = require('react-dom');

/**
 * create an <iframe/> element
 */
const Frame = React.createClass({

    getDefaultStyle(){
        return {
            width :'100%',
            height :'916px',
            overflow :'hidden',
            border :"none",
            opacity :0,
            transition :"opacity .5s",
        };
    },

    getInitialState:function(){
        return {
            style:this.getDefaultStyle(),
        };
    },

    componentDidMount:function(){

        this.renderFrameContents();

        // set iframe style
        const style=this.getDefaultStyle();
        style.opacity=1;
        this.setState({style});
    },

    renderFrameContents:function(){
        var doc=ReactDOM.findDOMNode(this).contentDocument;
        if (doc.readyState === 'complete') {
            var contents = (<div> 
                &shy;{this.props.head}
                {this.props.children}
            </div>);
            ReactDOM.render(contents, doc.body);
        } else {
            setTimeout(() => { this.renderFrameContents(); }, 0);
        }
    },

    componentDidUpdate:function(){
        this.renderFrameContents();
    },

    componentWillUnmount:function(){
        React.unmountComponentAtNode(this.getDOMNode().contentDocument.body);
    },

    render: function(){
        return <iframe style={this.state.style} />;
    },
});

module.exports=Frame;