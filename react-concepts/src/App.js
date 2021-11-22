import logo from './logo.svg';
import './App.css';
import Counter from "./hooks/useCallback";
import InputForm from "./hooks/useRefHook";


function App() {
  return (
    <div className="App">
      <Counter />
      <InputForm />
    </div>
  );
}

export default App;
