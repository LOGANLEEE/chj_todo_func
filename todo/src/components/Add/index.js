import React, { useState } from 'react';
import { Wrapper, Input, InsertForm, InsertFormPositioner, CircleButton } from './Wrapper';
import { MdAdd } from 'react-icons/md';

export const Add = ({ add, todos }) => {
	const [open, setOpen] = useState(false);
	const [inputText, setInputText] = useState('');
	return (
		<Wrapper>
			{open && (
				<InsertFormPositioner>
					<InsertForm
						onSubmit={(e) => {
							e.preventDefault();
							add({
								id: todos.length + 1,
								text: inputText,
								done: false,
							});
							setInputText('');
						}}>
						<Input
							autoFocus
							placeholder='Typing And, Enter!'
							onChange={({ target }) => setInputText(target.value)}
							value={inputText}
						/>
					</InsertForm>
				</InsertFormPositioner>
			)}
			<CircleButton onClick={() => setOpen(!open)} open={open}>
				<MdAdd />
			</CircleButton>
		</Wrapper>
	);
};
