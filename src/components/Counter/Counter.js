import { useState } from "react";

const Counter = (props) => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <div>
                <h2>Counter: {counter}</h2>
            </div>
            <div>
                <button className="addBtn" onClick={() => setCounter(counter + 1)}>Add</button>
                <button className="subBtn"  onClick={()=>setCounter(counter-1)}>Subtract</button>
            </div>
        </div>
    );
};
export default Counter;
