import React from 'react';
import { Wrapper } from './Wrapper';

export const TaskStataus = ({ todos }) => {
	const incomplete = todos.filter((content) => !content.done).length;
	return (
		<Wrapper>
			<div className='tasks-left'>
				미완료 테스크 : {incomplete} 개  , 완료 테스크 :{todos.length - incomplete} 개
			</div>
		</Wrapper>
	);
};
