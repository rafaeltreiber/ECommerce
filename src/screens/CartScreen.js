import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToCart } from "../actions/cartActions";

export default function CartScreen() {
  let params = useParams();
  const [searchParams] = useSearchParams();

  const productId = params.id;
  const qty = searchParams.get("qty");

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : ProductId: {productId} Qty: {qty}
      </p>
    </div>
  );
}
