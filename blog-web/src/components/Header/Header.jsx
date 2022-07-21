import React, {useState, useEffect} from 'react';
import {Menu, Row, Col, Avatar} from 'antd';
import {
	HomeOutlined,
	FileTextOutlined,
	SmileOutlined
} from '@ant-design/icons'

import NavList from "../../utils/navigation";

import './header.less'
import {Link, NavLink} from "react-router-dom";

function Header(props) {
	
	const {pageIndex} = props;
	const [current, setCurrent] = useState('mail');
	const [theme, setTheme] = useState('light');
	
	
	const onClick = (e) => {
		console.log('click ', e);
		setCurrent(e.key);
	};
	
	useEffect(() => {
		// 子元素绝对定位，父元素高度塌陷
		const header = document.querySelector('.header');
		const menu = document.querySelector('.ant-menu-overflow');
		header.style.height = menu.offsetHeight + 'px';
		console.log(pageIndex);
	}, []);
	
	return (
		<div className={'header '+ pageIndex}>
			<Row type='flex' justify='space-between' align='middle'>
				<Col className='header-left' xs={24} sm={24} md={15} lg={15} xl={12} >
					{/* <Avatar src="https://joeschmoe.io/api/v1/random" /> */}
					<span className='header-left-text'>Taurus</span>
				</Col>
				<Col className='header-right' xs={0} sm={0} md={14} lg={8} xl={8} >
					<Menu className='header-right-menu' mode='horizontal'>
						<Menu.Item key='home'>
							<HomeOutlined className='header-right-menu-icon' />
							<Link className='header-right-menu-text' to='/index'><span>主页</span></Link>
						</Menu.Item>
						<Menu.Item key='video'>
							<FileTextOutlined className='header-right-menu-icon' />
							<Link className='header-right-menu-text' to='/article'><span>文章</span></Link>
						</Menu.Item>
						<Menu.Item key='life1'>
							<SmileOutlined className='header-right-menu-icon' />
							<Link className='header-right-menu-text' to='/index'><span>归档</span></Link>
						</Menu.Item>
						<Menu.Item key='life2'>
							<SmileOutlined className='header-right-menu-icon' />
							<Link className='header-right-menu-text' to='/index'><span>分类</span></Link>
						</Menu.Item>
						<Menu.Item key='life3'>
							<SmileOutlined className='header-right-menu-icon' />
							<Link className='header-right-menu-text' to='/index'><span>设置</span></Link>
						</Menu.Item>
					</Menu>
				</Col>
			</Row>
		</div>
	);
}

export default Header;