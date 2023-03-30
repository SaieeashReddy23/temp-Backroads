import { PageLinks, SocLinks } from '../data'

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {PageLinks.map(({ id, href, page }) => {
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {page}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className="footer-icons">
        {SocLinks.map(({ id, href, icon }) => {
          const iconclassName = `fab fa-${icon}`
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={iconclassName}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"> {new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
