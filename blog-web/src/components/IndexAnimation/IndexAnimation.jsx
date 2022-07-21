import React, {useEffect, useRef} from 'react';

import {index_fullScreenAnimation} from "../../utils";

import './animation.less'

function IndexAnimation() {
	
	const animation = useRef();
	
	// componentDidMount
	useEffect(() => {
		console.log(animation);
		index_fullScreenAnimation(animation.current);
	}, [])
	
	return (
		<div>
			<canvas className='index-canvas' ref={animation}>
			
			</canvas>
		</div>
	);
}

export default IndexAnimation;