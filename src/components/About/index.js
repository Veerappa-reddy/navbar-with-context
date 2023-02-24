import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div>
          <Navbar />
          {isDarkTheme ? (
            <div className="home-dark-bg-container">
              <div className="home-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  alt="about"
                  className="home-img"
                />
                <h1 className="dark-home">About</h1>
              </div>
            </div>
          ) : (
            <div className="home-bg-container">
              <div className="home-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  alt="about"
                  className="home-img"
                />
                <h1>About</h1>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
