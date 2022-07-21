import React, {useEffect, useState} from 'react';

import IndexAnimation from "../../components/IndexAnimation/IndexAnimation";

import './index.less'
import Header from "../../components/Header/Header";

function Index() {
	
	
	const [indexText, setIndexText] = useState('');
	
	
	// 实现打字机效果
	let count = 0, timer = 100;
	const target = 'Everything is possible';
	const typing = () => {
		if (count < target.length) {
			setIndexText(target.slice(0, count++) + '_');
			setTimeout(typing, timer);
		} else {
			setIndexText(target);
		}
	}
	
	useEffect(() => {
		typing();
	}, [])
	
	return (
		<div>
			<Header/>
			<IndexAnimation></IndexAnimation>
			<div className='common'>
				<div className='home'>
					{indexText}
				</div>
			</div>
		</div>
	);
}

export default Index;