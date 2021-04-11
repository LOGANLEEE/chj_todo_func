import React from 'react';
import { Wrapper } from './Wrapper';

export const Date = ({ today }) => {
	const date = today.toLocaleDateString('ko-KR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
	return (
		<Wrapper>
			<h1>{date}</h1>
		</Wrapper>
	);
};
