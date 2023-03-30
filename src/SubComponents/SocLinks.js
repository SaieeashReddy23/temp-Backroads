import { SocLinks } from '../data'

const SocLinksComponent = () => {
  return (
    <ul className="nav-icons">
      {SocLinks.map((soc) => {
        const iconclassName = `fab fa-${soc.icon}`
        return (
          <li key={soc.id}>
            <a
              href={soc.href}
              target="_blank"
              rel="noreferrer"
              className="nav-icon"
            >
              <i className={iconclassName}></i>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default SocLinksComponent
