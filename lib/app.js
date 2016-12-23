const React=require('react');
const Frame=require('./components/frame');
const Main=require('./components/main');

const App=React.createClass({
    render:function(){
        return(<div>
            <Frame head={ <link type='text/css' rel='stylesheet' href='luantan.css' />}>
                <Main />
            </Frame>
        </div>);
    }
});


module.exports=App;