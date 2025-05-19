import React from 'react';
import JMLogo from '../../assets/JM_logo.png';

const Header = () => (
	<div className="w-full flex flex-col sm:flex-row items-center justify-between mb-8 gap-6">
		<div className="flex-1 text-center sm:text-left">
			<h1 className="font-bold text-4xl sm:text-5xl text-black mb-2 tracking-tight">Dr Joe Manghan</h1>
		</div>
		<div className="flex-shrink-0 flex items-center justify-center">
			<img
				src={JMLogo}
				alt="Profile"
				className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full border border-gray-200 shadow-sm bg-gray-50"
			/>
		</div>
	</div>
);

export default Header; 