import "./Product.scss";
const Product = ({ id, prodData }) => {
  return (
    <div className="product-card">
      <div key={id} className="thumbnail">
        <img
          src={
            process.env.REACT_APP_DEV_APP_KEY +
            prodData.img.data[0].attributes.url
          }
          alt=""
        />
      </div>
      <div className="prod-details">
        <span className="name">{prodData.title}</span>
        <span className="price"> {`₹ ${prodData.price}`}</span>
      </div>
    </div>
  );
};

export default Product;
