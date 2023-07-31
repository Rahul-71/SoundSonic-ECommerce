import { MdClose } from "react-icons/md";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem";
const Cart = ({ setShowCart }) => {
  return (
    <div className="cart-panel">
      <div
        className="opac-layer"
        onClick={() => {
          setShowCart(false);
        }}
      ></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">Close</span>
          </span>
        </div>

        {/* <div className="empty-cart">
          <BsCartX />
          <span>No products in the cart.</span>
          <button className="return-cta">RETURN TO SHOP</button>
        </div> */}

        <>
          <CartItem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Subtotal: </span>
              <span className="text total"> ₹4999</span>
            </div>
            <div className="button">
              <button className="return-cta">Proceed to Checkout</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
