import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  const total = basket?.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong>R {total}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={total}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"R"}
      />

      <button>Proceed To Checkout</button>
    </div>
  );
};

export default Subtotal;
