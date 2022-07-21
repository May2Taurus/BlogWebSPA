import React from 'react';
import {Link} from "react-router-dom";
import {Row, Col, List, Avatar, Divider} from "antd";
import {
	CalendarOutlined,
	FolderOpenOutlined,
	FireOutlined,
	GithubOutlined,
	QqOutlined,
	WechatOutlined,
	LinkOutlined,
	HddOutlined
	
} from '@ant-design/icons';

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {transformTime} from "../../utils/MathUtils";

import './article.less'

function Index() {
	
	const data = [
		{
			"id": "b1a99644051211edb4beeb3c6c69cabb",
			"typeId": "2c2fc738050b11edb4beeb3c6c69cabb",
			"title": "使用egg接入第三方github登录的方法",
			"introduction": "数组去重，一般都是在面试的时候才会碰到，一般是要求手写数组去重方法的代码。如果是被提问到，数组去重的方法有哪些？你能答出其中的10种，面试官很有可能对你刮目相看。在真实的项目中碰到的数组去重，一般都是后台去",
			"content": "## 这是测试样例",
			"createTime": "1656633600000",
			"lastUpdateTime": "1656633600000",
			"author": null,
			"viewCount": 0
		},
		{
			"id": "87c58caa06f911edba10ae8ebb00cc00",
			"typeId": "26b8a1da050b11edb4beeb3c6c69cabb",
			"title": "二次测试",
			"introduction": "数组去重，一般都是在面试的时候才会碰到，一般是要求手写数组去重方法的代码。如果是被提问到，数组去重的方法有哪些？你能答出其中的10种，面试官很有可能对你刮目相看。在真实的项目中碰到的数组去重，一般都是后台去",
			"content": "# 这是一级标题\n\n**加粗字体**\n\n*斜体*\n",
			"createTime": "1655164800000",
			"lastUpdateTime": "1655164800000",
			"author": null,
			"viewCount": 1000
		},
		{
			"id": "b1a99644051211edb4beeb3c6c69cabb",
			"typeId": "2c2fc738050b11edb4beeb3c6c69cabb",
			"title": "使用egg接入第三方github登录的方法",
			"introduction": "数组去重，一般都是在面试的时候才会碰到，一般是要求手写数组去重方法的代码。如果是被提问到，数组去重的方法有哪些？你能答出其中的10种，面试官很有可能对你刮目相看。在真实的项目中碰到的数组去重，一般都是后台去",
			"content": "## 这是测试样例",
			"createTime": "1656633600000",
			"lastUpdateTime": "1656633600000",
			"author": null,
			"viewCount": 0
		},
		{
			"id": "b1a99644051211edb4beeb3c6c69cabb",
			"typeId": "2c2fc738050b11edb4beeb3c6c69cabb",
			"title": "使用egg接入第三方github登录的方法",
			"introduction": "数组去重，一般都是在面试的时候才会碰到，一般是要求手写数组去重方法的代码。如果是被提问到，数组去重的方法有哪些？你能答出其中的10种，面试官很有可能对你刮目相看。在真实的项目中碰到的数组去重，一般都是后台去",
			"content": "## 这是测试样例",
			"createTime": "1656633600000",
			"lastUpdateTime": "1656633600000",
			"author": null,
			"viewCount": 0
		},
	]
	
	return (
		<div className='article'>
			<Header pageIndex='article-header'/>
			<div className='content'>
				<Row type='flex' justify='center' gutter={64}>
					<Col className='left'  xs={24} sm={24} md={16} lg={18} xl={14}>
						<List
							itemLayout='vertical'
							dataSource={data}
							renderItem={item => (
								<List.Item className='article-item'>
									<Row>
										<Col className='article-img' span={8}>
											<img src="https://joeschmoe.io/api/v1/random" alt="Loading..."/>
										</Col>
										<Col className='article-main' span={16}>
											<div className="article-title">
												<Link to='/detail' state={{id: item.id}}>
													{item.title}
												</Link>
											</div>
											<div className="article-attribute">
												<span className='article-attribute-content view'>
													<FireOutlined className='article-attribute-content-icon' />
													查看({item.viewCount})
												</span>
												<span className='article-attribute-content comment'>
													<FireOutlined className='article-attribute-content-icon' />
													评论(0)
												</span>
												<span className='article-attribute-content time'>
													<CalendarOutlined className='article-attribute-content-icon' />
													{transformTime(item.createTime)}
												</span>
												{/* <span className='list-icon-content'><FolderOpenOutlined /> {item.typeName}</span> */}
											</div>
											<div className="article-introduce">{item.introduction}</div>
											<div className='article-message'>
												<span className='article-message-content article-type'>
													<HddOutlined className='article-message-content-icon' />
													类别
												</span>
												<span className='article-message-content article-label'>
													<LinkOutlined className='article-message-content-icon' />
													ES6
												</span>
												<span className='article-message-content article-label'>
													<LinkOutlined className='article-message-content-icon' />
													TypeScript
												</span>
											</div>
										</Col>
									</Row>
								</List.Item>
							)}
						/>
					</Col>
					<Col className='right' xs={0} sm={0} md={7} lg={5} xl={4}>
						<div className='author'>
							<Avatar
								className='author-avatar'
								size={100}
								src="https://joeschmoe.io/api/v1/random"
								alt='Loading...'
							/>
							<div className='author-text'>
								这是一个正在发育的前端
							</div>
							<div className='author-button'>
								专注于Web前端
							</div>
							<Divider plain className='author-divider'>友情链接</Divider>
							<div className='author-link'>
								<GithubOutlined className='link-icon'/>
								<QqOutlined className='link-icon'/>
								<WechatOutlined className='link-icon'/>
							</div>
						</div>
					</Col>
				</Row>
			</div>
			<Footer/>
		</div>
	);
}

export default Index;