import React from 'react';
import './blog.css';
import initialDesign from '../../assets/blog/initial_design.jpg';
import badWebsiteAttempt from '../../assets/blog/bad_website_attempt.png';
import agentWaitingForApproval from '../../assets/blog/agent_waiting_for_approval.png';
import linkStylingFeedback from '../../assets/blog/link_styling_feedback.png';

const Blog = () => (
	<div className="blog-container">
		<p>Purpose. Not necessarily to do be practical, but to learn how to use the tool in a long-horizon context, develop a long-horizon prompt skillset, and learnin what it's good bad at.</p>
		<p>Started with setting up blank repo in React with Vite</p>
		<p>Starting with literally drawing a design - badly - and then asking ChatGPT to reproduce it nicely with the intention of using as a prompt.</p>
		<img src={initialDesign} alt="Initial hand-drawn design" className="blog-image" />
		<p>Next, I wrote down anything I could think of relevant to a prompt. I tried to think of not a local, micro task, but the whole task in totality.</p>
		<p>I fed this to ChatGPT & asked it if anything was missing (provide link)</p>
		<p>Iterated based on this feed back</p>
		<p>Ran this through Cursor (3.7 as recommended, link) but led a few annoying assumption & diversions from the spec.</p>
		<img src={badWebsiteAttempt} alt="Bad website attempt" className="blog-image" />
		<p>I began to incorporate system prompts. These underlined best practices, code structure, design princples (I read that adding design/structure to system was helpful as it was a hollistic consideriation - find link).. but most importantly behaviour of the agent.</p>
		<p>This led to much greater success & it was the behaviour that was the most noticeable to me. It would ask questions as it went, rather than making poor assumptions. It meant we built a website TOGETHER, built our understanding & goal together as missed questions were answered & the full picture was gradually completed.</p>
		<img src={agentWaitingForApproval} alt="AI agent waiting for approval" className="blog-image" />
		<p>It even asked for more clarity around link styling, even though I was aware that this unspecified and was happy for them to use their own reasoning, as I wanted to keep the prompt simple.</p>
		<img src={linkStylingFeedback} alt="AI asking about link styling" className="blog-image" />
		<p>Strictly speaking I myself have gone off spec as I feel this isnt really 'one prompt', but I think the lesson was that that guidance is necessary to guide what is a GREAT POWER in these tools.</p>
		<p>SOOO much of its power comes from setup. These things are powerful, but they need coaching. At the moment at least. The ceiling is high though. d</p>
		<p>Want I want to look up next is setting up personas (through system prompt setup) to build a more complex AI system, to boost the quality of overall code.</p>

		<hr />

		<h3>Final prompt</h3>
		<div className="formatted-prompt">
			<p>Create a fully responsive, single-page personal website. All components should be center-aligned within a fixed-width wrapper. Use "Plus Jakarta Sans" from Google Fonts for all text.</p>

			<p>The page consists of the following:</p>

			<p>A wrapper component that applies global layout: center the content, set a max width for readability, and apply overall padding and background. This wrapper also loads the chosen font.</p>

			<p>A header section that includes a single prominent heading using bold styling and large size. To the right of the text block, display a circular profile image — a square image is src/assets/jm_logo.webp, and should be masked into a perfect circle and appropriate sized. These should stack vertically on smaller screens</p>

			<p>Beneath this is a bio section. Three paragraphs:</p>
			<ul>
				<li>I'm Joe – a Frontend Developer who enjoys writing clean, scalable code, and thoughtful UX. I work on authentication and identity solutions within digital banking.</li>
				<li>Right now I'm focused on the evolving AI discourse and exploring how AI can be meaningfully integrated into both product and workflow contexts.</li>
				<li>Beyond development, I enjoy weightlifting, long walks, art, and the odd video game. I hold a PhD that explored using web practices to outsource compositional tasks to crowds.</li>
				<li className="sub-list">
					'Frontend Developer' will link to https://www.linkedin.com/in/josephmanghan/
				</li>
				<li className="sub-list">
					The word 'PhD' will link to https://eprints.soton.ac.uk/443879/#:~:text=Manghan,%20Joseph%20Philip%20(2020),%2C%20Doctoral%20Thesis,%20237pp.
				</li>
			</ul>

			<p>Add a contact section with two items. Each should have a simple icon (email and LinkedIn) - from Material Icons - placed beside their corresponding text label. The inner text for each item are as follows:</p>
			<ul>
				<li>
					josephmanghan@gmail.com
					<p className="sub-description">This text requires the functionality of copying to clipboard (noticing the user) when clicked</p>
				</li>
				<li>
					in/josephmanghan
					<p className="sub-description">This will be a link to https://www.linkedin.com/in/josephmanghan/</p>
				</li>
			</ul>

			<p>Link styling should be appropriate and thoughtful.</p>

			<p>The overall design is informed by @one-site-prompt-design.png</p>
		</div>

		<h3>Link styling followup</h3>
		<p>Link styling: all &lt;a&gt; elements should display a low, subtle, transparent underline bar by default. On hover, this underline should animate to grow and span the full height of the word. This hover transition should be smooth and modern, reinforcing the overall sleek design.</p>
	</div>
);

export default Blog; 