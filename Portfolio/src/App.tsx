import { Routes, Route } from 'react-router-dom';
import { MainView } from './Views/Main-View';
import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainView />} />
      </Routes>
    </>
  );
};

export default App;
