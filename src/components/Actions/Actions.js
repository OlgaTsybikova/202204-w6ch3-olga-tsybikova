import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import PhoneContext from "../../contexts/PhoneContext";
import { callActionCreator } from "../../redux/feature/phoneSlice";
import Action from "../Action/Action";
import Display from "../Display/Display";

const Actions = () => {
  const dispatch = useDispatch();
  const { phoneNumber, hang } = useContext(PhoneContext);
  const { calling } = useSelector((state) => state.phone);

  return (
    <>
      <Display />
      {!calling && (
        <Action
          action="call"
          isActive={phoneNumber.length === 9}
          actionOnClick={() => dispatch(callActionCreator())}
        />
      )}
      {calling && <Action action="hang" isActive={true} actionOnClick={hang} />}
    </>
  );
};

export default Actions;
