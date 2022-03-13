import { useParams, useSearchParams } from "react-router-dom";

export default function CartScreen() {
  let params = useParams();
  const [searchParams] = useSearchParams();

  const productId = params.id;
  const qty = searchParams.get("qty");
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : ProductId: {productId} Qty: {qty}
      </p>
    </div>
  );
}
