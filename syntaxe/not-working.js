//MODULE WEBPACK

import React from 'react';
import './style.css';

class Header extends React.Component {


  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Header;





//LOADER GULP

var webpack = require('webpack');

module: {
    
...
    loaders: [
      {
        exclude: [
          /\.css$/,
        ],
          
      {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1!postcss'
      },

    ]
 },






 //TASK GULP

const gulp    = require ('gulp');
const sass   = require ('gulp-sass');
const reload  = require ('gulp-livereload');

gulp.task ('css', function ()  {

  gulp.src ('src/*.scss')
      .pipe (sass())
      .pipe (concat('translate.css'))
      .pipe (gulp.dest('build'));

});