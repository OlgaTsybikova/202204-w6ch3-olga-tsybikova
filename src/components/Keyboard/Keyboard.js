import { useDispatch } from "react-redux";
import { AddDigitActionCreator } from "../../redux/feature/phoneSlice";
import Key from "../Key/Key";

const Keyboard = ({ removeLastDigit, calling }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const dispatch = useDispatch();
  const addDigit = () => {
    dispatch(AddDigitActionCreator());
  };

  return (
    <ol className="keyboard">
      {numbers.map((number) => (
        <Key
          key={number}
          text={number}
          disabled={calling}
          actionOnClick={() => addDigit(number)}
        />
      ))}
      <Key
        text="delete"
        big={true}
        actionOnClick={removeLastDigit}
        disabled={calling}
      />
    </ol>
  );
};

export default Keyboard;
