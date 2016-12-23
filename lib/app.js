const React=require('react');
const Frame=require('./components/frame');
const Main=require('./components/main');

const App=React.createClass({
    render:function(){
        return(<div>
            <Frame>
                <Main />
            </Frame>
        </div>);
    }
});


module.exports=App;