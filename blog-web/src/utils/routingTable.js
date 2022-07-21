import {Navigate} from "react-router";
import {lazy} from 'react'; // 路由懒加载

// 所有路由组件
const Index = lazy(() => import('../pages/Home/Index'));
const Article = lazy(() => import('../pages/Article/Index'));
const Archive = lazy(() => import('../pages/Archive/Index'));
const Tag = lazy(() => import('../pages/Tag/Index'));
const Detail = lazy(() => import('../pages/Detail/Index'));

// react-router路由表
export default [
	{
		path: '/index',
		element: <Index/>,
	},
	{
		path: '/article',
		element: <Article/>,
	},
	{
		path: '/archive',
		element: <Archive/>,
	},
	{
		path: '/tag',
		element: <Tag/>,
	},
	{
		path: '/detail',
		element: <Detail/>,
	},
	{
		path: '/',
		element: <Navigate to='/index'/>
	}
]
