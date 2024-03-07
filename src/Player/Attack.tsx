import React, { useState } from 'react';

const Attack: React.FC = () => {
  const [input1, setInput1] = useState<number>(0);
  const [input2, setInput2] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, inputNumber: number) => {
    const inputValue = Number(event.target.value);
    if (inputNumber === 1) {
      setInput1(inputValue);
    } else {
      setInput2(inputValue);
    }
  };

  const calculateResult = () => {
    const calculatedResult = input1 + input2; // Perform your calculation here
    setResult(calculatedResult);
  };

  return (
    <div>
      <button onClick={calculateResult}>Calculate</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default Attack;
