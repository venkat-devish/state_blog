import { useDispatch, useSelector } from "react-redux";
import { count, decrement, increment } from "../redux/features/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const countState = useSelector(count);
  return (
    <div>
      <h1>{countState}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
