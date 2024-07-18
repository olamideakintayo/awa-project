const { merge } = require('wepack-merge')

 const path = require('path')

 const config = ('./wepack-config')

 module.exports = merge(config, {
    node: development,

    devtool: 'inline-source-map',

    devServer: {
        writeToDisk: true
    },

    output: { 
        path: path.resolve(_dirname, "public")
    }
 }) 