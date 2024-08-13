import CurrentTime from './components/CurrentTime'
import './App.css';

function App() {
  return (
    <div className="App">
      <CurrentTime updateIntervalInSeconds={3}/>
      <CurrentTime updateIntervalInSeconds={5}/>
    </div>
  );
}

export default App;
