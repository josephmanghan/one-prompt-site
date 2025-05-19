import React, { useState } from 'react';

const LINKEDIN_URL = 'https://www.linkedin.com/in/josephmanghan/';

const Contact = () => {
	const [copied, setCopied] = useState(false);
	const handleCopy = () => {
		navigator.clipboard.writeText('josephmanghan@gmail.com');
		setCopied(true);
		setTimeout(() => setCopied(false), 1800);
	};
	return (
		<div className="w-full flex flex-col gap-4 mt-2">
			<button
				onClick={handleCopy}
				className="group flex items-center gap-3 text-lg text-black font-normal focus:outline-none"
				aria-label="Copy email address"
			>
				<span className="material-icons text-gray-700 text-2xl">mail</span>
				<span className="underline-link cursor-pointer select-all">josephmanghan@gmail.com</span>
				{copied && (
					<span className="ml-2 text-turquoise text-sm transition-opacity">Copied!</span>
				)}
			</button>
			<a
				href={LINKEDIN_URL}
				target="_blank"
				rel="noopener noreferrer"
				className="group flex items-center gap-3 text-lg text-black font-normal"
			>
				<span className="material-icons text-gray-700 text-2xl">linkedin</span>
				<span className="underline-link">in/josephmanghan</span>
			</a>
		</div>
	);
};

export default Contact; 