import { BiSearch, BiHeart, BiCart } from "react-icons/bi";

import "./Header.scss";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScrolled = () => {
    const scrollOffset = window.scrollY;
    if (scrollOffset > 200) setScrolled(true);
    else setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrolled);
  }, []);

  return (
    <header className={`main-header ${scrolled ? "stickyHeader" : ""}`}>
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
