import { useEffect } from 'react';
import './App.css';
import Button from './components/Button/Button';
import { tg, onToggle } from './hooks/useTelegram';

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Button onClick={onToggle}>Закрыть</Button>
    </div>
  );
}

export default App;
