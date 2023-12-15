import CartItem from './CartItem';
import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduce, getAllCartItems } from '../../store/cart';

function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const onPurchaseButtonClick = () => {
    let cartIds = Object.keys(cart);
    cartIds.forEach(id => dispatch(removeProduce(id)));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    window.alert(
      "Purchased the following:\n" +
      `${cartItems.map(item => `${item.count} of ${item.name}`).join('\n')}`
    );
  }

  const cartItems = useSelector(getAllCartItems);

  if (!cartItems || !cartItems.length)
    return (
      <div className="cart">
        No items in the cart. Start selecting items to purchase.
      </div>
    );

  return (
    <div className="cart">
      <ul>
        {cartItems.map(item => <CartItem key={item.id} item={item} />)}
      </ul>
      <hr />
      <form onSubmit={onSubmit}>
        <button
          type="submit"
          onClick={onPurchaseButtonClick}
        >Purchase</button>
      </form>
    </div>
  )
}

export default Cart;
