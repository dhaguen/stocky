
import './App.css';
import logo from "./stocky.svg"

function App() {

  return (
    <div className="App">

      <div>
        <div className="navbar">
          <div className="item-logo">
            <img src={logo} alt="the logo" className='item-logo'></img>
          </div>
          <div className="search-input-group">
            <div className="search-input-icon">
              <svg viewBox="0 0 24 24" height="24" className="search-input-icon-svg" preserveAspectRatio="xMinYMin meet">
                <path d="M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z"></path>
              </svg>
            </div>
            <input
              type="search"
              name="q"
              placeholder="Search for brand, color, etc."
              value=""
              autoComplete="off"
              spellCheck="false"
              autoCorrect="off"
              autoCapitalize="off"
              title="Search..."
              aria-label="Search..."
              className="search-input"
            />
          </div>
          <ul className="navbar-main-wrapper">
            <li className="navbar-browse">
              <a data-testid="RouterSwitcherLink" href="/sneakers">Browse</a>
            </li>
            <li className="item">
              <a href="https://stocky.com/news/">News</a>
            </li>
            <li className="item">
              <a href="https://stocky.com/about/how-it-works/">About</a>
            </li>
            <li className="item">
              <a data-testid="navbar-menu-help" href="https://stocky.com/help/" target="_blank" rel="noopener">Help</a>
            </li>
            <li className="item">
              <a data-testid="bidaskbutton" class="nav-ask" href="/sell">Sell</a>
            </li>
            <li className="item">
              <a>Bell</a>
            </li>
            <li className="item">Login</li>
            <li className="item">Sign Up</li>
          </ul>
        </div>
      </div>

      {/* <div>
        <div className="navbar">
          <div className="item">
            <img src={logo} alt="the logo" height="95%" ></img>
          </div>
          <div className="search-input-group">
            <div className="search-input-icon">
              <svg viewBox="-160 0 180 180">
                <path d="M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z"></path>
              </svg>
            </div>
            <input
              type="search"
              name="q"
              placeholder="Search for brand, color, etc."
              value=""
              autoComplete="off"
              spellCheck="false"
              autoCorrect="off"
              autoCapitalize="off"
              title="Search..."
              aria-label="Search..."
              className="search-input"
            />
          </div>
          <div className="item">Menu ...................djmdfkjdqmsfdjmqsdfj</div>
          <div className="item">mctr</div>
          <div className="item">Login</div>
          <div className="item">Sign Up</div>
        </div>

        <div className="wrapper">
          <div className="styleswitcher">Style Switcher</div>
          <div className="banner">Banner</div>
          <div className="recommanedforyou">Recommanded For You</div>
          <div className="gallery">Gallery</div>
          <div className="bottommenu">Bottom Menu</div>
        </div>
      </div> */}



    </div>
  );
}

export default App;
