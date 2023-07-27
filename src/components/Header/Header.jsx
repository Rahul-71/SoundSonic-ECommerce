import { BiSearch, BiHeart, BiCart } from "react-icons/bi";

import "./Header.scss";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-content">
        <ul className="left">
          <li>Home</li>
          <li>About</li>
          <li>Categories</li>
        </ul>
        <div className="center">Sound Sonic</div>
        <div className="right">
          <BiSearch />
          <BiHeart />
          <span className="cart-icon">
            <BiCart />
            <span>5</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
