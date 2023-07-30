import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaCartPlus,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import "./SingleProduct.scss";
import prodImg from "../../assets/products/earbuds-prod-1.webp";
const SingleProduct = () => {
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={prodImg} alt="" />
          </div>
          <div className="right">
            <span className="name">Product Name</span>
            <span className="price">Product price</span>
            <span className="desc">Product description</span>

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
                <span>Headphones</span>
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
