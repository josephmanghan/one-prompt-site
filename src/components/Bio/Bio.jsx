import './bio.css';

const PHD_URL =
  'https://eprints.soton.ac.uk/443879/#:~:text=Manghan%2C%20Joseph%20Philip%20(2020),%2C%20Doctoral%20Thesis%2C%20237pp.';
const DEVAI_CLI_URL = 'https://www.npmjs.com/package/devai-cli';
const GEM_FACTORY_URL = 'https://github.com/josephmanghan/gem-factory';

const Bio = () => (
  <div className="bio container--small">
    <p>
      I'm Joe – a software engineer specializing in context engineering and
      spec-driven development, building{' '}
      <a
        href={GEM_FACTORY_URL}
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        infrastructure
      </a>{' '}
      and{' '}
      <a
        href={DEVAI_CLI_URL}
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        tooling
      </a>{' '}
      that bring agents meaningfully into the SDLC.
    </p>
    <p>
      Beyond development, I enjoy weightlifting, reading, and long walks with my
      forever person. I hold a{' '}
      <a
        href={PHD_URL}
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        PhD
      </a>{' '}
      that explored using web practices to outsource compositional tasks to
      crowds.
    </p>
  </div>
);

export default Bio;
