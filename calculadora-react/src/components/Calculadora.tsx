import React, { useState } from 'react';

const Calculadora: React.FC = () => {
  const [valor, setValor] = useState<string>('');

  const handleInput = (input: string) => {
    setValor((prevValor) => prevValor + input);
  };

  const calcularResultado = () => {
    try {
      setValor(eval(valor).toString());
    } catch (error) {
      setValor('Erro');
    }
  };

  return (
    <div className="calculadora">
      <input type="text" value={valor} readOnly />
      <div className="botoes">
        <button onClick={() => handleInput('1')}>1</button>
        <button onClick={() => handleInput('2')}>2</button>
        <button onClick={() => handleInput('3')}>3</button>
        <button onClick={() => handleInput('+')}>+</button>
        <button onClick={() => handleInput('4')}>4</button>
        <button onClick={() => handleInput('5')}>5</button>
        <button onClick={() => handleInput('6')}>6</button>
        <button onClick={() => handleInput('-')}>-</button>
        <button onClick={() => handleInput('7')}>7</button>
        <button onClick={() => handleInput('8')}>8</button>
        <button onClick={() => handleInput('9')}>9</button>
        <button onClick={() => handleInput('*')}>*</button>
        <button onClick={() => handleInput('0')}>0</button>
        <button onClick={() => setValor('')}>C</button>
        <button onClick={calcularResultado}>=</button>
        <button onClick={() => handleInput('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculadora;