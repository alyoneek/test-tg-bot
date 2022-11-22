import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';

function App() {
  const { tg, onToggle } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <Button onClick={onToggle}>Закрыть</Button>
    </div>
  );
}

export default App;
