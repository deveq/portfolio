import { socials, links } from "./data";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="header">
      <div className="container footer__container">
        <ul className="nav__menu">
          {links.map((footerLink) => (
            <li key={footerLink.id}>
              <a href={footerLink.link}>{footerLink.title}</a>
            </li>
          ))}
        </ul>
        <div className="footer__socials">
          {socials.map((social) => (
            <a
              key={social.id}
              rel="noopener noreferrer"
              href={social.link}
              target="_blank"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="footer__copyright">
        <small>2023 Deveq&copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
