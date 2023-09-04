import { Link } from 'react-router-dom';
// import { animateScroll } from 'react-scroll';

const BrowseSneakerFilterButton = ({ to, children, isActive, setActive }) => {
  
  const activeColor = '#006340';

  const handleClick = () => setActive(to);

  return (
    <div data-testid="browse-filter browse-filter-sneakers" class="css-1sjjcad-ListTypeCategoryContainer">
      <Link to={to}>
        <button className="chakra-button css-10ykmj3" style={{ color: isActive ? activeColor : 'black' }} onClick={handleClick} aria-label={children}>
          <h2 className="chakra-heading css-qw5mat" style={{ color: isActive ? activeColor : 'black' }}>{children}</h2>
        </button>
      </Link>
    </div>
  );
};

export default BrowseSneakerFilterButton;