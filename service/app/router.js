'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // 路由修改
  require('./router/default')(app)
};
