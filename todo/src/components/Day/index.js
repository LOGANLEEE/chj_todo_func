import React from 'react';
import { Wrapper } from './Wrapper';

export const Day = ({ today }) => {
	return (
		<Wrapper>
			<div className='day'>
				{today.toLocaleDateString('ko-KR', {
					weekday: 'long',
				})}
			</div>
		</Wrapper>
	);
};
