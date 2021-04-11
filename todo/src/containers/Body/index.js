import React, { useState } from 'react';
import { Add } from '../../components/Add';
import { Date as Today } from '../../components/Date';
import { Day } from '../../components/Day';
import { List } from '../../components/List';
import { TaskStataus } from '../../components/TaskStataus';

import { Wrapper } from './Wrapper';

/* Conainer = 상태를 관리할 수 있는 컴포넌트
컴포넌트를 담을 수 있는 그릇.
*/

const today = new Date();
export const Body = () => {
	const [todos, set_todos] = useState([
		{
			id: 1,
			text: 'React 공부',
			done: true,
		},
		{
			id: 2,
			text: 'Component 이해',
			done: true,
		},
		{
			id: 3,
			text: 'Class 변형',
			done: false,
		},
		{
			id: 4,
			text: '기능 추가',
			done: false,
		},
	]);

	const toggle = (id) => set_todos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
	const remove = (id) => set_todos(todos.filter((todo) => todo.id !== id));
	const add = (todo) => {
		set_todos(todos.concat(todo));
	};

	return (
		<Wrapper>
			<Today today={today} />
			<br />
			<Day today={today} />
			<br />
			<TaskStataus todos={todos} />
			<br />
			<div className='list'>
				<List todos={todos} toggle={toggle} remove={remove} />
			</div>
			<br />
			<Add add={add} todos={todos} />
			<br />
		</Wrapper>
	);
};
