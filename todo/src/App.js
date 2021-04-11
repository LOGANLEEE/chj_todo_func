import React from 'react';
import { Head } from './containers/Head';
import { Body } from './containers/Body';
import { Foot } from './containers/Foot';

import { Wrapper } from './Wrapper';

function App() {
	return (
		<Wrapper>
			<Body />
		</Wrapper>
	);
}

export default App;
