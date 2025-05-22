import React from 'react';
import './blog.css';
import initialDesign from '../../assets/blog/initial_design.jpg';
import badWebsiteAttempt from '../../assets/blog/bad_website_attempt.png';
import agentWaitingForApproval from '../../assets/blog/agent_waiting_for_approval.png';
import linkStylingFeedback from '../../assets/blog/link_styling_feedback.png';
import designMockup from '../../assets/blog/design_mockup.png';

const Blog = () => (
  <div className="blog-container">
    <p>
      My goal in this project was to improve my use of <a href="https://www.cursor.com/" className="link-styling">Cursor</a>, and develop my ability to write long-horizon prompts. Within the next year I think all developers will be orchestrating <a href="https://www.ibm.com/think/topics/ai-agents" className="link-styling">Agents</a> to navigate long-horizon tasks - that is, a task that requires a series of actions and decisions - as part of our day to day work.
    </p>

    <p>
      For instance, "create a feature that does X & Y", or "investigate products A, B, C, consider users X & Y, and then do Z."
    </p>

    <p>
      When I first started to utilize long-horizon prompting, I realized it wasn't an entirely familiar way of thinking about a coding challenge. Usually I would break down a task into a series of prioritized steps, and tackle each one at a time - gradually building a more complete understanding of the overall picture. But long-horizon prompting requires a comprehensive, holistic vision upfront.
    </p>

    <p>
      And so was born the idea for a <i>one-prompt-site</i>. Not a particularly practical idea, but a fun context for learning.
    </p>

    <p>
      After initializing a new React app, I started with coming up with a design. I sketched out what I had in mind and, continuing with a theme, had ChatGPT mock up my design so that it would be more readable moving forwards.
    </p>
    
    <img src={initialDesign} alt="Initial hand-drawn design" className="blog-image" />
    <img src={designMockup} alt="Final design mockup" className="blog-image blog-image--outline" />
    
    <p>
      Next, I wrote down anything and everything I could think of - trying to capture everything required for a <i>one-prompt-site</i>.
    </p>

    <p>
      Rather than running this immediately, as suggested by <a href="https://www.prompthub.us/blog/using-llms-to-optimize-your-prompts?utm_source=chatgpt.com " className="link-styling">Prompt Hub</a> I first ran this prompt past ChatGPT and asked if anything was missing or ambiguous. I was then able to iterate even before reaching the IDE. This, I believe, is a great practice when you're working in a context that has the Agent working for an extended period of time, as this inherently has a slow feedback loop.
    </p>
    
    <p>
      Finally I was able to get the Cursor Agent to build my site. Unfortunately, after a few alteration, I wasn't happy with the result.
    </p>
    
    <img src={badWebsiteAttempt} alt="Bad website attempt" className="blog-image blog-image--outline" />
    
    <p>
      It was at this stage that I turned to <a href="https://promptengineering.org/system-prompts-in-large-language-models/" className="link-styling">system prompts</a>, in Cursor known as <a href="https://docs.cursor.com/context/rules" className="link-styling">Rules</a>.
    </p>

    <p>
      These things are <i>powerful</i>. They are used to customize your Agent - building knowledge, context, and even behavior. They frame the Agent's reasoning so that it can better stick to the brief and realize your vision.
    </p>

    <p>
      The most important change I made was a rule for the Agent to require confirmation at logical stages, and to ask questions when missing key information. This led to a much more successful outcome - both in terms of design and code quality. I was able to work with the Agent to build the website <i>together</i>.
    </p>
    
    <img src={agentWaitingForApproval} alt="AI agent waiting for approval" className="blog-image" />
    
    <p>
      One stand-out for me was when it asked for more clarity around link styling. I hadn't thought to provide more information for this element previously, but it prompted me to have a think and then provide clearer instruction. I was amazed it spotted this gap and knew to ask for my input in plugging it.
    </p>
    
    <img src={linkStylingFeedback} alt="AI asking about link styling" className="blog-image blog-image--center" />
    
    <p>
      Overall this was really fun experience and the outcome was much stronger than I hoped for. The key lesson I'll be taking away is the value in thoughtful prompting, as well as the power in treating the Agent not as an algorithm, but as a partner that I can work with.
    </p>
  </div>
);

export default Blog;