import React from 'react';
import './App.css';
import InputFields from './components/InputFields';

const App: React.FC = () => {
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputFields/>
    </div>
  );
}

export default App;
