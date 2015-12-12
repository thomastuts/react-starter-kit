'use strict';

const browerSync = require('browser-sync');

module.exports = function () {
  browerSync.init({
    ghostMode: false,
    notify: false,
    files: ['./static/**/*'],
    server: {
      baseDir: './static'
    }
  });
};
