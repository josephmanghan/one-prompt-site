import React from 'react';

const LINKEDIN_URL = 'https://www.linkedin.com/in/josephmanghan/';
const PHD_URL = 'https://eprints.soton.ac.uk/443879/#:~:text=Manghan%2C%20Joseph%20Philip%20(2020),%2C%20Doctoral%20Thesis%2C%20237pp.';

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

export default Bio; 