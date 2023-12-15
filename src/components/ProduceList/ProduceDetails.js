import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProduce } from '../../store/cart';

function ProduceDetails({ produce }) {
  const cartItem = {};
  const dispatch = useDispatch();

  const [liked, setLiked] = useState(produce.liked);

  useEffect(() => {
    setLiked(produce.liked);
  }, [produce.liked])

  const handlePlusButtonClick = () => (dispatch(addProduce(produce.id)));
  const handleLikeButtonClick = () => (setLiked(!liked));

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (liked ? " selected" : "")}
          onClick={handleLikeButtonClick}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={handlePlusButtonClick}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li >
  );
}

export default ProduceDetails;
