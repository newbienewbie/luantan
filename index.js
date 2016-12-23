const React=require('react');
const ReactDOM=require('react-dom');
const App=require('./lib/app');


(function(){
    // mock comments list
    const comments=[
        {name:'name1',email:'email1@email',text:'hello,world',timestamp:new Date()},
        {name:'name2',email:'email2@email',text:'fuck,world',timestamp:new Date()},
    ] ;
    localStorage.setItem('localhost/ss',JSON.stringify(comments))

})();

ReactDOM.render( <App/>, document.getElementById("luantan") );