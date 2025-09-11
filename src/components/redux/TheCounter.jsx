import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./actions";
import UsersList from "./UsersList";

const TheCounter = () => {
  const dispatch = useDispatch();
  const theCounterDetails = useSelector((state) => state.counter.count);

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <div>
      <h3>The Count : {theCounterDetails}</h3>
      <button onClick={() => handleIncrement()}> Increment </button>
      <button onClick={() => handleDecrement()}> Decrement </button>
      <button onClick={() => handleReset()}> Reset </button>
      <br/>
      <UsersList/>
    </div>
  );
};

export default TheCounter;
