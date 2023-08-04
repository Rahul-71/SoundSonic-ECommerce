import {
  FaCartPlus,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
// import prodImg from "../../assets/products/earbuds-prod-1.webp";
import useFetch from "../../hooks/useFetch";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

import { useParams } from "react-router-dom";
import "./SingleProduct.scss";

const SingleProduct = () => {
  const { id } = useParams();

  // fetch the product based on prodId
  let prodData = useFetch(`/api/products/${id}?populate=*`);

  if (!prodData) return; // won't proceed further until recieve the product response

  prodData = prodData.data.attributes;

  let prodImg = prodData.img.data[0].attributes;

  let catgData = prodData.categories.data[0].attributes;

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={process.env.REACT_APP_DEV_APP_KEY + prodImg.url} alt="" />
          </div>
          <div className="right">
            <span className="name">{prodData.title}</span>
            <span className="price">{"₹" + prodData.price}</span>
            <span className="desc">{prodData.desc}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>
              <div className="add-to-cart-button">
                <FaCartPlus size={20} />
                ADD TO CART
              </div>
            </div>

            <span className="divider" />

            <div className="info-item">
              <span className="text-bold">
                Category:
                <span> {catgData.title}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={15} />
                  <FaTwitter size={15} />
                  <FaInstagram size={15} />
                  <FaLinkedinIn size={15} />
                  <FaPinterest size={15} />
                </span>
              </span>
            </div>
          </div>
        </div>

        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
