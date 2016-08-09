module.exports = {
    entry : "./app/app.jsx",
    output : {
        path : __dirname,
        filename : './public/bundle.js'
        
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/main.jsx',
            Menu: 'app/components/navigation.jsx',
            About: 'app/components/about.jsx',
            Weather: 'app/components/weather.jsx',
            Examples: 'app/components/examples.jsx',
            Message: 'app/components/message.jsx',
            WeatherForm: 'app/components/weatherform.jsx',
            openWeatherAPI: 'app/api/openweatherapi.jsx'
        },
        extenstions : ['', '.js', '.jsx']
    },
    module : {
        loaders : [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};