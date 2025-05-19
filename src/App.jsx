import React, { useState } from 'react';
import JMLogo from './assets/JM_logo.png';

const LINKEDIN_URL = 'https://www.linkedin.com/in/josephmanghan/';
const PHD_URL = 'https://eprints.soton.ac.uk/443879/#:~:text=Manghan%2C%20Joseph%20Philip%20(2020),%2C%20Doctoral%20Thesis%2C%20237pp.';

const Wrapper = ({ children }) => (
	<div className="min-h-screen flex items-center justify-center bg-white px-4">
		<div className="w-full max-w-xl mx-auto p-8 bg-white rounded-lg shadow-none flex flex-col items-center">
			{children}
		</div>
	</div>
);

const Header = () => (
	<div className="w-full flex flex-col sm:flex-row items-center justify-between mb-8 gap-6">
		<div className="flex-1 text-center sm:text-left">
			<h1 className="font-bold text-4xl sm:text-5xl text-black mb-2 tracking-tight">Joe Manghan</h1>
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

const Bio = () => (
	<div className="w-full text-center sm:text-left mb-8 space-y-4 text-gray-800 text-lg font-normal">
		<p>
			I'm Joe – a <a
				href={LINKEDIN_URL}
				className="font-medium text-black underline-link"
				target="_blank"
				rel="noopener noreferrer"
			>Frontend Developer</a> who enjoys writing clean, scalable code, and thoughtful UX. I work on authentication and identity solutions within digital banking.
		</p>
		<p>
			Right now I'm focused on the evolving AI discourse and exploring how AI can be meaningfully integrated into both product and workflow contexts.
		</p>
		<p>
			Beyond development, I enjoy weightlifting, long walks, art, and the odd video game. I hold a <a
				href={PHD_URL}
				className="font-medium text-black underline-link"
				target="_blank"
				rel="noopener noreferrer"
			>PhD</a> that explored using web practices to outsource compositional tasks to crowds.
		</p>
	</div>
);

const Divider = () => (
	<hr className="w-full border-t border-gray-200 my-8 opacity-60" />
);

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

// Custom underline animation styles
const UnderlineLinkStyle = () => (
	<style>{`
		.underline-link {
			position: relative;
			text-decoration: none;
			background: none;
		}
		.underline-link::after {
			content: '';
			display: block;
			position: absolute;
			left: 0;
			bottom: 0.05em;
			height: 0.18em;
			width: 100%;
			background: linear-gradient(90deg, rgba(64,224,208,0.18) 0%, rgba(64,224,208,0.18) 100%);
			border-radius: 2px;
			transition: height 0.28s cubic-bezier(.4,0,.2,1), background 0.28s cubic-bezier(.4,0,.2,1);
			z-index: 0;
		}
		.underline-link:hover::after, .underline-link:focus::after {
			height: 100%;
			background: linear-gradient(90deg, rgba(64,224,208,0.32) 0%, rgba(64,224,208,0.32) 100%);
		}
		.text-turquoise {
			color: #40e0d0;
		}
	`}</style>
);

// Material Icons CDN
const MaterialIconsCDN = () => (
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
);

function App() {
	return (
		<>
			<MaterialIconsCDN />
			<UnderlineLinkStyle />
			<Wrapper>
				<Header />
				<Bio />
				<Divider />
				<Contact />
			</Wrapper>
		</>
	);
}

export default App;
