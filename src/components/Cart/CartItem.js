import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeProduce } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  const handleRemoveButtonClick = () => {
    dispatch(removeProduce(item.id));
  }

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button
          className="cart-item-button"
        >
          +
        </button>
        <button
          className="cart-item-button"
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={handleRemoveButtonClick}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
