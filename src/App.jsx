import React from 'react';
import Wrapper from './components/Wrapper/Wrapper';
import Header from './components/Header/Header';
import Bio from './components/Bio/Bio';
import Divider from './components/Divider/Divider';
import Contact from './components/Contact/Contact';

function App() {
	return (
		<Wrapper>
			<Header />
			<Bio />
			<Divider />
			<Contact />
		</Wrapper>
	);
}

export default App;
