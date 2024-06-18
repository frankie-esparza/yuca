import CartItem from './CartItem';
import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduce, getAllCartItems } from '../../store/cart';

function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  let cartItems = useSelector(getAllCartItems);
  let sortedCartItems = cartItems.sort((a, b) => a.order - b.order);
  
  const onSubmit = (e) => {
    e.preventDefault();

    let cartString = cartItems.map(item => `${item.count} of ${item.name}`).join('\n');
    let message = "Purchased the following:\n" + cartString;

    // Dispatch the action to remove all items from the cart
    let cartIds = Object.keys(cart);
    cartIds.forEach(id => dispatch(removeProduce(id)));

    // Alert the message
    console.log(message);
    window.alert(message);
  }

  console.log('SORTED CART ITEMS', sortedCartItems);

  if (!cartItems || !cartItems.length)
    return (
      <div className="cart">
        No items in the cart. Start selecting items to purchase.
      </div>
    );

  return (
    <div className="cart">
      <ul>
        {sortedCartItems.map(item => <CartItem key={item.id} item={item} />)}
      </ul>
      <hr />
      <form onSubmit={onSubmit}>
        <button type="submit">Purchase</button>
      </form>
    </div>
  );
}

export default Cart;