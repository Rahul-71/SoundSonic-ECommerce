import { MdClose } from "react-icons/md";
import prodImg from "../../../assets/products/earbuds-prod-1.webp";

import useFetch from "../../../hooks/useFetch";

import "./Search.scss";
import { useEffect, useState } from "react";

const Search = ({ setShowSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  let searchResponse = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${searchQuery}`
  );

  if (!searchQuery.length) {
    searchResponse = [];
  }
  console.log("search response");
  console.log(searchResponse);

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search for product"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>

      <div className="search-result-content">
        <div className="search-results">
          {searchResponse?.data?.map((item) => (
            <div className="search-result-item">
              <div className="img-container">
                <img
                  src={
                    process.env.REACT_APP_DEV_APP_KEY +
                    item.attributes.img.data[0].attributes.url
                  }
                  alt=""
                />
              </div>
              <div className="prod-details">
                <span className="name">{item.attributes.title}</span>
                <span className="desc">{item.attributes.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
