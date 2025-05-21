import "../App.css";

export function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footerContent">
        <h3 className="title">Follow Us</h3>
        <ul className="socialMedia">
          <li>
            <a
              href="https://www.facebook.com/PwaniInnovationWeek"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/PwaniInnovation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/PwaniInnovation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/pwaniinnovationweek/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        <div className="contact">
          <p>Email: info@pwaniinnovation.ke</p>
          <p>Phone: +254 719 168 367</p>
          <p>
            Website:{" "}
            <a
              href="https://www.pwaniinnovation.ke"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.pwaniinnovationweek.co.ke
            </a>
          </p>
        </div>

        <p className="copyright">
          &copy; 2025 Pwani Innovation Week. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
