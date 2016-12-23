const React=require('react');
const Frame=require('./components/frame');
const Main=require('./components/main');

const App=React.createClass({
    render:function(){
        return(<Frame head={ <link type='text/css' rel='stylesheet' href='luantan.css' />}>
            <Main />
        </Frame>);
    }
});


module.exports=App;