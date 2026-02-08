import React from 'react';
import './blog.css';
import initialDesign from '../../assets/blog/initial_design.jpg';
import badWebsiteAttempt from '../../assets/blog/bad_website_attempt.png';
import agentWaitingForApproval from '../../assets/blog/agent_waiting_for_approval.png';
import linkStylingFeedback from '../../assets/blog/link_styling_feedback.png';
import designMockup from '../../assets/blog/design_mockup.png';

const Blog = () => (
  <div className="blog container">
    <p>
      My goal in this project was to learn{' '}
      <a
        href="https://www.cursor.com/"
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Cursor
      </a>
      , and develop my ability to write long-horizon prompts. Within the next
      year I think all developers will be orchestrating{' '}
      <a
        href="https://www.ibm.com/think/topics/ai-agents"
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Agents
      </a>{' '}
      to navigate long-horizon tasks - that is, a task that requires a series of
      actions and decisions - as part of our day to day work.
    </p>

    <p>
      For instance, "create a feature that does X & Y", or "investigate products
      A, B, C, consider users X & Y, and then do S."
    </p>

    <p>
      When I first started to utilise long-horizon prompting, I realised it
      wasn't an entirely familiar way of thinking about a coding challenge.
      Usually I would break down a task into a series of prioritised steps,
      tackling each one at a time - gradually building a more complete
      understanding of the overall picture. But long-horizon prompting requires
      a comprehensive, holistic vision upfront.
    </p>

    <p>
      And so the idea for a <em>one-prompt-site</em> was born. Not a
      particularly practical idea, but a fun context for learning.
    </p>

    <p>
      After initializing a new React app, I started with a simple sketch.
      Staying true to the theme, I had ChatGPT mock up the design so that it
      would be more readable moving forwards. This would be used as part of the{' '}
      <em>one-prompt-site</em> prompt.
    </p>

    <img
      src={initialDesign}
      alt="Initial hand-drawn design"
      width="4032"
      height="2268"
      className="blog-image blog-image--shadowed"
    />
    <img
      src={designMockup}
      alt="Final design mockup"
      width="1024"
      height="1024"
      className="blog-image blog-image--shadowed blog-image--outlined"
    />

    <p>
      Next, I wrote down anything I could think of - trying to capture
      everything required for the prompt.
    </p>

    <p>
      The result was lenghty, but rather than using it immediately, I first ran
      it past ChatGPT and asked if anything was missing or ambiguous (as
      suggested by{' '}
      <a
        href="https://www.prompthub.us/blog/using-llms-to-optimize-your-prompts?utm_source=chatgpt.com "
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Prompt Hub
      </a>
      ). This led to iteration before even reaching the IDE - a great practice
      when working in a context that has the Agent working for an extended
      period of time, as this inherently has a slow feedback loop.
    </p>

    <p>
      Finally, I asked the Agent to build my site. Unfortunately, even after a
      few alterations, I wasn't happy with what was produced.
    </p>

    <img
      src={badWebsiteAttempt}
      alt="Bad website attempt"
      width="2992"
      height="1794"
      className="blog-image blog-image--shadowed blog-image--outlined"
    />

    <p>
      It was at this stage I turned to{' '}
      <a
        href="https://promptengineering.org/system-prompts-in-large-language-models/"
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        system prompts
      </a>
      , known as{' '}
      <a
        href="https://docs.cursor.com/context/rules"
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Rules
      </a>{' '}
      in Cursor.
    </p>

    <p>
      These{' '}
      <a
        href="https://www.promptly.fyi/library"
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        things
      </a>{' '}
      are <em>powerful</em>. They are used to customise your Agent - building
      knowledge, context, and even behaviour. They frame the Agent's reasoning
      so that it can better stick to the brief and realise your vision.
    </p>

    <p>
      The most important change I made was a rule for the Agent to require
      confirmation at logical stages, and to ask questions when missing key
      information. This led to a much more successful outcome - both in terms of
      design and code quality. I was able to work with the Agent to build the
      website <em>together</em>.
    </p>

    <img
      src={agentWaitingForApproval}
      alt="AI agent waiting for approval"
      width="932"
      height="870"
      className="blog-image blog-image--shadowed"
    />

    <p>
      A highlight was being asked for more clarity around link styling. I hadn't
      given much information for this element previously, but <em>it</em>{' '}
      prompted <em>me</em> to have a think and provide clearer instruction. I
      was amazed the Agent spotted this gap and knew to ask for my input in
      plugging it.
    </p>

    <img
      src={linkStylingFeedback}
      alt="AI asking about link styling"
      width="468"
      height="80"
      className="blog-image blog-image--shadowed blog-image--centered"
    />

    <p>
      Overall this was a fun experience and the result was much stronger than I
      hoped for. The key lesson I'll be taking away is the value in thoughtful
      prompting, as well as the power in treating the Agent not as an algorithm,
      but as a partner to work with.
    </p>
    <hr className="divider" />
    <p>
      User and system prompts can be found{' '}
      <a
        href="https://github.com/josephmanghan/one-prompt-site/tree/main/.cursor/rules"
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
      .
    </p>
    <p className="blog-date">May, 2025</p>
  </div>
);

export default Blog;
