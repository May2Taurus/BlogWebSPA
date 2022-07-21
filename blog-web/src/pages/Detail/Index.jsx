import React from 'react';
import {
	Row,
	Col,
	Avatar,
	Divider,
	Button,
	Form,
	Input
} from 'antd';
import {marked} from "marked";
import {hljs} from "highlight/lib/vendor/highlight.js/highlight";
import {MarkdownNavbar} from "markdown-navbar";
// import 'markdown-navbar/dist/navbar.css'

import Header from "../../components/Header/Header";

import './detail.less'
import {
	CalendarOutlined,
	FireOutlined,
	GithubOutlined,
	HddOutlined,
	LinkOutlined,
	QqOutlined,
	WechatOutlined,
	LikeOutlined,
	CommentOutlined,
	ShareAltOutlined
} from "@ant-design/icons";
import {transformTime} from "../../utils/MathUtils";
import Footer from "../../components/Footer/Footer";

const {Item} = Form;
const {TextArea} = Input;

function Index() {
	
	const article = {
		"id": "b1a99644051211edb4beeb3c6c69cabb",
		"typeId": "2c2fc738050b11edb4beeb3c6c69cabb",
		"title": "使用egg接入第三方github登录的方法",
		"introduction": "数组去重，一般都是在面试的时候才会碰到，一般是要求手写数组去重方法的代码。如果是被提问到，数组去重的方法有哪些？你能答出其中的10种，面试官很有可能对你刮目相看。在真实的项目中碰到的数组去重，一般都是后台去",
		"content": '# P01:课程介绍和环境搭建\n' +
	'[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
	'> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
	'**这是加粗的文字**\n\n' +
	'*这是倾斜的文字*`\n\n' +
	'***这是斜体加粗的文字***\n\n' +
	'~~这是加删除线的文字~~ \n\n'+
	'# p02:来个Hello World 初始Vue3.0\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n'+
	'```java\n' +
	'System.out.println(2)' +
	'```\n'     +
	'***\n\n\n' +
	'# p03:Vue3.0基础知识讲解\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n\n'+
	'# p04:Vue3.0基础知识讲解\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n\n'+
	'#5 p05:Vue3.0基础知识讲解\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n\n'+
	'# p06:Vue3.0基础知识讲解\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n\n'+
	'# p07:Vue3.0基础知识讲解\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n\n'+
	'``` var a=11; ```',
	"createTime": "1656633600000",
	"lastUpdateTime": "1656633600000",
	"author": null,
	"viewCount": 0
	}
	
	const renderer = new marked.Renderer();
	
	marked.setOptions({
		renderer:renderer,
		gfm: true, // 类似github风格的markdown
		pedantic: false, // 是否严格匹配markdown格式
		sanitize: false, // 是否需要多媒体（视频，图片等）
		tables: true, // github表格样式
		breaks: false, // 是否支持github样式的换行符
		smartLists: true, // 是否自动渲染列表
		highlight: function (code) { // 代码高亮处理函数
			return hljs.highlightAuto(code).value; // 自动识别代码并高亮对应部分
		}
	})
	
	return (
		<div className='article-detail'>
			<Header pageIndex='article-header'/>
			<Row className='article-detail-content' type='flex' justify='space-around' gutter={16}>
				<Col className='left' xs={0} sm={0} md={7} lg={5} xl={4.5}>
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
				<Col xs={24} sm={24} md={14} lg={14} xl={14} style={{padding: 0}}>
					<div className='middle' >
						<div className='article-above'>
							<div className='article-title'>
								{article.title}
							</div>
							<div className='article-introduce'>
								{article.introduction}
							</div>
							<img className='article-img' src="http://pic.qqbizhi.com/allimg/bpic/21/821_4.jpg" alt="Loading..."/>
							<div className="article-attribute">
								<span className='article-attribute-content view'>
									<FireOutlined className='article-attribute-content-icon' />
									查看({article.viewCount})
								</span>
									<span className='article-attribute-content comment'>
									<FireOutlined className='article-attribute-content-icon' />
									评论(0)
								</span>
									<span className='article-attribute-content time'>
									<CalendarOutlined className='article-attribute-content-icon' />
										{transformTime(article.createTime)}
								</span>
							</div>
						</div>
						<Divider className='article-divider' style={{padding: '0 .2rem'}}>正文内容</Divider>
						<div className='article-below' dangerouslySetInnerHTML={{__html:marked(article.content)}}>
						</div>
						<Divider className='article-divider' style={{padding: '0 .2rem'}}>结束</Divider>
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
					</div>
					<div className='article-action'>
						<Row className='article-items' type='flex' justify='space-around'>
							<Col className='article-item' span={6}>
								<Button className='article-action-button button-like' shape='circle' icon={<LikeOutlined />} />
							</Col>
							<Col className='article-item' span={6}>
								<Button className='article-action-button button-comment' shape='circle' icon={<CommentOutlined />} />
							</Col>
							<Col className='article-item' span={6}>
								<Button className='article-action-button button-share' shape='circle' icon={<ShareAltOutlined />} />
							</Col>
						</Row>
					</div>
					<div className='article-comment'>
						<Form>
							<Item>
								<TextArea className='comment-text' autoSize={{minRows: 6}} placeholder='说些什么...' />
							</Item>
							<Item style={{textAlign: 'right'}}>
								<Button size='middle' className='comment-button'>评论</Button>
							</Item>
						</Form>
					</div>
				</Col>
				<Col className='right' xs={0} sm={0} md={3} lg={3} xl={4}>
					<div className="nav-title">文章目录</div>
					<MarkdownNavbar
						className="article-menu"
						source={article.content}
						ordered={false}
					/>
				</Col>
			</Row>
			<Footer/>
		</div>
	);
}

export default Index;