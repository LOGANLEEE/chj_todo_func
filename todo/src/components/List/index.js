import React from 'react';
import { Wrapper, CheckCircle, Remove, Text, TodoItemBlock } from './Wrapper';
import { MdDone, MdDelete } from 'react-icons/md';

export const List = ({ todos, toggle, remove }) => {
	return (
		<Wrapper>
			{todos.map(({ id, text, done }) => (
				<TodoItemBlock>
					{/* toggle 버튼의 체크 여부를 보여준다 */}
					<CheckCircle done={done} onClick={() => toggle(id)}>
						{done && <MdDone />}
					</CheckCircle>

					{/* lists의 text */}
					<Text done={done}>{text}</Text>

					{/* remove 버튼 */}
					<Remove remove={remove} onClick={() => remove(id)}>
						{id && <MdDelete />}
					</Remove>
				</TodoItemBlock>
			))}
		</Wrapper>
	);
};
