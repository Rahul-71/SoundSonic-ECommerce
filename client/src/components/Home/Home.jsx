import { useEffect } from "react";
import { fetchDataFromApi } from "../../utils/api";
import Category from "../Category/Category";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";

import "./Home.scss";
const Home = () => {
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    // using query parameter populate=* to fetch all attributes related to the category
    // this parameter is related to strapi
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category />
          <Products headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
