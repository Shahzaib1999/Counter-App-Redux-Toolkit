import { useDispatch, useSelector } from "react-redux";
import { decreament, increament, reset } from "../../store/counterSlice";

const Counter = (props) => {
    // mapStateToProps
    const counter = useSelector((state) => {
        return state.counter.counter
    });

    // mapDispatchToProps
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <h2>Counter: {counter}</h2>
            </div>
            <div className="btnWrapper">
                <button className="addBtn" onClick={() => dispatch(increament())}>Add</button>
                <button className="subBtn" onClick={() => dispatch(reset())}>Reset</button>
                <button className="subBtn" onClick={() => dispatch(decreament())}>Subtract</button>
            </div>
        </div>
    );
};
export default Counter;
