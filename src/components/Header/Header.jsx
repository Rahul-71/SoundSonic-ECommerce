import { BiCart, BiHeart, BiSearch } from "react-icons/bi";

import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Search from "../Header/Search/Search";
import "./Header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleScrolled = () => {
    const scrollOffset = window.scrollY;
    if (scrollOffset > 200) setScrolled(true);
    else setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrolled);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "stickyHeader" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className="center">Sound Sonic</div>
          <div className="right">
            <BiSearch onClick={() => setShowSearch(!showSearch)} />
            <BiHeart />
            <span className="cart-icon" onClick={() => setShowCart(!showCart)}>
              <BiCart />
              <span>5</span>
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
