import React, { useState } from 'react';
import './contact.css';

const LINKEDIN_URL = 'https://www.linkedin.com/in/josephmanghan/';
const GITHUB_URL = 'https://github.com/josephmanghan';

const LinkedInSVG = () => (
  <svg
    className="contact__icon"
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="LinkedIn icon"
  >
    <rect width="24" height="24" fill="none" />
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
  </svg>
);

const GitHubSVG = () => (
  <svg
    className="contact__icon"
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 16 16"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="GitHub icon"
  >
    <rect width="16" height="16" fill="none" />
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
  </svg>
);

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('josephmanghan@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };
  return (
    <div className="contact">
      <p
        onClick={handleCopy}
        onKeyDown={(e) => e.key === 'Enter' && handleCopy()}
        tabIndex={0}
        role="button"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="contact__item"
        aria-label="Copy email address"
      >
        <span className="material-icons contact__icon">mail</span>
        <span className="contact__email">
          <span>josephmanghan@gmail.com</span>
          {(hovered || copied) && (
            <span className="contact__tooltip">
              {copied ? 'Copied!' : 'Copy to clipboard'}
            </span>
          )}
        </span>
      </p>
      <div className="contact__item">
        <LinkedInSVG />
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
          aria-label="View LinkedIn profile"
        >
          in/josephmanghan
        </a>
      </div>
      <div className="contact__item">
        <GitHubSVG />
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
          aria-label="View GitHub profile"
        >
          github.com/josephmanghan
        </a>
      </div>
    </div>
  );
};

export default Contact;
