import { PageLinks } from '../data'

const PageLinksComponent = () => {
  return (
    <ul className="nav-links" id="nav-links">
      {PageLinks.map((page) => {
        return (
          <li key={page.id}>
            <a href={page.href} className="nav-link">
              {page.page}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default PageLinksComponent
