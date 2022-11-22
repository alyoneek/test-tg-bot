//import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';

function App() {
  const { onToggle } = useTelegram();

  // useEffect(() => {
  //   tg.ready();
  // }, []);

  return (
    <div className="App">
      <Header></Header>
      <button onClick={onToggle}>Закрыть</button>
    </div>
  );
}

export default App;
