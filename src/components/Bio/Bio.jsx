import './bio.css';

const PHD_URL =
  'https://eprints.soton.ac.uk/443879/#:~:text=Manghan%2C%20Joseph%20Philip%20(2020),%2C%20Doctoral%20Thesis%2C%20237pp.';

const Bio = () => (
  <div className="bio container--small">
    <p>
      I'm Joe — a software engineer specializing in context engineering: the
      discipline of getting the best out of coding agents through strategy,
      context, sensors, and the compound loop running through them.
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
