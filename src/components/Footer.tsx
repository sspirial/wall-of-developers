import "../App.css";
import data from "../data.json";

export function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footerContent">
        <h3 className="title">Follow Us</h3>
        <ul className="socialMedia">
          <li>
            <a
              href={data.contacts.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href={data.contacts.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href={data.contacts.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href={data.contacts.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        <div className="contact">
          <p>Email: {data.contacts.email}</p>
          <p>Phone: {data.contacts.phone}</p>
          <p>
            Website:{" "}
            <a
              href={`https://${data.contacts.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.contacts.website}
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
