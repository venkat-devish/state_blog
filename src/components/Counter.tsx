import {
  count,
  decrement,
  increment,
  incrementByValue,
} from "../redux/features/counterSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";

const Counter = () => {
  const dispatch = useDispatch();
  const countState = useSelector(count);
  return (
    <div>
      <h4>{countState}</h4>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByValue(5))}>+5</button>
    </div>
  );
};

export default Counter;
