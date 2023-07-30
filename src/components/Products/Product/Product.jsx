import prodImg from "../../../assets/products/earbuds-prod-1.webp";
import "./Product.scss";
const Product = () => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={prodImg} alt="" />
      </div>
      <div className="prod-details">
        <span className="name">Product</span>
        <span className="price"> ₹499</span>
      </div>
    </div>
  );
};

export default Product;
