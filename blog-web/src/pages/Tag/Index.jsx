import React, {useEffect} from 'react';

import './tag.less'

function Index(props) {
	
	useEffect(() => {
		window.tagcloud({
			selector: '.tagcloud',
			fontSize: 16, // 标签字体
			radius: 100, // 滚动半径
			mspeed: 'normal', // 滚动最大速度
			ispeed: 'normal', // 滚动初速度
			direction: 135, // 滚动方向
			keep: false
		})
	}, [])
	
	return (
		<div className='tag content tags-wap tagcloud'>
			<a className='tag-item'>React</a>
		</div>
	);
}

export default Index;