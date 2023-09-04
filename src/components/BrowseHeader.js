import React from 'react';
import { useLocation } from 'react-router-dom';

function BrowseHeader() {
  const location = useLocation();

  function getPageContent() {
    if (location.pathname === '/sneakers') {
      return (
        <div data-testid="browse-header-container" className="css-1rh07z7-StyledBrowseHeader">
          <h1 data-testid="browse-header" className="css-1fc9wnn-StyledH1">Sneakers</h1>
          <p data-testid="browse-blurb" className="css-dmqp8z-StyledP">
            Every sneaker you want is always available and verified by StockY. Buy and sell new sneakers & shoes from Air Jordan,
            adidas, Nike, Yeezy and more!
          </p>
        </div>
      );
    } else if (location.pathname === '/shoes') {
      return (
        <div data-testid="browse-header-container" className="css-1rh07z7-StyledBrowseHeader">
          <h1 data-testid="browse-header" className="css-1fc9wnn-StyledH1">Shoes</h1>
          <p data-testid="browse-blurb" className="css-dmqp8z-StyledP">
            Buy and Sell Shoes on StockY. Every item is StockY Verified.
          </p>
        </div>
      );
    } else if (location.pathname === '/apparel') {
      return (
        <div data-testid="browse-header-container" className="css-1rh07z7-StyledBrowseHeader">
          <h1 data-testid="browse-header" className="css-1fc9wnn-StyledH1">Apparel</h1>
          <p data-testid="browse-blurb" className="css-dmqp8z-StyledP">
            Supreme, OFF-WHITE, Fear of God, Travis Scott, BAPE, & more. Buy & sell streetwear right here on StockY
          </p>
        </div>
      );
    } else if (location.pathname === '/electronics') {
      return (
        <div data-testid="browse-header-container" className="css-1rh07z7-StyledBrowseHeader">
          <h1 data-testid="browse-header" className="css-1fc9wnn-StyledH1">Electronics</h1>
          <p data-testid="browse-blurb" className="css-dmqp8z-StyledP">
            Buy and Sell the latest and greatest electronics and gaming products, including the PS5, Xbox Series X/S, graphics cards & more.
          </p>
        </div>
      );
    } else if (location.pathname === '/tradingcards') {
      return (
        <div data-testid="browse-header-container" className="css-1rh07z7-StyledBrowseHeader">
          <h1 data-testid="browse-header" className="css-1fc9wnn-StyledH1">Trading Cards</h1>
          <p data-testid="browse-blurb" className="css-dmqp8z-StyledP">
            Shop Graded singles and sealed boxes of Basketball, Baseball, Football, Hockey, and even the latest releases from Pokémon including Shining Fates now on StockY.
          </p>
        </div>
      );
    } else if (location.pathname === '/collectibles') {
      return (
        <div data-testid="browse-header-container" className="css-1rh07z7-StyledBrowseHeader">
          <h1 data-testid="browse-header" className="css-1fc9wnn-StyledH1">Collectibles</h1>
          <p data-testid="browse-blurb" className="css-dmqp8z-StyledP">
            KAWS, Bearbrick, Takashi Murakami, Skate Decks, Funko Pop!, Trading Cards, & more. Buy & Sell all the latest collectibles right here on StockY.
          </p>
        </div>
      );
    } else if (location.pathname === '/accessories') {
      return (
        <div data-testid="browse-header-container" className="css-1rh07z7-StyledBrowseHeader">
          <h1 data-testid="browse-header" className="css-1fc9wnn-StyledH1">Accessories</h1>
          <p data-testid="browse-blurb" className="css-dmqp8z-StyledP">
            Buy and sell all the latest accessories right here on StockY.
          </p>
        </div>
      );
    } else { return null; }
  }

  return getPageContent();
}

export default BrowseHeader;