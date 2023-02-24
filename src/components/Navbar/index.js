import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onChangeTheme = () => {
        toggleTheme()
      }

      return isDarkTheme ? (
        <ul className="navbar-dark-container">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              className="website-logo"
              alt="website logo"
            />
          </li>
          <li className="home-about-container">
            <Link to="/" className="nav-link">
              <h1 className="dark-home">Home</h1>
            </Link>
            <Link to="/about" className="nav-link">
              <h1 className="dark-home">About</h1>
            </Link>
          </li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
            className="website-logo"
            alt="website logo"
            onClick={onChangeTheme}
          />
        </ul>
      ) : (
        <nav className="navbar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
            className="website-logo"
            alt="website logo"
          />
          <div className="home-about-container">
            <Link to="/" className="nav-link">
              <h1 className="home">Home</h1>
            </Link>
            <Link to="/about" className="nav-link">
              <h1 className="about">About</h1>
            </Link>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
            className="website-logo"
            alt="website logo"
            onClick={onChangeTheme}
          />
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
