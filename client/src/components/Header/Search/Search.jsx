import { MdClose } from "react-icons/md";
import prodImg from "../../../assets/products/earbuds-prod-1.webp";

import "./Search.scss";

const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for product" />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>

      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="img-container">
              <img src={prodImg} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">product name</span>
              <span className="desc">product desc</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;