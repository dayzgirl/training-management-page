import './App.css';
import React, { useState, useEffect } from 'react';
import TrainingForm from './components/TrainingForm';
import TrainingList from './components/TrainingList';
import './styles.css';

const App = () => {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    fetch('https://6608ce75a2a5dd477b14c598.mockapi.io/wk15/trainings')
      .then(response => response.json())
      .then(data => setTrainings(data))
      .catch(error => console.error('Error fetching trainings:', error));
  }, []);

  const handleAddTraining = (newTraining) => {
    fetch('https://6608ce75a2a5dd477b14c598.mockapi.io/wk15/trainings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTraining)
    })
    .then(response => response.json())
    .then(data => setTrainings([...trainings, data]))
    .catch(error => console.error('Error adding training:', error));
  };

  const handleDeleteTraining = (id) => {
    fetch(`https://6608ce75a2a5dd477b14c598.mockapi.io/wk15/trainings/${id}`, {
      method: 'DELETE'
    })
    .then(() => setTrainings(trainings.filter(training => training.id !== id)))
    .catch(error => console.error('Error deleting training:', error));
  };

  return (
    <div>
      <h1>New Hire Training Management Page</h1>
      <TrainingForm onSubmit={handleAddTraining} />
      <TrainingList trainings={trainings} onDelete={handleDeleteTraining} />
    </div>
  );
};

export default App;



/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
