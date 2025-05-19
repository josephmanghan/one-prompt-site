import React from 'react';

const Wrapper = ({ children }) => (
	<div className="min-h-screen flex items-center justify-center bg-white px-4">
		<div className="w-full max-w-xl mx-auto p-8 bg-white rounded-lg shadow-none flex flex-col items-center">
			{children}
		</div>
	</div>
);

export default Wrapper; 