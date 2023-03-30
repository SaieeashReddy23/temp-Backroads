import '../index.css'

import logo from '../images/logo.svg'
import PageLinksComponent from '../SubComponents/PageLinks'
import SocLinksComponent from '../SubComponents/SocLinks'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <PageLinksComponent />

        <SocLinksComponent />
      </div>
    </nav>
  )
}
export default Navbar
