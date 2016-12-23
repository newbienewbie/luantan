const path=require('path');

const PATHS={
    lib:path.join(__dirname,'lib'),
    dist:path.join(__dirname,'dist'),
};
module.exports={
    entry:{
        luantan:path.join(__dirname,'index.js'),
    },
    output:{
        path:PATHS.dist,
        filename:'[name].js',
    },
    module:{
        loaders:[
            {
                test:/\.jsx?/,
                loader:["babel-loader"],//自右向左依次加载
                query:{
                    "presets": ['es2015','react'],
                },
                exclude:'node_modules',
            },
            {
                test:/\.css$/,
                loaders: ["style-loader","css-loader" ]
            },
        ]
    }
};