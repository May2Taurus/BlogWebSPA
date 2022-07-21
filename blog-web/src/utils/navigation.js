import {Link} from "react-router-dom";
import {
	HomeOutlined,
	SnippetsOutlined,
	InboxOutlined,
	HddOutlined,
	SettingOutlined,
	UserOutlined
} from '@ant-design/icons';

// 后台左侧导航栏结构
const NavList = [
	{
		label: <Link to='/index'>主页</Link>,
		key: '/index',
		icon: <InboxOutlined />
	},
	{
		label:  <Link to='/article'>文章</Link>,
		key: '/article',
		icon: <SnippetsOutlined />,
		// popupClassName: 'subMenu',
		// children: [
		// 	{label: <Link to='/admin/article/list'>文章列表</Link>, key: '/admin/article/list',},
		// 	{label: <Link to='/admin/article/add'>写文章</Link>, key: '/admin/article/add',},
		// 	{label: <Link to='/admin/type'>类别管理</Link>, key: '/admin/type'},
		// ]
	},
	{
		label: <Link to='/archive'>归档</Link>,
		key: '/archive',
		icon: <InboxOutlined />
	},
	{
		label: <Link to='/tag'>标签</Link>,
		key: '/tag',
		icon: <HddOutlined />
	},
	{
		label: <Link to='/admin/user'>用户</Link>,
		key: '/admin',
		icon: <UserOutlined />
	},
]

export default NavList;
