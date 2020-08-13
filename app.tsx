import React, { useCallback, useState } from 'react';

const App: React.FC = () => {
  const [message, setMessage] = useState('Hello world');
  const [inputValue, setInputValue] = useState('Hello world');

  const handleChangeMessage = useCallback(() => {
    setMessage(inputValue);
  }, []);

  return (
    <div>
      <h1>message</h1>
      <input
        type='text'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={handleChangeMessage}>Mudar mensagem</button>
    </div>
  );
};
