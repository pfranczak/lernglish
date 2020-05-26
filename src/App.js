import React from 'react';
import './App.css';
import Words from "./sites/Words";
import Quiz from "./components/quiz/Quiz";

function App() {
  return (
      <div className="App">
          <Quiz />
          <Words/>
      </div>
  );
}

export default App;
