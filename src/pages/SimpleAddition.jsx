import { useState } from "react";
import { motion } from "framer-motion";

const SimpleAddition = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  const calculateResult = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Invalid Input");
      return;
    }

    switch (operator) {
      case "+":
        setResult(n1 + n2);
        break;
      case "-":
        setResult(n1 - n2);
        break;
      case "*":
        setResult(n1 * n2);
        break;
      case "/":
        setResult(n2 !== 0 ? n1 / n2 : "Cannot divide by zero");
        break;
      default:
        setResult("Unknown operation");
    }
  };

  return (
    <>
      <div className="flex flex-1 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="p-5 border rounded-lg"
        >
          <div className="flex items-center justify-center gap-10 p-10">
            <input
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              className="h-14 w-14 text-center bg-transparent border outline-none rounded-md text-lg font-medium"
              type="number"
            />
            <input
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              className="h-14 w-14 text-center bg-transparent border outline-none rounded-md text-lg font-medium"
              type="number"
            />
            <select
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
              className="h-14 w-14 text-[#fff] text-xl bg-transparent outline-none border text-center rounded-md"
            >
              <option className="text-[#000] font-normal text-sm" value="+">
                +
              </option>
              <option className="text-[#000] font-normal text-sm" value="-">
                -
              </option>
              <option className="text-[#000] font-normal text-sm" value="*">
                *
              </option>
              <option className="text-[#000] font-normal text-sm " value="/">
                /
              </option>
            </select>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-mono">
              Result - {result !== null ? result : "N/A"}
            </h3>
          </div>
          <div className="text-center mt-10">
            <button
              onClick={calculateResult}
              className="text-xl border rounded-md p-4"
            >
              Calculate
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SimpleAddition;
