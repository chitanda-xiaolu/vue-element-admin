'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  /**
   * __dirname总是指向被执行js文件的绝对路径
   * The __dirname always point to the absolute path of the executed js file
   * 
   * path.join(__dirname, dir)可以将当前被执行js文件的绝对路径和dir拼接成一个有效的路径
   */
  return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'vue Element Admin' // page title


module.exports = {
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}