import logo from './logo.svg';
import './App.css';
import Counter from "./hooks/useCallbackHook";
import InputForm from "./hooks/useRefHook";
import CheckUseEffect from "./hooks/useEffectHook";
import CheckUseMemo from "./hooks/useMemoHook";


function App() {
  return (
    <div className="App">
      <Counter />
      <InputForm />
      <CheckUseEffect />
      <CheckUseMemo />
    </div>
  );
}

export default App;
