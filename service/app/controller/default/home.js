'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    
    ctx.body = 'Welcome'
  }
  
  async getArticleList() {
    const { ctx } = this;
    let sql = 'select ' +
        'article.id as id,' +
        'article.title as title,' +
        'article.introduction as introduction,' +
        "FROM_UNIXTIME(article.add_time, '%Y-%m-%d') as add_time," +
        'article.view_count as view_count,' +
        'type.type_name as type_name ' +
        'from article left join type on article.type_id = type.id';
    const results = await this.app.mysql.query(sql);
    ctx.body = {data: results};
  }
  
  async getArticleById() {
    const {ctx} = this
    let id = ctx.query.id;
    let sql = 'select ' +
        'article.id as id,' +
        'article.title as title,' +
        'article.introduction as introduction,' +
        "FROM_UNIXTIME(article.add_time, '%Y-%m-%d') as add_time," +
        'article.view_count as view_count,' +
        'article.content as content,' +
        'type.type_name as type_name, ' +
        'type.id as type_id ' +
        'from article left join type on article.type_id = type.id ' +
        'where article.id = ' + id;
    const results = await this.app.mysql.query(sql);
    console.log('*************' + id);
    ctx.body = {data: results};
  }
}

module.exports = HomeController;
