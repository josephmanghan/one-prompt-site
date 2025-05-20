import React from 'react';
import './blog.css';
import initialDesign from '../../assets/blog/initial_design.jpg';
import badWebsiteAttempt from '../../assets/blog/bad_website_attempt.png';
import agentWaitingForApproval from '../../assets/blog/agent_waiting_for_approval.png';

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
		<p>Strictly speaking I myself have gone off spec as I feel this isnt really 'one prompt', but I think the lesson was that that guidance is necessary to guide what is a GREAT POWER in these tools.</p>
		<p>SOOO much of its power comes from setup. These things are powerful, but they need coaching. At the moment at least. The ceiling is high though. d</p>
		<p>Want I want to look up next is setting up personas (through system prompt setup) to build a more complex AI system, to boost the quality of overall code.</p>
	</div>
);

export default Blog; 