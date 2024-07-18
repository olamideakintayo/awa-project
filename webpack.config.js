const path = require('path')
const webpack = require('webpack')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const IS_DEVELOPMENT = process.env.NODE_ENV = 'dev'

const dirApp = path.join(_dirname, 'app')
const dirAssests = path.join(_dirname, 'assests')
const dirStyles = path.join(_dirname, 'styles')

console.log(dirApp, dirAssests, dirStyles)