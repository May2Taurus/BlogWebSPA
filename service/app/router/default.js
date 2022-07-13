/*
	前台需要的api接口
 */
module.exports = app => {
	const {router, controller} = app;
	router.get('/', controller.default.home.index)
	router.get('/default/article/list', controller.default.home.getArticleList)
	router.get('/default/article/detail', controller.default.home.getArticleById)
}

