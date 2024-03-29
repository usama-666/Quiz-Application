import { useReducer } from "react";

// function reducer(initialstate, action) {
//   console.log(initialstate, action);

//   if (action === "inc") return initialstate + action.payload;
//   // if (action === "inc") return state + 1;
//   if (action === "dec") return initialstate - 1;
//   if (action === "setCount") return action.payload;
// }

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return { ...state, count: 0, step: 1 };
    default:
      throw new Error("Action not Found");
  }
  // switch (action.type) {
  //   case "inc":
  //     return { ...state, count: state.count + 1 };
  //   case "dec":
  //     return { ...state, count: state.count - 1 };
  //   case "setCount":
  //     return { ...state, count: action.payload };
  //   case "setStep":
  //     return { ...state, step: action.payload };
  //   default:
  //     throw new Error("Action not Found");
  // }
  // if (action.type === "inc") return state + action.payload;
  // // if (action.type === "inc") return state + 1;
  // if (action.type === "dec") return state - 1;
  // if (action.type === "setCount") return action.payload;
}

function DateCounter() {
  // const [count, setCount] = useState(0);

  const inititalState = { count: 0, step: 1 };
  //useReducer Hook :- basically used for state upgradation for a certian value
  const [state, dispatch] = useReducer(reducer, inititalState);
  const { count, step } = state;
  // const [step, setStep] = useState(1);

  // useEffect(
  //   function () {
  //     console.log(count);
  //   },
  //   [count]
  // );

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // dispatch({ type: "dec", payload: -1 });
    dispatch({ type: "dec" });

    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    // dispatch({ type: "inc", payload: 1 });
    dispatch({ type: "inc" });

    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    // dispatch({ type: "setCount", payload: Number(e.target.value) });
    dispatch({ type: "setCount", payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
    // setStep(Number(e.target.value));
  };

  const reset = function () {
    dispatch({ type: "reset" });
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
