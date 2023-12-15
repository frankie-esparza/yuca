import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeProduce, incrementProduce, decrementProduce } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  const handleRemoveButtonClick = () => dispatch(removeProduce(item.id))
  const handlePlusButtonClick = () => dispatch(incrementProduce(item.id));
  const handleMinusButtonClick = () => dispatch(decrementProduce(item.id));

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
          onClick={handlePlusButtonClick}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={handleMinusButtonClick}
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
