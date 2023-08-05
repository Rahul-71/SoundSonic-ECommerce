import { useContext } from "react";
import { BsCartX } from "react-icons/bs";
import { MdClose } from "react-icons/md";

import { Context } from "../../utils/context";
import CartItem from "./CartItem/CartItem";

import "./Cart.scss";

const Cart = ({ setShowCart }) => {
  const { cartSubTotal } = useContext(Context);

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

        {!(cartSubTotal > 0) && (
          <div className="empty-cart">
            <BsCartX />
            <span>No products in the cart.</span>
            <button className="return-cta" onClick={() => setShowCart(false)}>
              RETURN TO SHOP
            </button>
          </div>
        )}

        {cartSubTotal > 0 && (
          <>
            <CartItem />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal: </span>
                <span className="text total"> {`₹ ${cartSubTotal}`}</span>
              </div>
              <div className="button">
                <button className="return-cta">Proceed to Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
