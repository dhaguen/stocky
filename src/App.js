
import './App.css';
import logo from "./stocky.svg";
import BrowseHeader from "./components/BrowseHeader";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Breadcrumb from './components/Breadcrumb';
import BrowseSneakerFilterButton from './components/BrowseSneakerFilter';
import ProductGrid from './components/ProductGrid';

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <Router>
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
            <ul className="navbar-main-wrapper css-1sbb4a7 ">
              <li className="navbar-menu-item-browse"><a data-testid="RouterSwitcherLink" href="/sneakers">Browse</a>
                <ul class="css-1g54w1b">
                  <li><a data-testid="navbar-menu-browse-submenu-sneakers" href="/sneakers">Sneakers</a>
                    <ul class="category category-level-2">
                      <div class="css-submenu-2-CategoriesContainer">
                        <li><a data-testid="navbar-menu-browse-submenu-adidas" href="/adidas">adidas</a>
                          <ul class="category category-level-3">
                            <div class="css-submenu-3-CategoriesContainer">
                              <li><a data-testid="navbar-menu-browse-submenu-adilette" href="/adidas/adilette">Adilette</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-basketball" href="/adidas/basketball">Basketball</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-eqt" href="/adidas/eqt">EQT</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-forum" href="/adidas/forum">Forum</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-gazelle" href="/adidas/gazelle">Gazelle</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-human race" href="/adidas/human-race">Human Race</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-iniki" href="/adidas/iniki">Iniki</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-ivy park" href="/adidas/ivy-park">Ivy Park</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-nite jogger" href="/adidas/nite-jogger">Nite Jogger</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-nmd" href="/adidas/nmd">NMD</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-ozweego" href="/adidas/ozweego">Ozweego</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-raf simons" href="/adidas/raf-simons">Raf Simons</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-running" href="/adidas/running">Running</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-samba" href="/adidas/samba">Samba</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-skateboarding" href="/adidas/skateboarding">Skateboarding</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-soccer" href="/adidas/soccer">Soccer</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-stan smith" href="/adidas/stan-smith">Stan Smith</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-superstar" href="/adidas/superstar">Superstar</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-terrex" href="/adidas/terrex">Terrex</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-trae young" href="/adidas/trae-young">Trae Young</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-ultra boost" href="/adidas/ultra-boost">Ultra Boost</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-zx" href="/adidas/zx">ZX</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-other" href="/adidas/footwear">Other</a></li>
                            </div>
                          </ul>
                        </li>
                        <li><a data-testid="navbar-menu-browse-submenu-air jordan" href="/retro-jordans">Air Jordan</a>
                          <ul class="category category-level-3">
                            <div class="css-submenu-3-CategoriesContainer">
                              <li><a data-testid="navbar-menu-browse-submenu-1" href="/retro-jordans/air-jordan-1">1</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-2" href="/retro-jordans/air-jordan-2">2</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-3" href="/retro-jordans/air-jordan-3">3</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-4" href="/retro-jordans/air-jordan-4">4</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-5" href="/retro-jordans/air-jordan-5">5</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-6" href="/retro-jordans/air-jordan-6">6</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-7" href="/retro-jordans/air-jordan-7">7</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-8" href="/retro-jordans/air-jordan-8">8</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-9" href="/retro-jordans/air-jordan-9">9</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-10" href="/retro-jordans/air-jordan-10">10</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-11" href="/retro-jordans/air-jordan-11">11</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-12" href="/retro-jordans/air-jordan-12">12</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-13" href="/retro-jordans/air-jordan-13">13</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-14" href="/retro-jordans/air-jordan-14">14</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-15" href="/retro-jordans/air-jordan-15">15</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-16" href="/retro-jordans/air-jordan-16">16</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-17" href="/retro-jordans/air-jordan-17">17</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-18" href="/retro-jordans/air-jordan-18">18</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-19" href="/retro-jordans/air-jordan-19">19</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-20" href="/retro-jordans/air-jordan-20">20</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-21" href="/retro-jordans/air-jordan-21">21</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-22" href="/retro-jordans/air-jordan-22">22</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-23" href="/retro-jordans/air-jordan-23">23</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-24" href="/retro-jordans/air-jordan-twenty-four">24</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-25" href="/retro-jordans/air-jordan-twenty-five">25</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-26" href="/retro-jordans/air-jordan-twenty-six">26</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-27" href="/retro-jordans/air-jordan-twenty-seven">27</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-28" href="/retro-jordans/air-jordan-28">28</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-29" href="/retro-jordans/air-jordan-29">29</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-30" href="/retro-jordans/air-jordan-30">30</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-31" href="/retro-jordans/air-jordan-31">31</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-32" href="/retro-jordans/air-jordan-32">32</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-33" href="/retro-jordans/air-jordan-33">33</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-34" href="/retro-jordans/air-jordan-34">34</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-35" href="/retro-jordans/air-jordan-35">35</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-36" href="/retro-jordans/36">36</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-future" href="/retro-jordans/future">Future</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-golf" href="/retro-jordans/golf">Golf</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-jordan off-white" href="/retro-jordans/jordan-off-white">Jordan OFF-WHITE</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-kids" href="/retro-jordans/kids">Kids</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-legacy 312" href="/retro-jordans/legacy-312">Legacy 312</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-packs" href="/retro-jordans/packs">Packs</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-spizike" href="/retro-jordans/spizike">Spizike</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-women" href="/retro-jordans/women">Women</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-other" href="/retro-jordans/footwear">Other</a></li>
                            </div>
                          </ul>
                        </li>
                        <li><a data-testid="navbar-menu-browse-submenu-converse" href="/converse">Converse</a>
                          <ul class="category category-level-3">
                            <div class="css-submenu-3-CategoriesContainer">
                              <li><a data-testid="navbar-menu-browse-submenu-chuck taylor" href="/converse/chuck-taylor">Chuck Taylor</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-comme des garçons" href="/converse/comme-des-garcons">Comme Des Garçons</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-fear of god" href="/converse/fear-of-god">Fear of God</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-golf le fleur" href="/converse/golf-le-fleur">Golf Le Fleur</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-off-white" href="/converse/off-white">OFF-WHITE</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-one star" href="/converse/one-star">One Star</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-rick owens" href="/converse/rick-owens">Rick Owens</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-other" href="/converse/other">Other</a></li>
                            </div>
                          </ul>
                        </li>
                        <li><a data-testid="navbar-menu-browse-submenu-new balance" href="/new-balance">New Balance</a>
                          <ul class="category category-level-3">
                            <div class="css-submenu-3-CategoriesContainer">
                              <li><a data-testid="navbar-menu-browse-submenu-2002r" href="/new-balance/2002r">2002R</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-327" href="/new-balance/327">327</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-530" href="/new-balance/530">530</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-550" href="/new-balance/550">550</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-574" href="/new-balance/574">574</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-57/40" href="/new-balance/5740">57/40</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-990v1" href="/new-balance/990v1">990v1</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-990v2" href="/new-balance/990v2">990v2</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-990v3" href="/new-balance/990v3">990v3</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-990v4" href="/new-balance/990v4">990v4</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-990v5" href="/new-balance/990v5">990v5</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-991" href="/new-balance/991">991</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-992" href="/new-balance/992">992</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-993" href="/new-balance/993">993</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-997" href="/new-balance/997">997</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-998" href="/new-balance/998">998</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-1300" href="/new-balance/1300">1300</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-aime leon dore" href="/new-balance/aime-leon-dore">Aime Leon Dore</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-bodega" href="/new-balance/bodega">Bodega</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-omn1s" href="/new-balance/omn1s">OMN1S</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-other" href="/new-balance/other">Other</a></li>
                            </div>
                          </ul>
                        </li>
                        <li><a data-testid="navbar-menu-browse-submenu-nike" href="/nike">Nike</a>
                          <ul class="category category-level-3">
                            <div class="css-submenu-3-CategoriesContainer">
                              <li><a data-testid="navbar-menu-browse-submenu-acg" href="/nike/acg">ACG</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-air force" href="/nike/air-force">Air Force</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-air max" href="/nike/air-max">Air Max</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-basketball" href="/nike/basketball">Basketball</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-blazer" href="/nike/blazer">Blazer</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-cactus plant flea market" href="/nike/cactus-plant-flea-market">Cactus Plant Flea Market</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-comme des garcons" href="/nike/comme-des-garcons">Comme Des Garcons</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-cortez" href="/nike/cortez">Cortez</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-daybreak" href="/nike/daybreak">Daybreak</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-dunk" href="/nike/dunk">Dunk</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-fear of god" href="/nike/fear-of-god-shoes">Fear Of God</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-foamposite" href="/nike/foamposite">Foamposite</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-huarache" href="/nike/huarache">Huarache</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-kd" href="/nike/kd">KD</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-kobe" href="/nike/kobe">Kobe</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-kyrie" href="/nike/kyrie">Kyrie</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-lebron" href="/nike/lebron">LeBron</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-mercurial" href="/nike/mercurial">Mercurial</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-metcon" href="/nike/metcon">Metcon</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-obj" href="/nike/obj">OBJ</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-presto" href="/nike/presto">Presto</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-react element" href="/nike/react-element">React Element</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-sacai" href="/nike/sacai">Sacai</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-sb" href="/nike/sb">SB</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-shox" href="/nike/shox">Shox</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-space hippie" href="/nike/space-hippie">Space Hippie</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-stranger things" href="/nike/stranger-things">Stranger Things</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-tailwind" href="/nike/tailwind">Tailwind</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-undercover" href="/nike/undercover">Undercover</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-yeezy" href="/nike/yeezy">Yeezy</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-zoomx" href="/nike/zoomx">ZoomX</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-other" href="/nike/footwear">Other</a></li>
                            </div>
                          </ul>
                        </li>
                        <li><a data-testid="navbar-menu-browse-submenu-puma" href="/puma">Puma</a>
                          <ul class="category category-level-3">
                            <div class="css-submenu-3-CategoriesContainer">
                              <li><a data-testid="navbar-menu-browse-submenu-lamelo ball" href="/puma/lamelo-ball">LaMelo Ball</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-rs-x" href="/puma/rs-x">RS-X</a></li>
                            </div>
                          </ul>
                        </li>
                        <li><a data-testid="navbar-menu-browse-submenu-reebok" href="/reebok">Reebok</a>
                          <ul class="category category-level-3">
                            <div class="css-submenu-3-CategoriesContainer">
                              <li><a data-testid="navbar-menu-browse-submenu-answer" href="/reebok/answer">Answer</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-beatnik" href="/reebok/beatnik">Beatnik</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-club c" href="/reebok/club-c">Club C</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-classic leather" href="/reebok/classic-leather">Classic Leather</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-instapump" href="/reebok/instapump">Instapump</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-kamikaze" href="/reebok/kamikaze">Kamikaze</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-pump" href="/reebok/pump">Pump</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-pyer moss" href="/reebok/pyer-moss">Pyer Moss</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-question" href="/reebok/question">Question</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-workout" href="/reebok/workout">Workout</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-other" href="/reebok/other">Other</a></li>
                            </div>
                          </ul>
                        </li>
                        <li><a data-testid="navbar-menu-browse-submenu-vans" href="/vans">Vans</a>
                          <ul class="category category-level-3">
                            <div class="css-submenu-3-CategoriesContainer">
                              <li><a data-testid="navbar-menu-browse-submenu-authentic" href="/vans/authentic">Authentic</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-era" href="/vans/era">Era</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-half cab" href="/vans/half-cab">Half Cab</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-old skool" href="/vans/old-skool">Old Skool</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-sk8-hi" href="/vans/sk8-hi">Sk8-Hi</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-slip-on" href="/vans/slip-on">Slip-On</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-supreme" href="/vans/supreme">Supreme</a></li>
                            </div>
                          </ul>
                        </li>
                        <li><a data-testid="navbar-menu-browse-submenu-yeezy" href="/yeezy">Yeezy</a>
                          <ul class="category category-level-3">
                            <div class="css-submenu-3-CategoriesContainer">
                              <li><a data-testid="navbar-menu-browse-submenu-350" href="/yeezy/350">350</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-380" href="/yeezy/380">380</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-450" href="/yeezy/450">450</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-500" href="/yeezy/500">500</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-700" href="/yeezy/700">700</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-750" href="/yeezy/750">750</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-950" href="/yeezy/950">950</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-boots" href="/yeezy/boots">Boots</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-foam rnnr" href="/yeezy/foam-runner">Foam RNNR</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-powerphase" href="/yeezy/powerphase">Powerphase</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-slides" href="/yeezy/slides">Slides</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-qntm" href="/yeezy/qntm">QNTM</a></li>
                            </div>
                          </ul>
                        </li>
                        <li><a data-testid="navbar-menu-browse-submenu-luxury brands" href="/luxury-brands">Luxury Brands</a>
                          <ul class="category category-level-3">
                            <div class="css-submenu-3-CategoriesContainer">
                              <li><a data-testid="navbar-menu-browse-submenu-amiri" href="/luxury-brands/amiri-sneakers">Amiri</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-alexander mcqueen" href="/luxury-brands/alexander-mcqueen">Alexander McQueen</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-balenciaga" href="/luxury-brands/balenciaga-sneakers">Balenciaga</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-burberry" href="/luxury-brands/burberry-sneakers">Burberry</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-chanel" href="/luxury-brands/chanel-sneakers">Chanel</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-common projects" href="/luxury-brands/common-projects">Common Projects</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-dior" href="/luxury-brands/dior-sneakers">Dior</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-golden goose" href="/luxury-brands/golden-goose">Golden Goose</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-gucci" href="/luxury-brands/gucci-sneakers">Gucci</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-lanvin" href="/luxury-brands/Lanvin">Lanvin</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-louis vuitton" href="/luxury-brands/louis-vuitton-sneakers">Louis Vuitton</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-off-white" href="/luxury-brands/off-white-shoes">OFF-WHITE</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-prada" href="/luxury-brands/prada-sneakers">Prada</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-saint laurent" href="/luxury-brands/saint-laurent-sneakers">Saint Laurent</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-versace" href="/luxury-brands/versace-sneakers">Versace</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-other" href="/luxury-brands/other-sneaker">Other</a></li>
                            </div>
                          </ul>
                        </li>
                        <li><a data-testid="navbar-menu-browse-submenu-other brands" href="/other-sneakers">Other Brands</a>
                          <ul class="category category-level-3">
                            <div class="css-submenu-3-CategoriesContainer">
                              <li><a data-testid="navbar-menu-browse-submenu-a bathing ape" href="/a-bathing-ape">A Bathing Ape</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-asics" href="/asics">ASICS</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-diadora" href="/diadora">Diadora</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-fila" href="/fila">Fila</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-hoka one one" href="/hoka-one-one">Hoka One One</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-karhu" href="/karhu">Karhu</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-li-ning" href="/li-ning">Li-Ning</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-mizuno" href="/mizuno">Mizuno</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-mschf" href="/mschf-sneakers">MSCHF</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-notwoways" href="/notwoways">notwoways</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-on" href="/on">On</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-salomon" href="/salomon">Salomon</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-saucony" href="/saucony">Saucony</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-the north face" href="/thenorthface-footwear">The North Face</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-under armour" href="/under-armour">Under Armour</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-veja" href="/veja">Veja</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-other" href="/other-sneakers-other">Other</a></li>
                            </div>
                          </ul>
                        </li>
                        <li><a data-testid="navbar-menu-browse-submenu-collections" href="/collections">Collections</a>
                          <ul class="category category-level-3">
                            <div class="css-submenu-3-CategoriesContainer">
                              <li><a data-testid="navbar-menu-browse-submenu-nike off-white" href="/collections/nike-off-white-sneakers">Nike Off-White</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-nike travis scott" href="/collections/nike-travis-scott-sneakers">Nike Travis Scott</a></li>
                            </div>
                          </ul>
                        </li>
                        <li><a data-testid="navbar-menu-browse-submenu-releases" href="/new-releases/sneakers">Releases</a>
                        </li>
                      </div>
                    </ul>
                  </li>
                  <li><a data-testid="navbar-menu-browse-submenu-shoes" href="/shoes">Shoes</a>
                    <ul class="category category-level-2">
                      <div class="css-submenu-2-CategoriesContainer">
                        <li><a data-testid="navbar-menu-browse-submenu-amina muaddi" href="/amina-muaddi-shoes">Amina Muaddi</a>
                          <ul class="category category-level-3">
                            <div class="css-submenu-3-CategoriesContainer">
                              <li><a data-testid="navbar-menu-browse-submenu-heels" href="/amina-muaddi-shoes/heels">Heels</a>
                              </li>
                            </div>
                          </ul>
                        </li>
                        <li><a data-testid="navbar-menu-browse-submenu-balenciaga" href="/balenciaga-shoes">Balenciaga</a>
                          <ul class="category category-level-3">
                            <div class="css-submenu-3-CategoriesContainer">
                              <li><a data-testid="navbar-menu-browse-submenu-boots" href="/balenciaga-shoes/boots">Boots</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-crocs" href="/balenciaga-shoes/crocs">Crocs</a></li>
                              <li><a data-testid="navbar-menu-browse-submenu-slides &amp; sandals" href="/balenciaga-shoes/slides-sandals">Slides &amp; Sandals</a></li>
                            </div>
                          </ul>
                        </li>
                        <li><a data-testid="navbar-menu-browse-submenu-birkenstock" href="/birkenstock">Birkenstock</a>
                          <ul class="category category-level-3">
                            <div class="css-submenu-3-CategoriesContainer">
                              <li><a data-testid="navbar-menu-browse-submenu-slides &amp; sandals" href="/birkenstock/slides-sandals">Slides &amp; Sandals</a></li><li><a data-testid="navbar-menu-browse-submenu-clogs" href="/birkenstock/clogs">Clogs</a></li>
                            </div>
                          </ul>
                        </li>
                        <li><a data-testid="navbar-menu-browse-submenu-chanel" href="/chanel-shoes">Chanel</a>
                          <ul class="category category-level-3">
                            <div class="css-submenu-3-CategoriesContainer"><li><a data-testid="navbar-menu-browse-submenu-heels" href="/chanel-shoes/heels">Heels</a></li><li><a data-testid="navbar-menu-browse-submenu-loafers" href="/chanel-shoes/loafers">Loafers</a></li><li><a data-testid="navbar-menu-browse-submenu-slides &amp; sandals" href="/chanel-shoes/slides-sandals">Slides &amp; Sandals</a></li>
                            </div>
                          </ul>
                        </li>
                        <li><a data-testid="navbar-menu-browse-submenu-christian louboutin" href="/christian-louboutin">Christian Louboutin</a><ul class="category category-level-3"><div class="css-submenu-3-CategoriesContainer"><li><a data-testid="navbar-menu-browse-submenu-heels" href="/christian-louboutin/heels">Heels</a></li><li><a data-testid="navbar-menu-browse-submenu-slides &amp; sandals" href="/christian-louboutin/slides-sandals">Slides &amp; Sandals</a></li></div></ul></li>
                        <li><a data-testid="navbar-menu-browse-submenu-clarks" href="/clarks">Clarks</a><ul class="category category-level-3"><div class="css-submenu-3-CategoriesContainer"><li><a data-testid="navbar-menu-browse-submenu-boots" href="/clarks/boots">Boots</a></li><li><a data-testid="navbar-menu-browse-submenu-oxfords" href="/clarks/oxfords">Oxfords</a></li></div></ul></li>
                        <li><a data-testid="navbar-menu-browse-submenu-crocs" href="/crocs">Crocs</a><ul class="category category-level-3"><div class="css-submenu-3-CategoriesContainer"><li><a data-testid="navbar-menu-browse-submenu-collaborations" href="/crocs/crocs-collaborations">Collaborations</a></li><li><a data-testid="navbar-menu-browse-submenu-slides &amp; sandals" href="/crocs/slides-sandals">Slides &amp; Sandals</a></li></div></ul></li>
                        <li><a data-testid="navbar-menu-browse-submenu-dior" href="/dior-shoes">Dior</a><ul class="category category-level-3"><div class="css-submenu-3-CategoriesContainer"><li><a data-testid="navbar-menu-browse-submenu-slides &amp; sandals" href="/dior-shoes/slides-sandals">Slides &amp; Sandals</a></li></div></ul></li>
                        <li><a data-testid="navbar-menu-browse-submenu-dr. martens" href="/dr-martens">Dr. Martens</a><ul class="category category-level-3"><div class="css-submenu-3-CategoriesContainer"><li><a data-testid="navbar-menu-browse-submenu-boots" href="/dr-martens/boots">Boots</a></li><li><a data-testid="navbar-menu-browse-submenu-loafers" href="/dr-martens/loafers">Loafers</a></li><li><a data-testid="navbar-menu-browse-submenu-oxfords" href="/dr-martens/oxfords">Oxfords</a></li></div></ul></li>
                        <li><a data-testid="navbar-menu-browse-submenu-gucci" href="/gucci-shoes">Gucci</a><ul class="category category-level-3"><div class="css-submenu-3-CategoriesContainer"><li><a data-testid="navbar-menu-browse-submenu-boots" href="/gucci-shoes/boots">Boots</a></li><li><a data-testid="navbar-menu-browse-submenu-flats" href="/gucci-shoes/flats">Flats</a></li><li><a data-testid="navbar-menu-browse-submenu-heels" href="/gucci-shoes/heels">Heels</a></li><li><a data-testid="navbar-menu-browse-submenu-loafers" href="/gucci-shoes/loafers">Loafers</a></li><li><a data-testid="navbar-menu-browse-submenu-slides &amp; sandals" href="/gucci-shoes/slides-sandals">Slides &amp; Sandals</a></li></div></ul>
                        </li>
                        <li><a data-testid="navbar-menu-browse-submenu-hermes" href="/hermes-shoes">Hermes</a><ul class="category category-level-3"><div class="css-submenu-3-CategoriesContainer"><li><a data-testid="navbar-menu-browse-submenu-espadrilles" href="/hermes-shoes/espadrilles">Espadrilles</a></li><li><a data-testid="navbar-menu-browse-submenu-slides &amp; sandals" href="/hermes-shoes/slides-sandals">Slides &amp; Sandals</a></li></div></ul></li>
                        <li><a data-testid="navbar-menu-browse-submenu-louis vuitton" href="/louis-vuitton-shoes">Louis Vuitton</a><ul class="category category-level-3"><div class="css-submenu-3-CategoriesContainer"><li><a data-testid="navbar-menu-browse-submenu-slides &amp; sandals" href="/louis-vuitton-shoes/slides-sandals">Slides &amp; Sandals</a></li></div></ul></li>
                        <li><a data-testid="navbar-menu-browse-submenu-polo ralph lauren" href="/polo-ralph-lauren-shoes">Polo Ralph Lauren</a><ul class="category category-level-3"><div class="css-submenu-3-CategoriesContainer"><li><a data-testid="navbar-menu-browse-submenu-boots" href="/polo-ralph-lauren-shoes/boots">Boots</a></li><li><a data-testid="navbar-menu-browse-submenu-loafers" href="/polo-ralph-lauren-shoes/loafers">Loafers</a></li><li><a data-testid="navbar-menu-browse-submenu-oxfords" href="/polo-ralph-lauren-shoes/oxfords">Oxfords</a></li><li><a data-testid="navbar-menu-browse-submenu-slides &amp; sandals" href="/polo-ralph-lauren-shoes/slides-sandals">Slides &amp; Sandals</a></li></div></ul></li>
                        <li><a data-testid="navbar-menu-browse-submenu-prada" href="/prada-shoes">Prada</a><ul class="category category-level-3"><div class="css-submenu-3-CategoriesContainer"><li><a data-testid="navbar-menu-browse-submenu-boots" href="/prada-shoes/boots">Boots</a></li><li><a data-testid="navbar-menu-browse-submenu-heels" href="/prada-shoes/heels">Heels</a></li><li><a data-testid="navbar-menu-browse-submenu-loafers" href="/prada-shoes/loafers">Loafers</a></li></div></ul></li>
                        <li><a data-testid="navbar-menu-browse-submenu-suicoke" href="/suicoke">Suicoke</a></li>
                        <li><a data-testid="navbar-menu-browse-submenu-timberland" href="/timberland">Timberland</a><ul class="category category-level-3"><div class="css-submenu-3-CategoriesContainer"><li><a data-testid="navbar-menu-browse-submenu-boots" href="/timberland/boots">Boots</a></li><li><a data-testid="navbar-menu-browse-submenu-oxfords" href="/timberland/oxfords">Oxfords</a></li></div></ul></li>
                        <li><a data-testid="navbar-menu-browse-submenu-ugg" href="/ugg">UGG</a><ul class="category category-level-3"><div class="css-submenu-3-CategoriesContainer"><li><a data-testid="navbar-menu-browse-submenu-boots" href="/ugg/boots">Boots</a></li><li><a data-testid="navbar-menu-browse-submenu-loafers" href="/ugg/loafers">Loafers</a></li><li><a data-testid="navbar-menu-browse-submenu-slides &amp; sandals" href="/ugg/slides-sandals">Slides &amp; Sandals</a></li><li><a data-testid="navbar-menu-browse-submenu-slippers" href="/ugg/slippers">Slippers</a></li></div></ul></li>
                        <li><a data-testid="navbar-menu-browse-submenu-versace" href="/versace-shoes">Versace</a><ul class="category category-level-3"><div class="css-submenu-3-CategoriesContainer"><li><a data-testid="navbar-menu-browse-submenu-slides &amp; sandals" href="/versace-shoes/slides-sandals">Slides &amp; Sandals</a></li><li><a data-testid="navbar-menu-browse-submenu-heels" href="/versace-shoes/heels">Heels</a></li></div></ul></li>
                        <li><a data-testid="navbar-menu-browse-submenu-other" href="/other-shoes">Other</a><ul class="category category-level-3"><div class="css-submenu-3-CategoriesContainer"><li><a data-testid="navbar-menu-browse-submenu-boots" href="/other-shoes/boots">Boots</a></li><li><a data-testid="navbar-menu-browse-submenu-slides &amp; sandals" href="/other-shoes/slides-sandals">Slides &amp; Sandals</a></li></div></ul></li>
                      </div>
                    </ul>
                  </li>
                  <li><a data-testid="navbar-menu-browse-submenu-apparel" href="/apparel">Apparel</a></li>
                  <li><a data-testid="navbar-menu-browse-submenu-electronics" href="/electronics">Electronics</a></li>
                  <li><a data-testid="navbar-menu-browse-submenu-tradingcards" href="/tradingcards">Trading Cards</a></li>
                  <li><a data-testid="navbar-menu-browse-submenu-collectibles" href="/collectibles">Collectibles</a></li>
                  <li><a data-testid="navbar-menu-browse-submenu-accessories" href="/accessories">Accessories</a></li>
                </ul>
              </li>
              <li className="navbar-menu-item">
                <a href="https://stocky.com/news/">News</a>
              </li>
              <li className="navbar-menu-item">
                <a href="https://stocky.com/about/how-it-works/">About</a>
              </li>
              <li className="navbar-menu-item">
                <a data-testid="navbar-menu-help" href="https://stocky.com/help/" target="_blank" rel="noopener">Help</a>
              </li>
              <li className="navbar-menu-item">
                <a data-testid="bidaskbutton" class="nav-ask" href="/sell">Sell</a>
              </li>
              <li className="navbar-menu-item">
                <button type="button" class="navbar-menu-notification-unread-icon" aria-label="Notification Unread Icon">
                  <svg viewBox="0 0 50 50" focusable="false" class="navbar-menu-notification-unread-icon-svg" aria-hidden="true"><path d="M26.7125 40.1775C26.7125 42.4213 24.8936 44.2402 22.6498 44.2402C20.406 44.2402 18.587 42.4213 18.587 40.1775H26.7125V40.1775Z" fill="currentColor"></path><path d="M35.9478 24.775C39.6217 24.775 42.6 21.7967 42.6 18.1227C42.6 14.4488 39.6217 11.4705 35.9478 11.4705C32.2738 11.4705 29.2955 14.4488 29.2955 18.1227C29.2955 21.7967 32.2738 24.775 35.9478 24.775Z" fill="#006340"></path><path d="M33.8309 27.9053C32.7725 27.6762 31.7935 27.2544 30.888 26.7192C31.079 29.2636 31.6062 32.724 33.0285 35.327H12.2586C14.8549 30.671 14.6183 23.7386 14.6052 23.4341C14.6052 18.3552 18.2357 14.2251 22.6977 14.2251C24.0343 14.2251 25.2771 14.6309 26.3894 15.2855C26.6583 14.383 27.0249 13.5255 27.5221 12.7487C26.4545 12.1667 25.2999 11.7469 24.0712 11.574L24.0518 7.39569C24.0485 6.62444 23.4208 6 22.6495 6C22.6473 6 22.6452 6 22.643 6C21.8684 6.00438 21.244 6.6354 21.2473 7.40883L21.2667 11.58C15.9388 12.3628 11.8008 17.355 11.8017 23.4888C11.9003 25.9822 11.4961 33.0286 8.47793 35.6754C8.03863 36.0588 7.88416 36.6767 8.09011 37.2222C8.29607 37.77 8.81863 38.1315 9.40254 38.1315H35.948C36.5494 38.1315 37.0841 37.7481 37.2769 37.1784C37.4686 36.6087 37.2769 35.9799 36.7992 35.614C35.028 34.2613 34.192 30.8956 33.8309 27.9053Z" fill="currentColor"></path></svg>
                </button>
              </li>
              <li className="navbar-menu-item">
                <button type="button" class="navbar-menu-login-button" to="" id="nav-login">Login</button>
              </li>
              <li className="navbar-menu-item">
                <button type="button" class="navbar-menu-signup-button" to="" id="nav-signup">Sign Up</button>
              </li>
            </ul>
          </div>
          <main role="main" data-component="Main" id="main-content" class="css-1mpa2hy">
            <div id="browse-wrapper">
              <BrowseHeader />
              <div data-component="all the catalog with filters,navigation, pages nav, button TOP" class="chakra-container css-gl3scl">
                <div data-component="SmartGridRow" class="css-catalog-grid">
                  <div data-component="left layout with brands nav and filters" class="css-8th5f9">
                    <div>
                      <ul data-component="BrowseSneakerFilter" class="css-1u222it">
                        <li>
                          <BrowseSneakerFilterButton to="/sneakers" isActive={activeComponent === '/sneakers'} setActive={setActiveComponent}>
                            Sneakers
                          </BrowseSneakerFilterButton>
                        </li>
                        <li>
                          <BrowseSneakerFilterButton to="/shoes" isActive={activeComponent === '/shoes'} setActive={setActiveComponent}>
                            Shoes
                          </BrowseSneakerFilterButton>
                        </li>
                        <li>
                          <BrowseSneakerFilterButton to="/apparel" isActive={activeComponent === '/apparel'} setActive={setActiveComponent}>
                            Apparel
                          </BrowseSneakerFilterButton>
                        </li>
                        <li>
                          <BrowseSneakerFilterButton to="/electronics" isActive={activeComponent === '/electronics'} setActive={setActiveComponent}>
                            Electronics
                          </BrowseSneakerFilterButton>
                        </li>
                        <li>
                          <BrowseSneakerFilterButton to="/tradingcards" isActive={activeComponent === '/tradingcards'} setActive={setActiveComponent}>
                            Trading Cards
                          </BrowseSneakerFilterButton>
                        </li>
                        <li>
                          <BrowseSneakerFilterButton to="/collectibles" isActive={activeComponent === '/collectibles'} setActive={setActiveComponent}>
                            Collectibles
                          </BrowseSneakerFilterButton>
                        </li>
                        <li>
                          <BrowseSneakerFilterButton to="/accessories" isActive={activeComponent === '/accessories'} setActive={setActiveComponent}>
                            Accessories
                          </BrowseSneakerFilterButton>
                        </li>
                      </ul>
                      <ul class="css-1u222it">
                        <li>
                          <BrowseSneakerFilterButton to="/belowretail" isActive={activeComponent === '/belowretail'} setActive={setActiveComponent}>
                            Below Retail
                          </BrowseSneakerFilterButton>
                        </li>
                      </ul>
                      <ul class="css-1u222it">
                        <li>
                          <div data-testid="browse-filter browse-filter-adidas" class="css-1sjjcad-ListTypeCategoryContainer">
                            <button type="button" class="chakra-button css-10ykmj3" aria-label="adidas">
                              <h2 class="chakra-heading css-12njvki">adidas</h2>
                            </button>
                          </div>
                        </li>
                        <li>
                          <div data-testid="browse-filter browse-filter-airjordan" class="css-1sjjcad-ListTypeCategoryContainer">
                            <button type="button" class="chakra-button css-10ykmj3" aria-label="Air Jordan">
                              <h2 class="chakra-heading css-12njvki">Air Jordan</h2>
                            </button>
                          </div>
                        </li>
                        <li>
                          <div data-testid="browse-filter browse-filter-converse" class="css-1sjjcad-ListTypeCategoryContainer">
                            <button type="button" class="chakra-button css-10ykmj3" aria-label="Converse">
                              <h2 class="chakra-heading css-12njvki">Converse</h2>
                            </button>
                          </div>
                        </li>
                        <li>
                          <div data-testid="browse-filter browse-filter-newbalance" class="css-1sjjcad-ListTypeCategoryContainer">
                            <button type="button" class="chakra-button css-10ykmj3" aria-label="New Balance">
                              <h2 class="chakra-heading css-12njvki">New Balance</h2>
                            </button>
                          </div>
                        </li>
                        <li>
                          <div data-testid="browse-filter browse-filter-nike" class="css-1sjjcad-ListTypeCategoryContainer">
                            <button type="button" class="chakra-button css-10ykmj3" aria-label="Nike">
                              <h2 class="chakra-heading css-12njvki">Nike</h2>
                            </button>
                          </div>
                        </li>
                        <li>
                          <div data-testid="browse-filter browse-filter-puma" class="css-1sjjcad-ListTypeCategoryContainer">
                            <button type="button" class="chakra-button css-10ykmj3" aria-label="Puma">
                              <h2 class="chakra-heading css-12njvki">Puma</h2>
                            </button>
                          </div>
                        </li>
                        <li>
                          <div data-testid="browse-filter browse-filter-reebok" class="css-1sjjcad-ListTypeCategoryContainer">
                            <button type="button" class="chakra-button css-10ykmj3" aria-label="Reebok">
                              <h2 class="chakra-heading css-12njvki">Reebok</h2>
                            </button>
                          </div>
                        </li>
                        <li>
                          <div data-testid="browse-filter browse-filter-vans" class="css-1sjjcad-ListTypeCategoryContainer">
                            <button type="button" class="chakra-button css-10ykmj3" aria-label="Vans">
                              <h2 class="chakra-heading css-12njvki">Vans</h2>
                            </button>
                          </div>
                        </li>
                        <li>
                          <div data-testid="browse-filter browse-filter-yeezy" class="css-1sjjcad-ListTypeCategoryContainer">
                            <button type="button" class="chakra-button css-10ykmj3" aria-label="Yeezy">
                              <h2 class="chakra-heading css-12njvki">Yeezy</h2>
                            </button>
                          </div>
                        </li>
                        <li>
                          <div data-testid="browse-filter browse-filter-luxurybrands" class="css-1sjjcad-ListTypeCategoryContainer">
                            <button type="button" class="chakra-button css-10ykmj3" aria-label="Luxury Brands">
                              <h2 class="chakra-heading css-12njvki">Luxury Brands</h2>
                            </button>
                          </div>
                        </li>
                        <li>
                          <div data-testid="browse-filter browse-filter-otherbrands" class="css-1sjjcad-ListTypeCategoryContainer">
                            <button type="button" class="chakra-button css-10ykmj3" aria-label="Other Brands">
                              <h2 class="chakra-heading css-12njvki">Other Brands</h2>
                            </button>
                          </div>
                        </li>
                        <li>
                          <div data-testid="browse-filter browse-filter-collections" class="css-1sjjcad-ListTypeCategoryContainer">
                            <button type="button" class="chakra-button css-10ykmj3" aria-label="Collections">
                              <h2 class="chakra-heading css-12njvki">Collections</h2>
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className='css-c8gdzb'>
                    <div className='css-b1ilzc'>
                      <div className='css-18k2d4l1j0z3q6'>
                        <div>
                          <div data_component='breadcrumb and product grid' className='css-1s07sm3'>
                            <div className='css-breadcrumb-container'>
                              <Breadcrumb />
                            </div>
                            <div data_component='product grid' className='css-grid-component-container'>
                              <ProductGrid />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

      </div >
    </Router >
  );
}

export default App;
